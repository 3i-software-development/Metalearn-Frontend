import Section from '@/components/Section/Section'
import React, { useState } from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Image from 'next/image';
import { useGetListLmsClassQuery } from '@/lib/Midleware/LmsClassQuery';
import Pagination from "@/components/Pagination/Pagination";

const cx = classNames.bind(styles);

const ClassCard = () => {

    const [query, setQuery] = useState({
        FromDate: "",
        ToDate: "",
        Teacher: "admin",
        Student: "",
        pageSize: "10",
        pageNo: "1",
    })

    const { data:LmsClass } = useGetListLmsClassQuery(query);

    const handleQueryPage = (current, pageSize) => {
        setQuery({ ...query, pageNo: current, pageSize: pageSize })
    }

    return (
        <Section>
            <div className={cx("class")}>
                {LmsClass?.query.map((element) => {
                    return (
                        <div key={element.Id} className={cx("card")}>
                            <Image
                                src="https://dieuhanh.vatco.vn//uploads/repository/SUBJECT/download5.jpg"
                                alt="document"
                                width="150"
                                height="180"
                                className={cx("image")}
                            />
                            <div className={cx("card-body")}>
                                <div>
                                    <div className={cx("title")}>
                                        <h3>
                                            <i className="fa-solid fa-diamond" style={{ color: "orange" }}></i>
                                            &nbsp; [{element.ClassCode}]
                                        </h3>
                                    </div>
                                    <br />
                                    <div className={cx("title")}>
                                        <i className="fa-solid fa-diamond" style={{ color: "orange" }}></i>
                                        <strong>
                                            &nbsp; {element.ClassName}
                                        </strong>
                                    </div>
                                    <div className={cx("title")}>
                                        <i className="fa-solid fa-diamond" style={{ color: "orange" }}></i>
                                        <span>
                                            &nbsp; Số học sinh:
                                        </span>
                                        <span>&nbsp; {element.CountStudent}</span>
                                    </div>
                                </div>
                                <div className={cx("card-footer")}>
                                    {/* <i className="fa-solid fa-mobile-screen-button"></i>
                                    <i className="fa-solid fa-file-video"></i>
                                    <i className="fa-solid fa-video"></i> */}
                                    <i class="fa-regular fa-pen-to-square"></i>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Pagination total={LmsClass?.count} handleQueryPage={handleQueryPage} current={query.pageNo} />
        </Section>
    )
}

export default ClassCard