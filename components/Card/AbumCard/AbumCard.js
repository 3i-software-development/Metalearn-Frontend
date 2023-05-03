import React from "react";
import Section from "../../Section/Section";
import { useGetAbumtPractiveQuery } from "@/lib/Midleware/PractiveQuery";
import Pagination from "@/components/Pagination/Pagination";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

const cx = classNames.bind(style);
export const AbumCart = () => {
  const { data: abumPravtive } = useGetAbumtPractiveQuery({
    userId: "150e6cbf-3618-483c-be0d-1773463d8e02",
  });
  return (
    <Section>
      <div className={cx("class")}>
        {abumPravtive?.Object?.map((element, index) => {
          return (
            <div key={index} className={cx("card")}>
              <div className={cx("card-item")}>
                <div className={cx("card-body")}>
                  <div className={cx("title")}>
                    <h4>
                      {element.TypeName} [{element.Count}]
                    </h4>
                  </div>
                  <div className={cx("card-image")}>
                    {element.TypeName === "QUIZ" && (
                      <Link href="/abum/quiz">
                        <Image
                          alt="quiz"
                          width={300}
                          height={300}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBixWQDn0Hm0fv9LS_sDsQAT9isDCsyBROQ&usqp=CAU"
                        />
                      </Link>
                    )}
                    {element.TypeName === "EXAM" && (
                      <Link href="/abum/exam">
                        <Image
                          width={300}
                          alt="exam"
                          height={300}
                          src="https://i.insider.com/6410fe689aa2e6001956f2ca?width=1136&format=jpeg"
                        />
                      </Link>
                    )}
                    {element.TypeName === "FILE" && (
                      <Link href="/abum/file">
                        <Image
                          width={300}
                          alt="file"
                          height={300}
                          src="https://cdn.tgdd.vn/hoi-dap/1312023/file-folder-la-gi-cach-dat-ten-tep-to-chuc-thu-muc-hieu%20(1).jpg"
                        />
                      </Link>
                    )}
                    {element.TypeName === "QA" && (
                      <Link href="/abum/qa">
                        <Image
                          width={300}
                          height={300}
                          src="https://blog.testlodge.com/wp-content/uploads/2018/02/qa-career.png"
                          alt="qa"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
