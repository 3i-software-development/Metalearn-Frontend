import React, { useEffect, useState } from "react";
import Section from "../../Section/Section";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useGetListPractiveQuery } from "@/lib/Midleware/PractiveQuery";
import moment from "moment";
import Link from "next/link";
import Pagination from "@/components/Pagination/Pagination";
import { useGetListCourseMobileQuery } from "@/lib/Midleware/CourseQuery";
import AvatarC from "@/components/Avatar/Avatar";
import ProgressC from "@/components/Progress/Progress";
import InfoIcon from "@mui/icons-material/Info";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const CourseList = ({ total }) => {

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
  //b phải truyền cái filter này xuống modal kia rồi set cái filter này  from dât hay gì đấy chứ k thể gọi lại xong tìm thế đc đâu 

  const [filterData, setFilterData] = useState([]);
  const init = useSelector(state => state.course.products)
  // console.log("check innit", init)
  useEffect(() => {
    setFilterData(init[0])

  }, [init])
  // console.log("check datafilter", filterData);



  const { data: practiveQuery } = useGetListPractiveQuery(query); //d đáy
  // console.log("check practiveQuery",practiveQuery)

  const { data: courseMobileQuery } = useGetListCourseMobileQuery({
    userName: "admin",
    isPublic: true,
  });
  // console.log("check data",courseMobileQuery?.Object)

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
                <th>Ảnh</th>
                <th>Tên khóa học</th>
                <th>Môn học</th>
                <th>Người tạo</th>
                <th>Thời lượng</th>
                <th>Giá</th>
                <th className={cx("card-time")}>Tiến độ</th>
                <th>
                  <i className="fa fa-recycle"></i>
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {filterData !== '' ?
                <>
                  {filterData?.map((element, i) => {
                    return (
                      <tr key={i}>
                        <Link href={`/lecture?courseCode=${element?.CourseCode}`}>
                          <AvatarC imageUrl={element?.ImgCover} />
                        </Link>
                        <td className={cx("label")}>
                          <Link href={`/lecture?courseCode=${element?.CourseCode}`}>
                            <h4>
                              #{element?.CourseName} : [{element?.CourseCode}]
                            </h4>
                          </Link>
                        </td>
                        <td className={cx("label")}>
                          <p>{element?.SubjectName}</p>
                        </td>
                        <td className={cx("label")}>{element?.CreatedBy}</td>
                        <td className={cx("label")}>
                          {element?.Duration}
                          {element?.Unit}
                        </td>
                        <td className={cx("label")}>{element?.Price}Coin</td>
                        <td className={cx("label")}>
                          <ProgressC percent={element?.Percent} />
                        </td>
                        <td>
                          <div className={cx("list-icon")}>
                            <span title="info">
                              <InfoIcon className={cx("icon-info")} />
                            </span>
                            <Link href={"/shareResult"}>
                              <span title="Chia sẻ kết quả rèn luyện">
                                <ScreenShareOutlinedIcon
                                  className={cx("icon-info")}
                                />
                              </span>
                            </Link>
                            <Link href={"/shareCourse"}>
                              <span title="Chia sẻ khóa học">
                                <ShareOutlinedIcon className={cx("icon-info")} />
                              </span>
                            </Link>
                          </div>
                        </td>
                      </tr>


                    )
                  })}
                </>
                : ''
              }
              {filterData == '' || filterData == undefined ?
                <>
                  {courseMobileQuery?.Object?.map((element, i) => {
                    return (
                      <tr key={i}>
                        <Link href={`/lecture?courseCode=${element?.CourseCode}`}>
                          <AvatarC imageUrl={element?.ImgCover} />
                        </Link>
                        <td className={cx("label")}>
                          <Link href={`/lecture?courseCode=${element?.CourseCode}`}>
                            <h4>
                              #{element?.CourseName} : [{element?.CourseCode}]
                            </h4>
                          </Link>
                        </td>
                        <td className={cx("label")}>
                          <p>{element?.SubjectName}</p>
                        </td>
                        <td className={cx("label")}>{element?.CreatedBy}</td>
                        <td className={cx("label")}>
                          {element?.Duration}
                          {element?.Unit}
                        </td>
                        <td className={cx("label")}>{element?.Price}Coin</td>
                        <td className={cx("label")}>
                          <ProgressC percent={element?.Percent} />
                        </td>
                        <td>
                          <div className={cx("list-icon")}>
                            <span title="info">
                              <InfoIcon className={cx("icon-info")} />
                            </span>
                            <Link href={"/shareResult"}>
                              <span title="Chia sẻ kết quả rèn luyện">
                                <ScreenShareOutlinedIcon
                                  className={cx("icon-info")}
                                />
                              </span>
                            </Link>
                            <Link href={"/shareCourse"}>
                              <span title="Chia sẻ khóa học">
                                <ShareOutlinedIcon className={cx("icon-info")} />
                              </span>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </>

                :
                ''
              }


            </tbody>
          </table>
        </div>
        {/* <div className={cx("on-mobile")}>
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
                    <span className={cx("timestarts")}>
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
                  <div className={cx("listIcons")}>
                    <span title="Sửa" className={cx("listIcons")}>
                      <i className="fa-solid fa-pen"></i>
                    </span>
                    <span title="Căn chỉnh" className={cx("listIcons")}>
                      <i className="fa-solid fa-align-center"></i>
                    </span>
                    <span title="Trò chuyện" className={cx("listIcons")}>
                      <i className="fa-solid fa-comment-dots"></i>
                    </span>
                    <span title="Thông báo" className={cx("listIcons")}>
                      <i className="fa-solid fa-bell"></i>
                    </span>
                    <span title="File" className={cx("listIcons")}>
                      <i className="fa-solid fa-file"></i>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
      {/* <Pagination
        total={total}
        handleQueryPage={handleQueryPage}
        current={query.CurrentPageList}
      /> */}
    </Section>
  );
};

export default CourseList;