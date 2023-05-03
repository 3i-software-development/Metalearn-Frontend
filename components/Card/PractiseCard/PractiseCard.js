import React, { useState } from "react";
import Section from "../../Section/Section";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useGetListPractiveQuery } from "@/lib/Midleware/PractiveQuery";
import moment from "moment";
import Pagination from "@/components/Pagination/Pagination";
const cx = classNames.bind(styles);
const PractiseCard = ({ total }) => {
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
    return "Còn " + moment.utc(between.asMilliseconds()).format("hh:mm:ss");
  };

  const handleQueryPage = (current, pageSize) => {
    setQuery({ ...query, CurrentPageList: current, Length: pageSize });
  };

  return (
    <Section>
      <div className={cx("practice")}>
        {practiveQuery?.Object?.data.map((element) => {
          return (
            <div key={element.LmsTaskCode} className={cx("card")}>
              <div className={cx("card-body")}>
                <div className={cx("titleCard")}>
                  <h4>
                    #{element.LmsTaskCode} : {element.LmsTaskName}
                  </h4>
                </div>
                <div className={cx("card-time")}>
                  <div className={cx("status")}>
                    <span>{element.Status}</span>
                    <span>
                      {diffMoment(element.BeginTime, element.EndTime)}
                    </span>
                  </div>
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
              </div>
              <div className={cx("card-footer")}>
                <div className={cx("listIcon")}>
                  <span>
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-align-center"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-comment-dots"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-bell"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-file"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        total={total}
        handleQueryPage={handleQueryPage}
        current={query.CurrentPageList}
      />
    </Section>
  );
};

export default PractiseCard;
