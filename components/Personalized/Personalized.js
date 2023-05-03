import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Menu } from "antd";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);
import { useGetListScheduleQuery } from "@/lib/Midleware/ScheduleQuery";
import PractiseCard from "../Card/PractiseCard/PractiseCard";
import SelftrainingCard from "../Card/SelftrainingCard/SelftrainingCard";
import CourseCard from "../Card/CourseCard/CourseCard";
import { useGetListLmsClassQuery } from "@/lib/Midleware/LmsClassQuery";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import { useGetTotalPractiveQuery } from "@/lib/Midleware/PractiveQuery";
import ClassCard from "../Card/ClassCard/ClassCard";
import { useGetListFileCwQuery } from "@/lib/Midleware/FileCwQuery";
import Document_Cart from "../Card/SubjectCard";
import ChartSubject from "../Chart/ChartSubject";
import { useGetCountQuizBodyQuery } from "@/lib/Midleware/QuizQuery";
import ExamCard from "../Card/ExamCard";
import { useGetListLectureQuery } from "@/lib/Midleware/LectureQuery";
import { AiOutlineSearch } from "react-icons/ai";
import { useGetListSubjectQuery } from "@/lib/Midleware/SubjectQuery";
import SearchAndAddSubjects from "../SearchAndAddSubjects";
import ModalSearchFilter from "../ModalSearchFilter/ModalSearchFilter";
import { AbumCart } from "../Card/AbumCard/AbumCard";

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

  const { data: examQuery } = useGetListExamQuery({
    testName: "",
    ratingMin: 1,
    ratingMax: -1,
    userFilter: "admin",
    userName: "admin",
    onlyAssignment: true,
    onlyShared: false,
    pageLength: "10",
    pageNum: "1",
  });

  const { data: lectureQuery } = useGetListLectureQuery({
    lectureName: "",
    subjectCode: "",
    courseCode: "",
    userFilter: "admin",
    userName: "admin",
    onlyAssignment: false,
    onlyShared: true,
    pageLength: 10,
    pageNum: 1,
    ratingMin: -1,
    ratingMax: -1,
  });

  const { data: subjectQuery } = useGetListSubjectQuery({
    username: "admin",
    isTutor888: false,
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
      `Đề thi [ ${examQuery?.countAssignment + examQuery?.countSharing} ]`,
      `sub4`,
      <SettingOutlined />,
      [
        getItem(`Được giao [ ${examQuery?.countAssignment} ]`, "sub4-1", null),
        getItem(`Tự luyện [ ${examQuery?.countSharing} ]`, "sub4-2", null),
      ]
    ),
    getItem(
      `Quiz [ ${countQuiz?.Object?.countAssignment} | ${countQuiz?.Object?.countVoluntary} ]`,
      "sub5",
      <SettingOutlined />,
      [
        getItem(
          `Được giao [ ${countQuiz?.Object?.countAssignment} ]`,
          "sub5-1",
          null
        ),
        getItem(
          `Tự luyện [ ${countQuiz?.Object?.countVoluntary} ]`,
          "sub5-2",
          null
        ),
      ]
    ),
    getItem(
      `Tài liệu [ ${fileCwQuery?.Object.count} ]`,
      "sub6",
      <SettingOutlined />
    ),

    getItem(`Khóa học [ ${lectureQuery?.count} ]`, "sub7", <SettingOutlined />),

    getItem(
      `Môn học của tôi [ ${subjectQuery?.length} ]`,
      "sub8",
      <SettingOutlined />
    ),

    getItem("Kết quả học tập", "sub9", <SettingOutlined />, [
      getItem(`Câu hỏi tự luyện`, "sub9-1", null),
      getItem(`Câu hỏi được giao`, "sub9-2", null),
      getItem(`Bài giảng tự luyện`, "sub9-3", null),
      getItem(`Bài giảng được giao`, "sub9-4", null),
      getItem(`Đề thi tự luyện`, "sub9-5", null),
      getItem(`Đề thi được giao`, "sub9-6", null),
      getItem(`Kỳ thi tham dự`, "sub9-7", null),
      getItem(`Học online`, "sub9-8", null),
      getItem(`Số môn học`, "sub9-9", null),
      getItem(`Số tài liệu xem`, "sub9-10", null),
    ]),

    getItem("Kết quả giảng dạy", "sub10", <SettingOutlined />, [
      getItem(`Câu hỏi`, "sub10-1", null),
      getItem(`Bài giảng`, "sub10-2", null),
      getItem(`Đề luyện thi`, "sub10-3", null),
      getItem(`Tổng số đã tạo`, "sub10-4", null),
      getItem(`Số lớp`, "sub10-5", null),
      getItem(`Số môn học`, "sub10-6", null),
      getItem(`Số học viên`, "sub10-7", null),
      getItem(`Số việc đã giao`, "sub10-8", null),
      getItem(`Số tài liệu upload lên`, "sub10-9", null),
    ]),

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
        return <ClassCard role={"lesson"} data={scheduleQuery} />;
      case "sub3":
        return <ClassCard />;
      case "sub4-1":
        return <ExamCard onlyAssignment={true} />;
      case "sub4-2":
        return <ExamCard onlyAssignment={false} />;
      case "sub5-1":
        return <SelftrainingCard onlyAssignment={true} />;
      case "sub5-2":
        return <SelftrainingCard onlyAssignment={false} />;
      case "sub6":
        return <Document_Cart total={fileCwQuery} />;
      case "sub7":
        return <CourseCard />;
      case "sub8":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub9":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub10":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub11":
        return <AbumCart />;
    }
  };
  return (
    <div>
      <div className={cx("person")}>
        <div className={cx("navbar")}>
          <Menu
            mode="inline"
            defaultSelectedKeys="sub1"
            onClick={onOpenChange}
            style={{
              width: 300,
              // backgroundColor: "",
              // position: "fixed",
            }}
            items={items}
          />
        </div>
        <div className={cx("content")}>
          <div className={cx("SearchAndAddSubjects_ItemAll")}>
            <div>
              <Breadcrumb
                items={[
                  {
                    title: "Home",
                  },
                  {
                    title: <a href="">Application Center</a>,
                  },
                  {
                    title: <a href="">Application List</a>,
                  },
                  {
                    title: "An Application",
                  },
                ]}
              />
            </div>
            <div>
              <ModalSearchFilter />
              <i className="fa-solid fa-file-export"></i>
            </div>
          </div>
          {displayContent()}
        </div>
      </div>
    </div>
  );
};
export default Personalized;
