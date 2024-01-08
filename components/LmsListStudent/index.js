import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import { useGetListUserOfClassQuery } from "@/lib/Midleware/LmsClassQuery";
import Image from "next/image";

const cx = classNames.bind(styles);

const LmsListStudent = () => {
  const router = useRouter();
  const [query, setQuery] = useState({
    classCode: router.query.classCode,
  });

  const { data } = useGetListUserOfClassQuery(query);
  console.log(data);

  return (
    <div style={{ marginTop: "70px", paddingLeft: "30px" }}>
      <h3 className={cx("lms-title")}>Tên lớp học: {data?.[0]?.ClassName}</h3>
      <ul className={cx("list-student")}>
        {data?.map((item, i) => {
          return (
            <li key={i}>
              <div>
                {/* {item?.Avatar ? (
                  <Image
                    width={100}
                    height={100}
                    alt="user"
                    src={item?.Avatar}
                  />
                ) : ( */}
                <Image
                  width={100}
                  height={100}
                  alt="user"
                  src={
                    "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
                  }
                />
                {/*  )} */}
              </div>
              <div className={cx('user-info')}>
                <span style={{ display: "block" }}>
                  Họ tên: {item?.GivenName}
                </span>
                <span style={{ display: "block" }}>Email: {item?.Email?.slice(0,20)}...</span>
                <span style={{ display: "block" }}>
                  Contact:{" "}
                  {item?.PhoneNumber ? item?.PhoneNumber : "Chưa có data"}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LmsListStudent;
