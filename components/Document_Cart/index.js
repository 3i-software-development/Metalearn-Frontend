import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { GrDocumentTxt } from "react-icons/gr";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaFileSignature, FaFileAudio, FaShareAlt } from "react-icons/fa";
import { RiDownloadFill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { BsFillPinFill } from "react-icons/bs";

import Item_file from "./Item_file";

export default function Document_Cart() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("Document_Cart_Wrap")}>
      <div className={cx("Document_Cart_All")}>
        <div className={cx("Document_Cart_Icon")}>
          <GrDocumentTxt />
        </div>
        <div className={cx("Document_contact_all")}>
          <div>
            <span className={cx("Document_file_Title")}>Title.pnj</span>
          </div>
          <div className={cx("Document_content_Number")}>0.041 mb</div>
          <div className={cx("Document_Icon")}>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <div className={cx("Document_content_Number")}>12/11/2022</div>
          <div className={cx("Document_Link_Wrapper")}>
            <div className={cx("Document_Link_Icon")}>
              <Item_file
                FaFileSignature={FaFileSignature}
                content={"Sửa file"}
              />
              <Item_file FaFileSignature={FaFileAudio} content={"File nói"} />
              <Item_file
                FaFileSignature={RiDownloadFill}
                content={"Tải và mở file"}
              />
            </div>
            <div className={cx("Document_Link_Icon")}>
              <Item_file FaFileSignature={BiHash} content={"Hashtag"} />
              <Item_file FaFileSignature={FaShareAlt} content={"Chia sẻ"} />
              <Item_file FaFileSignature={BsFillPinFill} content={"Ghim"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
