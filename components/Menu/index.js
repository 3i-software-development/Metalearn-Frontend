import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { useGetListScheduleQuery } from "@/lib/Midleware/ScheduleQuery";
import { useGetListLmsClassQuery } from "@/lib/Midleware/LmsClassQuery";
import { useGetListExamQuery } from "@/lib/Midleware/ExamQuery";
import { useGetTotalPractiveQuery } from "@/lib/Midleware/PractiveQuery";
import { useGetListFileCwQuery } from "@/lib/Midleware/FileCwQuery";
import { useGetListLectureQuery } from "@/lib/Midleware/LectureQuery";
import { useGetListSubjectQuery } from "@/lib/Midleware/SubjectQuery";
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
import { useRouter } from 'next/router';
import classNames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classNames.bind(styles);

const SliderBar = () => {
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
  const [openKeys, setOpenKeys] = useState(`${router.query.key}`);

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
      `Rèn luyện [ ${practiveQuery?.Object?.cardSum.toLocaleString()} | ${practiveQuery?.Object?.cardExpire.toLocaleString()} | ${practiveQuery?.Object?.cardDone.toLocaleString()} ]`,
      "practive",
      <MailOutlined />
    ),

    getItem(
      `Buổi học [ ${scheduleQuery?.Object?.length.toLocaleString()} ]`,
      "sub2",
      <AppstoreOutlined />
    ),

    getItem(
      `Lớp tham gia [ ${classList?.count.toLocaleString()} ]`,
      "sub3",
      <SettingOutlined />
    ),

    getItem(
      `Đề thi [ ${
        examQuery?.countAssignment.toLocaleString() +
        " | " +
        examQuery?.countSharing.toLocaleString()
      } ]`,
      `sub4`,
      <SettingOutlined />,
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
      <SettingOutlined />,
      [
        getItem(
          `Được giao [ ${countQuiz?.Object?.countAssignment.toLocaleString()} ]`,
          "sub5-1",
          null
        ),
        getItem(
          `Tự luyện [ ${countQuiz?.Object?.countVoluntary.toLocaleString()} ]`,
          "sub5-2",
          null
        ),
      ]
    ),
    getItem(
      `Tài liệu [ ${fileCwQuery?.Object?.count.toLocaleString()} ]`,
      "sub6",
      <SettingOutlined />
    ),

    getItem(
      `Khóa học [ ${lectureQuery?.Object?.length.toLocaleString()} ]`,
      "courses",
      <SettingOutlined />
    ),

    getItem(
      `Môn học của tôi [ ${subjectQuery?.length.toLocaleString()} ]`,
      "sub8",
      <SettingOutlined />
    ),

    getItem("Kết quả học tập", "sub9", <SettingOutlined />, [
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

    getItem("Kết quả giảng dạy", "sub10", <SettingOutlined />, [
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

    getItem("Bộ sưu tập", "sub11", <SettingOutlined />),
  ];

  const onOpenChange = (keys) => {
    setOpenKeys(keys.key);
    router.push(`/personalized?key=${keys.key}`);
  };

  const [openNav, setOpenNav] = useState(false);
  const showNav = () => {
    setOpenNav(!openNav);
  };

  return (
      <div className={cx("person")}>
        <div className={cx("navbar")} aria-hidden={openNav}>
          <span className="hidden nav-toggle" onClick={showNav}>
            <i className="fa fa-bars" aria-hidden="true"></i>&nbsp; Navigation
          </span>
          <Menu
            mode="inline"
            defaultSelectedKeys={openKeys}
            onClick={onOpenChange}
            items={items}
          />
        </div>
      </div>
  );
};
export default SliderBar;
