import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);
import { useGetListScheduleQuery } from "@/lib/Midleware/ScheduleQuery";
import PractiseCard from "../Card/PractiseCard/PractiseCard";
import SelftrainingCard from "../Card/SelftrainingCard/SelftrainingCard";
import CourseCard from "../Card/ScheduleQuery/CourseCard";
import { useGetListLmsClassQuery } from "@/lib/Midleware/LmsClassQuery";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import { useGetTotalPractiveQuery } from "@/lib/Midleware/PractiveQuery";
import ClassCard from "../Card/ClassCard/ClassCard";
import { useGetListFileCwQuery } from "@/lib/Midleware/FileCwQuery";
import CartItem from "../Card/DocumentCart";
import Document_Cart from "../Card/SubjectCard";
import ChartSubject from "../Chart/ChartSubject";
import { useGetCountQuizBodyQuery } from "@/lib/Midleware/QuizQuery";

const Personalized = () => {
  const { data: practiveQuery } = useGetTotalPractiveQuery({
    CurrentPageList: 1,
    Length: 1000,
    FromDate: "",
    ToDate: "",
    UserName: "admin",
    UserId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    Status: "",
    Object: "",
    ObjType: "",
    CardName: "",
  });

  const { data: scheduleQuery } = useGetListScheduleQuery({
    userName: "admin",
    userFilter: "admin",
  });

  const { data: classList } = useGetListLmsClassQuery({
    FromDate: "",
    ToDate: "",
    Teacher: "admin",
    Student: "",
    pageSize: "10",
    pageNo: "1",
  });

  const { data: subjectCode } = useGetListExamQuery({
    testName: "",
    userName: "admin",
    ratingMin: -1,
    ratingMax: -1,
    onlyAssignment: false,
    onlyShared: true,
    pageLength: 30,
    pageNum: 1,
  });
  const { data: countQuiz } = useGetCountQuizBodyQuery({
    subjectCode: "",
    lectureCode: "",
    level: "",
    ratingMin: -1,
    ratingMax: -1,
    isTutor888: false,
    fromDatePara: "",
    toDatePara: "",
    createdBy: "",
    userName: "admin",
  });
  const { data: fileCwQuery } = useGetListFileCwQuery({
    CatCode: "",
    SubjectCode: "",
    ObjectType: "",
    ObjectCode: "",
    FromDate: "",
    ToDate: "",
    FileName: "",
    FileType: "",
    Content: "",
    UserUpload: "admin",
    KeySearch: "",
    Count: "",
    CurrentPageView: 1,
    Length: 10,
  });
  const [openKeys, setOpenKeys] = useState("sub1");
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };
  const items = [
    getItem(
      `Rèn luyện [ ${practiveQuery?.Object?.cardSum} | ${practiveQuery?.Object?.cardExpire} | ${practiveQuery?.Object?.cardDone} ]`,
      "sub1",
      <MailOutlined />
    ),
    getItem(
      `Buổi học [ ${scheduleQuery?.Object?.length} ]`,
      "sub2",
      <AppstoreOutlined />
    ),
    getItem(
      `Lớp tham gia [ ${classList?.count} ]`,
      "sub3",
      <SettingOutlined />
    ),
    getItem(
      `Đề thi [ ${subjectCode?.query.length} ]`,
      `sub4`,
      <SettingOutlined />
    ),
    getItem(`Quiz [ ${countQuiz?.Object?.countAssignment} ]`, "sub5", <SettingOutlined />),
    getItem(
      `Tài liệu [ ${fileCwQuery?.Object.count} ]`,
      "sub6",
      <SettingOutlined />
    ),
    getItem("Khóa học", "sub7", <SettingOutlined />),
    getItem("Môn học của tôi", "sub8", <SettingOutlined />),
    getItem("Kết quả học tập", "sub9", <SettingOutlined />),
    getItem("Kết quả giảng dạy", "sub10", <SettingOutlined />),
    getItem("Bộ sưu tập", "sub11", <SettingOutlined />),
  ];

  const onOpenChange = (keys) => {
    setOpenKeys(keys.key);
  };

  const displayContent = () => {
    switch (openKeys) {
      case "sub1":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub2":
        return  <ClassCard role={"lesson"} data={scheduleQuery}/>;
      case "sub3":
        return <ClassCard />;
      case "sub4":
        return <CourseCard data={scheduleQuery} />;
      case "sub5":
        return <SelftrainingCard />;
      case "sub6":
        return <Document_Cart total={fileCwQuery} />;
      case "sub7":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub8":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub9":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub10":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub11":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
    }
  };
  return (
    <div className={cx("person")}>
      <div className={cx("navbar")}>
        <Menu
          mode="inline"
          defaultSelectedKeys="sub1"
          onClick={onOpenChange}
          style={{
            width: 276,
            backgroundColor: "",
            position: "fixed",
          }}
          items={items}
        />
      </div>
      <div className={cx("content")}>
        {displayContent()}
      </div>
    </div>
  );
};
export default Personalized;
