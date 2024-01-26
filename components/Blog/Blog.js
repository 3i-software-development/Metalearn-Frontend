import { Menu } from "antd";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);
import { useRouter } from "next/router";
import MobileNavBar from "./MobileNavBar";
import { useGetListBlogQuery } from "@/lib/Midleware/BlogQuery";
import BlogDetail from "./BlogDetail";
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import BlogForm from "./BlogForm";
import { useAuth } from "@/hooks/authContext";
import cheerio from 'cheerio'

const Blog = () => {
  const { isAuthenticated, userName, userId, loginState, logout } = useAuth();
  console.log(userName)
  // const userName = "jakehu1608";

  const { data: ListBlog, refetch } = useGetListBlogQuery({
    // userName: userName,
    userName: 'admin',
  });

  const load = () => {
    refetch();
  };

  const router = useRouter();
  const [openKeys, setOpenKeys] = useState("");

  function htmlDecode(input) {
    // Check if input is a string
    if (typeof input !== 'string') {
      // Handle the case where input is not a string, for example, by returning an empty string
      return '';
    }

    // Use cheerio to create a virtual DOM structure from the HTML string
    const $ = cheerio.load(input);

    // Get the text content of the root element in the DOM structure
    return $.root().text();
  }

  useEffect(() => {
    if (router.query.key) {
      setOpenKeys(router.query.key);
    }
  }, [router.query.key]);


  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };

  const newItem = ListBlog?.Object?.map((item) => {
    return getItem(
      item?.GroupTitle?.length > 20
        ? htmlDecode(item?.GroupTitle)?.slice(0, 22) + "..."
        : htmlDecode(item?.GroupTitle),
      `sub4-${item.GroupCode}`,
      <SnippetFolderIcon style={{ color: '#457b9d' }} />,
      !item?.NewListBlog || item?.NewListBlog?.length == 0
        ? null
        : item?.NewListBlog?.map((e) => {
          // console.log(e)
          return getItem(
            e?.title?.length > 24 ? htmlDecode(e?.title)?.slice(0, 22) + "..." : htmlDecode(e?.title),
            e.id,
            null,
            null,
            e.id
          );
        })
    );
  });
  console.log(ListBlog)
  console.log(newItem)

  const onOpenChange = (keys) => {
    setOpenKeys(keys.key);
    router.push(`${router.pathname}?key=${keys.key}`);
  };

  const displayContent = () => {
    if (router.query.page) return <BlogForm />;
    else return <BlogDetail load={load} />;
  };

  useEffect(() => {

  }, [openKeys]);

  return (
    <>
      <div className={cx("person")}>
        <div className={cx("nav-bar")}>
          <span className="hidden nav-toggle">
            <i className="fa fa-bars" aria-hidden="true"></i>&nbsp; Navigation
          </span>
          <Menu
            mode="inline"
            defaultSelectedKeys={openKeys}
            onClick={onOpenChange}
            items={newItem}
          />
        </div>
        <div className={cx("nav-bar-mobile")}>
          <MobileNavBar />
        </div>
        <div className={cx("content")}>
          {/* <div className="tool-items">
              <span
                className={cx("search-icon")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <ModalSearchFilter />
                <Link href={"/blog?key=1391&page=createBlog"}>
                 <AddIcon
                    style={{
                      fontSize: "30px",
                      position: "relative",
                      bottom: 2,
                    }}
                  />
                </Link>
              </span>
            </div> */}
          {displayContent()}
        </div>
      </div>
    </>
  );
};
export default Blog;
