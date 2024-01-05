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
import ViewBlog from "./ViewBlog";
import CreateBlog from "./CreateBlog";

const Blog = () => {
  const { data: ListBlog } = useGetListBlogQuery({
    userName: "admin",
  });

  const router = useRouter();
  const [openKeys, setOpenKeys] = useState(
    `${router.query.key ? router.query.key : "practive"}`
  );

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
      removePTags(item?.GroupTitle).slice(0, 22) + "...",
      `sub4-${item.GroupCode}`,
      <SettingOutlined />,
      !item?.NewListBlog || item?.NewListBlog?.length == 0
        ? null
        : item?.NewListBlog?.map((e) => {
          // console.log(e)
          return getItem(e?.title, e.cat_id, null, null, e.id);
        })
    );
  });
  // console.log(ListBlog?.Object)
  // console.log(newItem)

  const onOpenChange = (keys) => {
    setOpenKeys(keys.key);
    router.push(`${router.pathname}?key=${keys.key}`);
  };

  const displayContent = () => {
    switch (openKeys) {
      case "1391":
        if (router.query.id) return <ViewBlog />
        else if (router.query.page) return <CreateBlog />
        else return <BlogDetail catId={openKeys} />;
    }
  };
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
