import Section from "@/components/Section/Section";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Image from "next/image";
import ModalSearchFilter from "@/components/ModalSearchFilter/ModalSearchFilter";
import { useGetListLmsClassQuery } from "@/lib/Midleware/LmsClassQuery";
import Pagination from "@/components/Pagination/Pagination";
import { useGetListUserSubjectQuery } from "@/lib/Midleware/SubjectQuery";

const cx = classNames.bind(styles);

const ClassCard = ({ role }) => {
  const [query, setQuery] = useState({
    FromDate: "",
    ToDate: "",
    Teacher: "admin",
    Student: "",
    pageSize: "10",
    pageNo: "1",
  });

  const { data: LmsClass } = useGetListLmsClassQuery(query);
  const { data: Lesson } = useGetListUserSubjectQuery();

  const handleQueryPage = (current, pageSize) => {
    setQuery({ ...query, pageNo: current, pageSize: pageSize });
  };
  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.innerText;
  }
  const arr = role ? Lesson : LmsClass?.query;

  return (
    <Section>
      <div className="tool-items"  style={{display:"flex", marginLeft:"1050px", paddingBottom: "10px"}}>
        <ModalSearchFilter />
        <span className="tool-item tool-export">
        <i className="fa-solid fa-file-video"></i>
        </span>
      </div>
      <div className={cx("class")}>
        {arr?.map((element) => {
          return (
            <div key={element.Id} className={cx("item")}>
              <div className={cx("inner-item")}>
                <div className={cx("item-detail")}>
                  <h3 className={cx("title")}>
                    <i
                      className="fa-solid fa-diamond"
                      style={{ color: "orange" }}
                    ></i>
                    &nbsp; <span className={cx("label")}>{"Lớp: "}</span>
                    &nbsp;{" "}
                    <span className={cx("value")}>
                      {role
                        ? "Số đề thi " + `${element.CountExam}`
                        : element.ClassName}
                    </span>
                  </h3>

                  <div className={cx("title")}>
                    <i
                      className="fa-solid fa-diamond"
                      style={{ color: "orange" }}
                    ></i>
                    &nbsp; <span className={cx("label")}>{"Mã đề: "}</span>
                    &nbsp;{" "}
                    <span className={cx("value")}>
                      {role
                        ? `${element.Name} `
                        : `${element.ClassCode.toLocaleString()}`}
                    </span>
                  </div>

                  <div className={cx("description")}>
                    <i
                      className="fa-solid fa-diamond"
                      style={{ color: "orange" }}
                    ></i>
                    &nbsp;
                    {role ? (
                      "Mô tả : " + htmlDecode(`${element.Description}`)
                    ) : (
                      <>
                        <span className={cx("label")}>{"Số học sinh:"}</span>
                        &nbsp;{" "}
                        <span className={cx("value")}>
                          {element.CountStudent}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {role ? (
        ""
      ) : (
        <Pagination
          total={LmsClass?.count}
          handleQueryPage={handleQueryPage}
          current={query.pageNo}
        />
      )}
    </Section>
  );
};

export default ClassCard;
