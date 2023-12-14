import React, { useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReplayIcon from '@mui/icons-material/Replay';
import InfoIcon from '@mui/icons-material/Info';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Section from "../../Section/Section";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useGetListPractiveQuery } from "@/lib/Midleware/PractiveQuery";
import moment from "moment";
import Pagination from "@/components/Pagination/Pagination";
const cx = classNames.bind(styles);
const CourseDev = ({ total }) => {
  const [query, setQuery] = useState({
    CurrentPageList: 1,
    Length: 10,
    FromDate: "",
    ToDate: "",
    UserName: "admin",
    UserId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    Status: "",
    Object: "",
    ObjType: "",
    CardName: "",
  });

  const { data: practiveQuery } = useGetListPractiveQuery(query);

  const diffMoment = (startDate, endDate) => {
    if (!endDate) return "Không giới hạn thời gian";
    const start = moment(startDate);
    const end = moment(endDate);
    const between = moment.duration(start.diff(end));
    return "Còn " + moment.utc(between.asMilliseconds()).format("hh : mm : ss");
  };

  const handleQueryPage = (current, pageSize) => {
    setQuery({ ...query, CurrentPageList: current, Length: pageSize });
  };

  return (
    <Section>
      <div className={cx("practice")}>
        <div className={cx("on-pc")}>
          <table className={cx("application-list")}>
            <thead className={cx("table-head")}>
              <tr>
                <th className={cx("titleCard")}>
                  <i className="fa fa-paper-plane"></i>
                  Tên khóa học
                </th>
                <th className={cx("card-status")}>
                  <i className="fa fa-newspaper"></i>
                  Mô tả
                </th>
                <th className={cx("card-time")}>
                  <i className="fa fa-calendar"></i>
                  Thời gian
                </th>
                <th className={cx("card-actions")}>
                  <i className="fa fa-recycle"></i>
                 Thao tác
                </th>
              </tr>
            </thead>
            <tbody className={cx("table-body")}>
              {practiveQuery?.Object?.data.map((element) => {
                return (
                  <tr key={element.LmsTaskCode} className={cx("card")}>
                    <td className={cx("titleCard")}>
                      <h4>
                        #{element.LmsTaskCode} : {element.LmsTaskName}
                      </h4>
                    </td>
                    <td className={cx("card-status")}>
                      <div className={cx("status")}>
                        <p className={cx("label")}>Mô tả....</p>
                      </div>
                    </td>
                    <td className={cx("card-time")}>
                      <div className={cx("timeStart")}>
                        <span>
                          [{moment(element.BeginTime).format("DD : MM : YYYY")}]
                        </span>
                        {element.EndTime && (
                          <span>
                            [{moment(element.EndTime).format("DD : MM : YYYY")}]
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={cx("card-description")}>
                      <div className={cx("listIcon")}>
                        {/* <span title="Sửa">
                          <i className="fa-solid fa-pen"></i>
                        </span> */}
                        {/* <span title="Căn chỉnh">
                          <i className="fa-solid fa-align-center"></i>
                        </span>
                        <span title="Trò chuyện">
                          <i className="fa-solid fa-comment-dots"></i>
                        </span> */}
                        {/* <span title="Thông báo">
                          <i className="fa-solid fa-bell"></i>
                        </span> */}
                        <span title=" file">
                          <InfoIcon className={cx("iconfile")}/>
                        </span>
                        <span title="Reload file">
                          <ReplayIcon className={cx("iconreload")}/>
                        </span>
                        <span title="Copy file">
                          <ContentCopyIcon className={cx("iconcopy")}/>
                        </span>
                      </div>
                    </td>

                    <td className={cx("card-actions")}>
                      <div className={cx("listIcon")}>
                        <span title="Download file">
                          <FileDownloadIcon className={cx("icondownload")}/>
                        </span>
                        <span title="Delete file">
                          <DeleteOutlineIcon className={cx("icondelete")}/>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={cx("on-mobile")}>
          {practiveQuery?.Object?.data.map((element) => {
            return (
              <div key={element.LmsTaskCode} className={cx("card")}>
                <div className={cx("titleCard")}>
                  <h4>
                    #{element.LmsTaskCode} : {element.LmsTaskName}
                  </h4>
                </div>
                <div className={cx("card-status")}>
                  <div className={cx("status")}>
                    <span className={cx("label")}>{element.Status}</span>
                    <span>
                      {diffMoment(element.BeginTime, element.EndTime)}
                    </span>
                  </div>
                </div>
                <div className={cx("card-time")}>
                  <div className={cx("timeStart")}>
                    <span>
                      [{moment(element.BeginTime).format("DD : MM : YYYY")}]
                    </span>
                    {element.EndTime && (
                      <span>
                        [{moment(element.EndTime).format("DD : MM : YYYY")}]
                      </span>
                    )}
                  </div>
                </div>
                <div className={cx("card-actions")}>
                  <div className={cx("listIcon")}>
                    <span title="Sửa">
                      <i className="fa-solid fa-pen"></i>
                    </span>
                    <span title="Căn chỉnh">
                      <i className="fa-solid fa-align-center"></i>
                    </span>
                    <span title="Trò chuyện">
                      <i className="fa-solid fa-comment-dots"></i>
                    </span>
                    <span title="Thông báo">
                      <i className="fa-solid fa-bell"></i>
                    </span>
                    <span title="File">
                      <i className="fa-solid fa-file"></i>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        total={total}
        handleQueryPage={handleQueryPage}
        current={query.CurrentPageList}
      />
    </Section>
  );
};

export default CourseDev;
