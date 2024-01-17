import { SettingOutlined } from "@ant-design/icons";
import { Breadcrumb, Menu } from "antd";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);
import ModalSearchFilter from "../ModalSearchFilter/ModalSearchFilter";
import { useRouter } from "next/router";
import MobileNavBar from "./MobileNavBar";
import { useGetListBlogQuery } from "@/lib/Midleware/BlogQuery";
import BlogDetail from "./BlogDetail";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import BlogForm from "./BlogForm";
import { useAuth } from "@/hooks/authContext";

const Blog = () => {
  const { isAuthenticated, userName, userId, loginState, logout } = useAuth();
  console.log(userName)
  // const userName = "jakehu1608";

  const { data: ListBlog, refetch } = useGetListBlogQuery({
    userName: userName,
  });
  
  const load = () => {
    refetch();
  };

  const router = useRouter();
  const [openKeys, setOpenKeys] = useState("");

  // Hàm loại bỏ thẻ p từ chuỗi HTML
  function removePTags(htmlString) {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
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
        ? removePTags(item?.GroupTitle).slice(0, 22) + "..."
        : removePTags(item?.GroupTitle),
      `sub4-${item.GroupCode}`,
      <SettingOutlined />,
      !item?.NewListBlog || item?.NewListBlog?.length == 0
        ? null
        : item?.NewListBlog?.map((e) => {
            // console.log(e)
            return getItem(
              e?.title?.length > 24 ? e?.title?.slice(0, 22) + "..." : e?.title,
              e.id,
              null,
              null,
              e.id
            );
          })
    );
  });
  // console.log(ListBlog)
  // console.log(newItem)

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
          <div className={cx("SearchAndAddSubjects_ItemAll")}>
            <div className="tool-items">
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
            </div>
          </div>
          {displayContent()}
        </div>
      </div>
    </>
  );
};
export default Blog;
