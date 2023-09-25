import Section from "@/components/Section/Section";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Image from "next/image";
import { useGetListLmsClassQuery } from "@/lib/Midleware/LmsClassQuery";
import Pagination from "@/components/Pagination/Pagination";
import { useGetListSubjectQuery } from "@/lib/Midleware/SubjectQuery";

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
  const { data: Lesson } = useGetListSubjectQuery();

  const handleQueryPage = (current, pageSize) => {
    setQuery({ ...query, pageNo: current, pageSize: pageSize });
  };
  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.innerText;
  }
  const arr = role ? Lesson : LmsClass.query;

  return (
    <Section>
      <div className={cx("class")}>
        {arr?.map((element) => {
          return (
            <div key={element.Id} className={cx("item")}>
              <div className={cx("inner-item")}>
                <div className={cx("item-media")}>
                  <Image
                    src={
                      role
                        ? `${element.Image}`
                        : "https://cdn.shopify.com/s/files/1/0879/0542/products/pc6741.jpg?v=1569974144"
                    }
                    alt="document"
                    width={180}
                    height="150"
                    className={cx("image")}
                  />

                  <div className={cx("actions")}>
                    {role ? (
                      <>
                        <span className={cx("mobie")}>
                          <i className="fa-solid fa-mobile-screen-button"></i>
                        </span>
                        <span className={cx("file")}>
                          <i className="fa-solid fa-file-video"></i>
                        </span>
                        <span className={cx("video")}>
                          <i className="fa-solid fa-video"></i>
                        </span>
                      </>
                    ) : (
                      <span className={cx("edit")}>
                        <i className="fa-regular fa-pen-to-square"></i>
                      </span>
                    )}
                  </div>
                </div>
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
        <table classNames={cx("class-list")}>
          <thead className={cx("table-head")}>
            <tr>
              <th className={cx("titleCard")}>
                <i className="fa fa-paper-plane"></i>
                Ảnh lớp học
              </th>
              <th className={cx("card-status")}>
                <i class="fa fa-newspaper"></i>
                Mã lớp học
              </th>
              <th className={cx("card-time")}>
                <i className="fa fa-calendar"></i>
                Tên lớp học
              </th>
              <th  className={cx("card-actions")}>
                <i className="fa fa-recycle"></i>
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className={cx("table-body")}>
            
          </tbody>
        </table>
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
