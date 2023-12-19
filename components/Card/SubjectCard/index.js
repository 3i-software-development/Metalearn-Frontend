import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { GrDocumentTxt } from "react-icons/gr";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaFileSignature, FaFileAudio, FaShareAlt } from "react-icons/fa";
import { RiDownloadFill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { BsFillPinFill } from "react-icons/bs";
import moment from "moment";
import Item_file from "./Item_file";
import { Rate } from "antd";
import { useGetListFileCwQuery } from "@/lib/Midleware/FileCwQuery";
import Pagination from "@/components/Pagination/Pagination";

export default function Document_Cart(data) {
  const cx = classNames.bind(styles);
  const [query, setQuery] = useState({
    CatCode: "",
    SubjectCode: "",
    ObjectType: "",
    ObjectCode: "",
    FromDate: "",
    ToDate: "",
    FileName: "",
    FileType: "",
    Content: "",
    UserUpload: "admin",
    KeySearch: "",
    Count: "",
    CurrentPageView: 1,
    Length: 10,
  });
  const { data: fileCwQuery } = useGetListFileCwQuery(query);

  const handleQueryPage = (current, pageSize) => {
    setQuery({ ...query, CurrentPageView: current, Length: pageSize });
  };
  const total = fileCwQuery?.Object?.count;
  return (
    <div className={cx("Document_Cart_Wrap")}>
      {fileCwQuery?.Object?.data1.map((item, index) => {
        return (
          <div className={cx("Document_Cart_All")} key={index}>
            <div className={cx("Document_Cart_Icon")}>
              <GrDocumentTxt />
            </div>
            <div className={cx("Document_contact_all")}>
              <div className={cx("Document_main")}>
                <div className={cx("Document_Icon")}>
                  <Rate defaultValue={3} value={2} />
                </div>

                <h3 className={cx("Document_file_Title")}>{item.FileName}</h3>

                <div className={cx("size")}>
                  <span className={cx("label")}>{"Dung lượng : "}</span>
                  <span className={cx("value")}>{item.SizeOfFile} MB</span>
                </div>

                <div className={cx("time")}>
                  <span className={cx("label")}>{"Thời gian đăng : "}</span>
                  <span className={cx("value")}>
                    {moment(item.CreatedTime).format("DD/MM/YYYY HH:MM:SS")}
                  </span>
                </div>
              </div>

              <div className={cx("Document_Link_Wrapper")}>
                <div className={cx("Document_Link_Icon")}>
                  <Item_file
                    FaFileSignature={FaFileSignature}
                    content={"Sửa file"}
                  />
                  <Item_file
                    FaFileSignature={FaFileAudio}
                    content={"File nói"}
                  />
                  <Item_file
                    FaFileSignature={RiDownloadFill}
                    content={"Tải và mở file"}
                  />
                  <Item_file FaFileSignature={BiHash} content={"Hashtag"} />
                  <Item_file FaFileSignature={FaShareAlt} content={"Chia sẻ"} />
                  <Item_file FaFileSignature={BsFillPinFill} content={"Ghim"} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination
        total={total}
        handleQueryPage={handleQueryPage}
        current={query.CurrentPageView}
      />
    </div>
  );
}
