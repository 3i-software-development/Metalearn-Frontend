import React, { useState } from "react";
import Section from "../../Section/Section";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useGetListPractiveQuery } from "@/lib/Midleware/PractiveQuery";
import moment from "moment";
import Link from 'next/link';
import Pagination from "@/components/Pagination/Pagination";
import { useGetListCourseMobileQuery } from "@/lib/Midleware/CourseQuery";
import AvatarC from "@/components/Avatar/Avatar";
import ProgressC from "@/components/Progress/Progress";
import InfoIcon from '@mui/icons-material/Info';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';

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

  const { data: courseMobileQuery } = useGetListCourseMobileQuery({
    userName: "admin",
    isPublic: true,
  });
  console.log(courseMobileQuery);

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
          <table>
            <thead>
              <tr>
                <th>
                  Ảnh
                </th>
                <th>
                  Tên khóa học
                </th>
                <th>
                  Môn học
                </th>
                <th>
                  Người tạo
                </th>
                <th>
                  Thời lượng
                </th>
                <th>
                  Giá
                </th>
                <th className={cx("card-time")}>
                  Tiến độ
                </th>
                <th>
                  <i className="fa fa-recycle"></i>
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {courseMobileQuery?.Object?.map((element) => {
                return (
                  <tr key={element.LmsTaskCode}>
                    <Link href={`/lecture?courseCode=${element?.CourseCode}`}><AvatarC imageUrl={element?.ImgCover} /></Link>
                    <td className={cx("label")}>
                      <h4>
                        #{element?.CourseName} : [{element?.CourseCode}]
                      </h4>
                    </td>
                    <td className={cx("label")}>
                      <p>
                        {element?.SubjectName}
                      </p>
                    </td>
                    <td className={cx("label")}>
                      {element?.CreatedBy}
                    </td>
                    <td className={cx("label")}>
                      {element?.Duration}{element?.Unit}
                    </td>
                    <td className={cx("label")}>
                      {element?.Price}Coin
                    </td>
                    <td className={cx("label")}>
                      <ProgressC percent={element?.Percent} />
                    </td>
                    <td>
                      <div className={cx("list-icon")}>
                        <span title="file">
                          <InfoIcon />
                        </span>
                        <span title="file">
                          <ScreenShareOutlinedIcon />
                        </span>
                        <Link href={'/shareCourse'}>
                          <span title="file">
                            <ShareOutlinedIcon />
                          </span>
                        </Link>
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
                <div>
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
