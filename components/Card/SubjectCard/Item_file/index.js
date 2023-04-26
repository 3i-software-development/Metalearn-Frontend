import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

export default function Item_file({FaFileSignature,content}) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("Document_file_wrap")}>
      <FaFileSignature className={cx("Document_file_icon")} />
      <div>
        <p className={cx("Document_file_content")}>{content}</p>
      </div>
    </div>
  );
}
