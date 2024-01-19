import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Menu } from "antd";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);
import { useGetListScheduleQuery } from "@/lib/Midleware/ScheduleQuery";
import PractiseCard from "../Card/PractiseCard/PractiseCard";
import SelftrainingCard from "../Card/SelftrainingCard/SelftrainingCard";
import CourseCard from "../Card/CourseCard/CourseCard";
import {
  useGetListLmsClassQuery,
  useGetListLmsStudentClassQuery,
} from "@/lib/Midleware/LmsClassQuery";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import { useGetTotalPractiveQuery } from "@/lib/Midleware/PractiveQuery";
import ClassCard from "../Card/ClassCard/ClassCard";
import { useGetListFileCwQuery } from "@/lib/Midleware/FileCwQuery";
import Document_Cart from "../Card/SubjectCard";
import ChartSubject from "../Chart/ChartSubject";
import ExamCard from "../Card/ExamCard";
import { useGetListLectureQuery } from "@/lib/Midleware/LectureQuery";
import { useGetListUserSubjectQuery } from "@/lib/Midleware/SubjectQuery";
import ModalSearchFilter from "../ModalSearchFilter/ModalSearchFilter";
import { AbumCart } from "../Card/AbumCard/AbumCard";
import TeachingResults from "../Chart/TeachingResults";
import { useRouter } from "next/router";
import { IdcardOutlined,FileOutlined,FileWordOutlined } from "@ant-design/icons";
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
import { useAuth } from "@/hooks/authContext";
import JoinCard from "../Card/JoinCard/JoinCard";

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

  const { userName } = useAuth();
  const { data: classListStudent } = useGetListLmsStudentClassQuery({
    FromDate: "",
    ToDate: "",
    Teacher: "",
    Student: userName,
    pageSize: "10",
    pageNo: "1",
  });
  // console.log(classListStudent);

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

  const { data: subjectQuery } = useGetListUserSubjectQuery({
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
    getItem(
      `Nhiệm Vụ [ ${practiveQuery?.Object?.cardSum.toLocaleString()} | ${practiveQuery?.Object?.cardExpire.toLocaleString()} | ${practiveQuery?.Object?.cardDone.toLocaleString()} ]`,
      "practive",
      <IdcardOutlined />
    ),

    getItem(
      `Buổi học trực tuyến [ ${scheduleQuery?.Object?.length.toLocaleString()} ]`,
      "sub2",
      <i className="fa-solid fa-video"></i>
    ),

    getItem(`Lớp học`, "sub3", <i className="fa-solid fa-users-viewfinder"></i>, [
      getItem(
        `Tham gia [ ${classListStudent?.count.toLocaleString()} ]`,
        "sub3-1",
        null
      ),
      getItem(
        `Quản lý [ ${classListStudent?.count.toLocaleString()} ]`,
        "sub3-2",
        null
      ),
    ]),

    getItem(
      `Đề thi [ ${
        examQuery?.countAssignment.toLocaleString() +
        " | " +
        examQuery?.countSharing.toLocaleString()
      } ]`,
      `sub4`,
      <FileOutlined />,
      [
        getItem(
          `Được giao [ ${examQuery?.countAssignment.toLocaleString()} ]`,
          "sub4-1",
          null
        ),
        getItem(
          `Tự luyện [ ${examQuery?.countSharing.toLocaleString()} ]`,
          "sub4-2",
          null
        ),
      ]
    ),
    getItem(
      `Quiz [ ${countQuiz?.Object?.countAssignment.toLocaleString()} | ${countQuiz?.Object?.countVoluntary.toLocaleString()} ]`,
      "sub5",
      <i className="fa-brands fa-quinscape"></i>,
      [
        getItem(
          `Được giao [ ${countQuiz?.Object?.countAssignment.toLocaleString()} ]`,
          "sub5-1",
          null
        ),
        getItem(
          `Tự luyện [ ${countQuiz?.Object?.countDone.toLocaleString()} ]`,
          "sub5-2",
          null
        ),
      ]
    ),
    getItem(`Tài liệu `, "sub6", <FileWordOutlined />, [
      getItem(
        `Được giao [0]`,
        "sub6-1",
        null
      ),
      getItem(
        `Tự luyện [5]`,
        "sub6-2",
        null
      ),
    ]),

    getItem(
      `Khóa học [ ${lectureQuery?.Object?.length.toLocaleString()} ]`,
      "courses",
      <i className="fa-solid fa-book-open-reader"></i>
    ),

  

    getItem("Kết quả rèn luyện", "sub9", <i className="fa-solid fa-trophy"></i>, [
      getItem(
        `Câu hỏi tự luyện [ ${
          countQuizVoluntary
            ? JSON.parse(countQuizVoluntary?.QuizVoluntary)?.Total
            : "0"
        } ]`,
        "sub9-1",
        null
      ),
      getItem(
        `Câu hỏi được giao [ ${
          countQuizAssignment
            ? JSON.parse(countQuizAssignment?.QuizAssignment)?.Total
            : "0"
        } ]`,
        "sub9-2",
        null
      ),
      getItem(
        `Bài giảng tự luyện  [ ${
          countLectureVoluntary
            ? JSON.parse(countLectureVoluntary?.LectureVoluntary)?.Total
            : "0"
        } ]`,
        "sub9-3",
        null
      ),
      getItem(
        `Bài giảng được giao  [ ${
          countLectureAssignment
            ? JSON.parse(countLectureAssignment?.LectureAssignment)?.Total
            : "0"
        } ]`,
        "sub9-4",
        null
      ),
      getItem(
        `Đề thi tự luyện [ ${
          countTestVoluntary
            ? JSON.parse(countTestVoluntary?.TestVoluntary)?.Total
            : "0"
        } ]`,
        "sub9-5",
        null
      ),
      getItem(
        `Đề thi được giao [ ${
          countTestAssignment
            ? JSON.parse(countTestAssignment?.TestAssignment)?.Total
            : "0"
        } ]`,
        "sub9-6",
        null
      ),
      getItem(
        `Kỳ thi tham dự [ ${
          countExamStudent
            ? JSON.parse(countExamStudent?.ExamStudent)?.Total
            : "0"
        } ]`,
        "sub9-7",
        null
      ),
      getItem(
        `Học online [ ${
          countTutorStudent
            ? JSON.parse(countTutorStudent?.TutorStudent)?.Total
            : "0"
        } ]`,
        "sub9-8",
        null
      ),
      getItem(
        `Số môn học [ ${
          countSubjectStudent
            ? JSON.parse(countSubjectStudent?.SubjectStudent)?.Total
            : "0"
        } ]`,
        "sub9-9",
        null
      ),
    ]),

    getItem("Kết quả giảng dạy", "sub10", <i className="fa-solid fa-medal"></i>, [
      getItem(
        `Câu hỏi [ ${
          chartTeacherQuery
            ? JSON.parse(chartTeacherQuery?.QuizTeacher).Total
            : "0"
        } ]`,
        "sub10-1",
        null
      ),
      getItem(
        `Bài giảng [ ${
          chartTeacherQuery
            ? JSON.parse(chartTeacherQuery?.LectureTeacher).Total
            : "0"
        } ]`,
        "sub10-2",
        null
      ),
      getItem(
        `Đề luyện thi [ ${
          chartTeacherQuery
            ? JSON.parse(chartTeacherQuery?.TestTeacher).Total
            : "0"
        } ]`,
        "sub10-3",
        null
      ),
      getItem(
        `Tổng số đã tạo [ ${
          chartTeacherQuery
            ? JSON.parse(chartTeacherQuery?.ExamTeacher).Total
            : "0"
        } ]`,
        "sub10-4",
        null
      ),
      getItem(
        `Số lớp [ ${
          chartTeacherQuery
            ? JSON.parse(chartTeacherQuery?.ClassTeacher).Total
            : "0"
        } ]`,
        "sub10-5",
        null
      ),
      getItem(
        `Số môn học [ ${
          chartTeacherQuery
            ? JSON.parse(chartTeacherQuery?.SubjectTeacher).Total
            : "0"
        } ]`,
        "sub10-6",
        null
      ),
      getItem(
        `Số học viên [ ${
          chartTeacherQuery
            ? JSON.parse(chartTeacherQuery?.StudentTeacher).Total
            : "0"
        } ]`,
        "sub10-7",
        null
      ),
      getItem(
        `Số việc đã giao [ ${
          chartTeacherQuery
            ? JSON.parse(chartTeacherQuery?.TaskTeacher).Total
            : "0"
        } ]`,
        "sub10-8",
        null
      ),
      getItem(
        `Số tài liệu upload lên [ ${
          chartTeacherQuery
            ? JSON.parse(chartTeacherQuery?.FileTeacher).Total
            : "0"
        } ]`,
        "sub10-9",
        null
      ),
    ]),

    getItem("Bộ sưu tập", "sub11", <i className="fa-solid fa-thumbtack"></i>),

    getItem("Chia sẻ kết quả", "sub12", <i className="fa-solid fa-share"></i>, [
      getItem(
        `Nhiệm vụ [ ${
          countQuizVoluntary
            ? JSON.parse(countQuizVoluntary?.QuizVoluntary)?.Total
            : "0"
        } ]`,
        "sub12-1",
        null
      ),
      getItem(
        `Đề thi [ ${
          countQuizAssignment
            ? JSON.parse(countQuizAssignment?.QuizAssignment)?.Total
            : "0"
        } ]`,
        "sub12-2",
        null
      ),
      getItem(
        `Quiz  [ ${
          countLectureVoluntary
            ? JSON.parse(countLectureVoluntary?.LectureVoluntary)?.Total
            : "0"
        } ]`,
        "sub12-3",
        null
      ),
      getItem(
        ` Khóa học [ ${
          countLectureAssignment
            ? JSON.parse(countLectureAssignment?.LectureAssignment)?.Total
            : "0"
        } ]`,
        "sub12-4",
        null
      ),
    ]),
  ];

  const onOpenChange = (keys) => {
    setOpenKeys(keys.key);
    router.push(`${router.pathname}?key=${keys.key}`);
  };

  const displayContent = () => {
    switch (openKeys) {
      case "practive":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub2":
        return <ClassCard role={"lesson"} data={scheduleQuery} />;
      // case "sub3":
      //   return <ClassCard />;
      case "sub3-1":
        return <JoinCard />;
      case "sub3-2":
        if (userName != "admin") {
          alert("Bạn không phải admin");
          setOpenKeys("sub3-1");
          router.push("/personalized?key=sub3-1");
          return null;
        } else {
          return <ClassCard />;
        }
      case "sub4-1":
        return <ExamCard onlyAssignment={true} />;
      case "sub4-2":
        return <ExamCard onlyAssignment={false} />;
      case "sub5-1":
        return <SelftrainingCard onlyAssignment={true} onlyShared={false} />;
      case "sub5-2":
        return <SelftrainingCard onlyAssignment={false} onlyShared={true}/>;
      case "sub6-1":
        return <Document_Cart />;
      case "sub6-2":
        return <Document_Cart />;
      case "courses":
        return <CourseCard />;
      case "sub8":
        return <PractiseCard total={practiveQuery?.Object?.cardSum} />;
      case "sub9-1":
        return (
          <TeachingResults
            type={"QuizVoluntary"}
            value={countQuizVoluntary?.QuizVoluntary}
          />
        );
      case "sub9-2":
        return (
          <CircleChart
            role={"QuizAssignment"}
            value={countQuizAssignment?.QuizAssignment}
          />
        );
      case "sub9-3":
        return (
          <TeachingResults
            role={"LectureVoluntary"}
            value={countLectureVoluntary?.LectureVoluntary}
          />
        );
      case "sub9-4":
        return (
          <CircleChart
            role={"LectureAssignment"}
            value={countLectureAssignment?.LectureAssignment}
          />
        );
      case "sub9-5":
        return (
          <TeachingResults
            role={"hoctap"}
            dataCountQuizAssignment={countQuizAssignment}
          />
        );
      case "sub9-6":
        return (
          <CircleChart
            role={"TestAssignment"}
            value={countTestAssignment.TestAssignment}
          />
        );
      case "sub9-7":
        return (
          <TeachingResults
            role={"hoctap"}
            dataCountQuizAssignment={countQuizAssignment}
          />
        );
      case "sub9-8":
        return (
          <CircleChart
            role={"TutorStudent"}
            value={countTutorStudent.TutorStudent}
          />
        );
      case "sub9-9":
        return (
          <TeachingResults
            role={"hoctap"}
            dataCountQuizAssignment={countQuizAssignment}
          />
        );
      case "sub10-1":
        return <TeachingResults value={chartTeacherQuery} type="question" />;
      case "sub10-2":
        return <TeachingResults value={chartTeacherQuery} type="lecture" />;
      case "sub10-3":
        return <TeachingResults value={chartTeacherQuery} type="test" />;
      case "sub10-4":
        return <TeachingResults value={chartTeacherQuery} type="exam" />;
      case "sub10-5":
        return <TeachingResults value={chartTeacherQuery} type="class" />;
      case "sub10-6":
        return <TeachingResults value={chartTeacherQuery} type="subject" />;
      case "sub10-7":
        return <TeachingResults value={chartTeacherQuery} type="student" />;
      case "sub10-8":
        return <TeachingResults value={chartTeacherQuery} type="task" />;
      case "sub10-9":
        return <TeachingResults value={chartTeacherQuery} type="file" />;
      case "sub11":
        return <AbumCart />;
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
          </div>
          {displayContent()}
        </div>
      </div>
    </>
  );
};
export default Personalized;
