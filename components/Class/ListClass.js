import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { GetListClass } from "@/pages/api/CallAPI";
import ClassCard from "./ClassCard";
import { useGetListLmsClassQuery } from "@/lib/Midleware/LmsClassQuery";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
import moment from 'moment';


const cx = classNames.bind(styles);

const ListClass = () => {
  const classFilter = useSelector(state => state.class.products)

  // console.log("check classFilter store",classFilter)
  // const ListClass = GetListClass();
  const [query, setQuery] = useState({
    FromDate: "",
    ToDate: "",
    Teacher: "",
    Student: "",
    pageSize: "8",
    pageNo: "1",
  });
  const { data: LmsClass } = useGetListLmsClassQuery(query);
  // console.log("check ListClass",LmsClass);

  const [dataClass, setDataClass] = useState([])

  useEffect(() => {
    if (classFilter[0]?.startTime !== '' && classFilter[0]?.endTime !== '' && classFilter[0]?.keyWords !== '' && classFilter[0]?.sort !== '') {
      const filterData = dataClass.filter((item) => {
        const checkKeyword = item.ClassName.includes(classFilter[0]?.keyWords)
        const checkDate =
          moment(item.StartTime.slice(0, 10)).format('YYYY-MM-DD') >= moment(classFilter[0]?.startTime).format('YYYY-MM-DD') &&
          moment(item.StartTime.slice(0, 10)).format('YYYY-MM-DD') <= moment(classFilter[0]?.endTime).format('YYYY-MM-DD') &&
          moment(item.EndTime.slice(0, 10)).format('YYYY-MM-DD') >= moment(classFilter[0]?.startTime).format('YYYY-MM-DD') &&
          moment(item.EndTime.slice(0, 10)).format('YYYY-MM-DD') <= moment(classFilter[0]?.endTime).format('YYYY-MM-DD')
        //  console.log('checkDate',checkDate)
        //  const checkSort ;
        // console.log("check data",checkDate)
        return checkKeyword && checkDate
      })
      // console.log("filterData",filterData)
      // console.log("check keywords",classFilter[0]?.keyWords)
      setDataClass(filterData)

    } else if (classFilter[0]?.startTime == '' || classFilter[0]?.endTime == '' || classFilter[0]?.keyWords == '' || classFilter[0]?.sort == '') {
      setDataClass(LmsClass.query)
    }

  }, [classFilter])
  //   const filterDataClass = dataClass.filter((data)=>{
  //     return data.StartTime >= classFilter[0].startTime && data.EndTime  <= classFilter[0].endTime
  //   })
  // console.log("check filterDataClass",filterDataClass);




  useEffect(() => {
    if (LmsClass) {
      setDataClass(LmsClass.query)
    }
  }, [LmsClass])
  // console.log("check data",dataClass);

  const [initLoading, setInitLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const viewMore = () => {
    setQuery({
      FromDate: "",
      ToDate: "",
      Teacher: "",
      Student: "",
      pageSize: "20",
      pageNo: "1",
    })
  }

  const loadMore = () =>
    !initLoading && !loading ? (
      <div onClick={() => viewMore()} className={cx("load-more")}>
        <p>Xem thêm</p>
      </div>
    ) : null;

  return (
    <div className={cx("list-course-container")}>
      <div className={cx("list")}>
        {dataClass.map((item, index) => (
          <div key={index} className={cx("card")}>
            <ClassCard data={item} />
          </div>
        ))}
      </div>
      {loadMore()}
    </div>
  );
};

export default ListClass;