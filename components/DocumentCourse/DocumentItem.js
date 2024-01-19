import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Rate } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import FileOpenRoundedIcon from "@mui/icons-material/FileOpenRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { useSelector } from "react-redux";
import moment from "moment";

const cx = classNames.bind(style);

const ExamItem = (props) => {
  // console.log(props);
  const [files, setFiles] = useState();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    width: "600px",
    height: "670px",
  };

  const [query, setQuery] = useState({
    CatCode: "",
    UserName: "admin",
    SubjectCode: "TIENGANH-5",
    ObjectType: "",
    ObjectCode: "",
    FromDate: "",
    ToDate: "",
    FileName: "",
    FileType: "",
    Content: "",
    UserUpload: "",
    KeySearch: "",
    Count: undefined,
    CurrentPageView: 1,
    Length: 15,
  });

  const fetchFile = async () => {
    try {
      const res = await axios.post(
        "https://admin.metalearn.vn/MobileLogin/GetListFileCw",
        query,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setFiles(res.data.Object.data1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  // console.log(files);

  const [linkImg, setLinkImg] = useState("");
  const handleView = async (id) => {
    const res = await axios.post(
      "https://admin.metalearn.vn/MobileLogin/CreateTempFile",
      { id },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const res1 = await axios.get(
      `https://admin.metalearn.vn/uploads/tempFile/${res.data.Object.split("\\")[2]
      }`
    );

    setOpen(true);
    setLinkImg(res1.config.url);
  };

  const { keyword, timeStart, timeEnd } = useSelector(
    (state) => state.courseDocument
  );

  useEffect(() => {
    if (keyword || (timeStart && timeEnd)) {
      const lowerCaseKeyword = keyword.toLowerCase();

      console.log("TimeStart: " + moment(timeStart).format("YYYY-MM-DD"));
      console.log("TimeEnd: " + moment(timeEnd).format("YYYY-MM-DD"));

      const newData = files?.filter((item) => {
        console.log('create time: ' + moment(item?.CreatedTime).format("YYYY-MM-DD"))

        const checkKeyWord =
          item?.FileName.toLowerCase()?.includes(lowerCaseKeyword);

        const checkDate =
          moment(timeStart).format("YYYY-MM-DD") <=
          moment(item?.CreatedTime).format("YYYY-MM-DD") &&
          moment(timeEnd).format("YYYY-MM-DD") >=
          moment(item?.CreatedTime).format("YYYY-MM-DD");

        console.log('Check date: ' + checkDate);
        return checkKeyWord || checkDate;
      });

      console.log("check newData:", newData);
      setFiles(newData);
    } else {
      fetchFile();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, timeEnd, timeStart]);

  return (
    <>
      <ul className={cx("toplist")}>
        {files?.map((item, i) => {
          return (
            <div key={i}>
              <li style={{ padding: "14px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 25px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ paddingRight: "20px" }}>
                      <LibraryBooksIcon style={{ fontSize: "27px" }} />
                    </div>

                    <div>
                      <p style={{ fontWeight: "bold", fontSize: "14px" }}>
                        {" "}
                        {item?.FileName} [{item?.MetaCode}]
                      </p>
                      <p>Người tạo: {item?.CreatedBy}</p>
                      <p>Kích thước: {item?.FileSize}</p>
                      <p>Trạng thái: Đã đọc</p>

                      <div
                        style={{
                          display: "flex",
                          columnGap: "10px",
                          marginTop: "10px",
                        }}
                      >
                        <DriveFileRenameOutlineRoundedIcon
                          style={{ fontSize: "19px", color: "#0077b6" }}
                        />
                        <FileDownloadRoundedIcon
                          style={{ fontSize: "19px", color: "#0077b6" }}
                        />
                        <span onClick={() => handleView(item?.Id)}>
                          <FileOpenRoundedIcon
                            style={{ fontSize: "19px", color: "#0077b6" }}
                          />
                        </span>
                        <FileUploadRoundedIcon
                          style={{ fontSize: "19px", color: "#0077b6" }}
                        />
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      display: "flex",
                      columnGap: "7px",
                      marginTop: "10px",
                    }}
                  >
                    <TagRoundedIcon
                      style={{ color: "#415a77", fontSize: "18px" }}
                    />
                    <ShareRoundedIcon
                      style={{ color: "#415a77", fontSize: "18px" }}
                    />
                    <PushPinRoundedIcon
                      style={{ color: "#415a77", fontSize: "18px" }}
                    />
                  </span>
                </div>
              </li>
            </div>
          );
        })}
      </ul>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img alt="file" src={linkImg} />
        </Box>
      </Modal>
    </>
  );
};

export default ExamItem;
