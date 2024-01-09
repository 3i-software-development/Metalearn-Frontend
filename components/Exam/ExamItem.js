import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Rate } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DownloadIcon from "@mui/icons-material/Download";

const cx = classNames.bind(style);

const ExamItem = () => {
  const router = useRouter();
  console.log(router.query.subjectCode);

  const [query, setQuery] = useState({
    testName: "",
    userName: "admin",
    subjectCode: "",
    content: "",
    latex: "",
    level: "",
    ratingMin: -1,
    ratingMax: -1,
    fromDatePara: "",
    toDatePara: "",
    createdBy: "",
    onlyAssignment: true,
    onlyShared: false,
    pageLength: 10,
    pageNum: 1,
  });

  const { data } = useGetListExamQuery(query);
  console.log(data);

  return (
    <ul className={cx("toplist")}>
      {data?.query?.map((item, i) => {
        return (
          <>
            <Link href="/quizzes">
              <li style={{ display: "flex", justifyContent: "space-between", padding: '25px 25px' }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{paddingRight: '20px'}}>
                      <LibraryBooksIcon style={{fontSize: '27px'}} />
                    </div>
                    <div style={{minWidth: '600px'}}>
                      <span>
                        <h4>{item?.PracticeTestTitle}</h4>
                        <div>
                          <div>
                            <p>
                              {item?.Duration} {item?.Unit}
                            </p>
                            <p>Tác giả: {item?.CreatedBy}</p>
                            <p>{item?.Rating}</p>
                            <p className={cx("rating")}>
                              <Rate />
                            </p>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div>
                    <span>
                      <p>Giá: {item?.Price} coin</p>
                      <p>Môn học: {item?.ExamSubject}</p>
                      <p>{item?.QuizCount} câu hỏi</p>
                    </span>
                  </div>
                </div>
                <div>
                  <DownloadIcon />
                </div>
              </li>
            </Link>
          </>
        );
      })}
    </ul>
  );
};

export default ExamItem;
