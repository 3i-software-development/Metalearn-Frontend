import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Menu } from "antd";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ArticleIcon from "@mui/icons-material/Article";
import AppsIcon from "@mui/icons-material/Apps";
import { useState, useEffect } from "react";
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
import ExamCard from "../Card/ExamCard";
import { useGetListLectureQuery } from "@/lib/Midleware/LectureQuery";
import { AiOutlineSearch } from "react-icons/ai";
import { useGetListSubjectQuery } from "@/lib/Midleware/SubjectQuery";
import SearchAndAddSubjects from "../SearchAndAddSubjects";
import ModalSearchFilter from "../ModalSearchFilter/ModalSearchFilter";
import { AbumCart } from "../Card/AbumCard/AbumCard";
import TeachingResults from "../Chart/TeachingResults";
import { useRouter } from "next/router";
import {
  useGetCountExamStudentQuery,
  useGetCountFileStudentQuery,
  useGetCountLectureAssignmentQuery,
  useGetCountLectureVoluntaryQuery,
  useGetCountQuizAssignmentQuery,
  useGetCountQuizVoluntaryQuery,
  useGetCountSubjectStudentQuery,
  useGetCountTestAssignmentQuery,
  useGetCountTestVoluntaryQuery,
  useGetCountTutorStudentQuery,
  useGetTotalTeacherQuery,
} from "@/lib/Midleware/ChartQuery";
import { useGetCountQuizBodyQuery } from "@/lib/Midleware/QuizQuery";
import CircleChart from "../Chart/CircleChart/CircleChart";
import MobileNavBar from "./MobileNavBar";
import CourseWareMath from "../CourseWareMath/CourseWareMath";
import CourseDev from "../Courses/CourseDev/CourseDev";

const CourseWare = () => {
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

  const { data: chartTeacherQuery } = useGetTotalTeacherQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
  });

  const { data: countQuizAssignment } = useGetCountQuizAssignmentQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "QuizAssignment",
  });
  const { data: countQuizVoluntary } = useGetCountQuizVoluntaryQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "QuizVoluntary",
  });
  const { data: countLectureVoluntary } = useGetCountLectureVoluntaryQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "LectureVoluntary",
  });
  const { data: countLectureAssignment } = useGetCountLectureAssignmentQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "LectureAssignment",
  });
  const { data: countTestVoluntary } = useGetCountTestVoluntaryQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "TestVoluntary",
  });
  const { data: countTestAssignment } = useGetCountTestAssignmentQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "TestAssignment",
  });
  const { data: countExamStudent } = useGetCountExamStudentQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "ExamStudent",
  });
  const { data: countTutorStudent } = useGetCountTutorStudentQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "TutorStudent",
  });
  const { data: countSubjectStudent } = useGetCountSubjectStudentQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "SubjectStudent",
  });
  const { data: countFileStudent } = useGetCountFileStudentQuery({
    userId: "0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06",
    type: "FileStudent",
  });

  const router = useRouter();
  const [openKeys, setOpenKeys] = useState(
    `${router.query.key ? router.query.key : "practive"}`
  );

  useEffect(() => {
    if (router.query.key) {
      setOpenKeys(router.query.key);
    }
  }, [router.query.key]);

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
    getItem(`Lập trình`, "practive", <DeveloperModeIcon />),

    getItem(`Toán ôn thi đại học`, "sub3", <ArticleIcon />),


    // getItem(
    //   `Đề thi [ ${
    //     examQuery?.countAssignment.toLocaleString() +
    //     " | " +
    //     examQuery?.countSharing.toLocaleString()
    //   } ]`,
    //   `sub4`,
    //   <SettingOutlined />,
    //   [
    //     getItem(
    //       `Được giao [ ${examQuery?.countAssignment.toLocaleString()} ]`,
    //       "sub4-1",
    //       null
    //     ),
    //     getItem(
    //       `Tự luyện [ ${examQuery?.countSharing.toLocaleString()} ]`,
    //       "sub4-2",
    //       null
    //     ),
    //   ]
    // ),

    // getItem(
    //   `Khóa học [ ${lectureQuery?.Object?.length.toLocaleString()} ]`,
    //   "courses",
    //   <SettingOutlined />
    // ),

    // getItem("Bộ sưu tập", "sub11", <SettingOutlined />),
  ];

  const onOpenChange = (keys) => {
    setOpenKeys(keys.key);
    router.push(`${router.pathname}?key=${keys.key}`);
  };

  const displayContent = () => {
    switch (openKeys) {
      case "practive":
        return <CourseDev total={practiveQuery?.Object?.cardSum} />;
      case "sub3":
        return <CourseWareMath />;
      //   case "sub4-1":
      //     return <ExamCard onlyAssignment={true} />;
      //   case "sub4-2":
      //     return <ExamCard onlyAssignment={false} />;
      //   case "courses":
      //     return <CourseCard />;
      //   case "sub11":
      //     return <AbumCart />;
    }
  };
  return (
    <>
      <div className={cx("person")}>
        <div className={cx("nav-bar")}>
          <span className="hidden nav-toggle">
            <i className="fa fa-bars" aria-hidden="true"></i>&nbsp; Navigation
          </span>
          <Menu
            mode="inline"
            defaultSelectedKeys={openKeys}
            onClick={onOpenChange}
            style={
              {
                // width: 300,
                // backgroundColor: "",
                // position: "fixed",
              }
            }
            items={items}
          />
        </div>
        <div className={cx("nav-bar-mobile")}>
          <MobileNavBar />
        </div>
        <div className={cx("content")}>
          <div className={cx("SearchAndAddSubjects_ItemAll")}>
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
            <div className="tool-items">
              <span className={cx("search-icon")}>
                <ModalSearchFilter />
              </span>
              {/* <span className={cx("layout-icon")}>
                <span className={cx("border-icon-layout")}>
                  <DehazeIcon />
                </span>
                <span className={cx("border-icon-layout")}>
                  <AppsIcon />
                </span>
              </span> */}
            </div>
          </div>
          {displayContent()}
        </div>
      </div>
    </>
  );
};
export default CourseWare;
