import Section from "@/components/Section/Section";
import React, { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import CreateIcon from "@mui/icons-material/Create";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import SubjectIcon from "@mui/icons-material/Subject";
import { Input, Modal } from "antd";
import Bulletinboard from "../Class/Bulletinboard";
import { useGetCmsItemClassQuery } from "@/lib/Midleware/CmsClassQuery";
import { useInsertQuizRefJsonMutation } from "@/lib/Midleware/QuizQuery";

const { TextArea } = Input;

const cx = classNames.bind(styles);

const LmsClassForum = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const [insertQuizRefJson, result] = useInsertQuizRefJsonMutation({
    fixedCacheKey: "shared-update-post",
  });

  const [query, setQuery] = useState({
    classCode: router.query.classCode,
    userName: "admin",
  });
  const { data: ItemClass } = useGetCmsItemClassQuery(query);
  // console.log(ItemClass)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
      // await insertQuizRefJson({
      //   "classCode": router.query.classCode,
      //   "CreatedBy": "admin",
      //   "IsNews": true,
      //   "refContent": textAreaValue,
      //   "UserCreateRef": "admin"
      // })
      console.log({
        classCode: router.query.classCode,
        CreatedBy: "admin",
        IsNews: true,
        refContent: textAreaValue,
        UserCreateRef: "admin",
      });
      alert("Thêm tin tức thành công!");
    } catch (error) {
      alert("Thêm tin tức thất bại");
      console.log(error);
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      label: "Tạo tin tức",
      key: "news",
      classCode: router.query.classCode,
      icon: <CreateIcon className={cx("icon")} />,
      modal: true,
    },
    {
      label: "Lịch học",
      key: "calendar",
      icon: <CalendarMonthIcon className={cx("icon")} />,
    },
    {
      label: "Rèn luyện",
      key: "news",
      icon: <ModelTrainingIcon className={cx("icon")} />,
    },
    {
      label: "Kết quả",
      key: "news",
      icon: <ReceiptIcon className={cx("icon")} />,
    },
    {
      label: "Học viên",
      key: "students",
      classCode: router.query.classCode,
      icon: <PeopleIcon className={cx("icon")} />,
    },
    {
      label: "Môn học",
      key: "news",
      icon: <SubjectIcon className={cx("icon")} />,
    },
  ];
  const title = useRef(router.query.title)

  return (
    <Section>
      <h3 className={cx('h3')}>{title?.current}</h3>
      <div className={cx("class")}>
        {data?.map((element, i) => {
          return (
            <Link
              key={i}
              href={`/my-class?page=lmsClassForum&key=${element?.key}&classCode=${element.classCode}`}
            >
              <div className={cx("item")}>
                {element.modal ? (
                  <div onClick={showModal} className={cx("inner-item")}>
                    <span>{element?.icon}</span>
                    <span>{element?.label}</span>
                  </div>
                ) : (
                  <div className={cx("inner-item")}>
                    <span>{element?.icon}</span>
                    <span>{element?.label}</span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
      <div className={cx("buletinClass")}>
        <h4>Bảng tin lớp học</h4>
        <Bulletinboard data={ItemClass} />
      </div>

      <Modal
        title="Tạo tin tức"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TextArea
          onChange={(e) => setTextAreaValue(e.target.value)}
          rows={7}
          placeholder="Insert text here"
          maxLength={10}
        />
      </Modal>
    </Section>
  );
};

export default LmsClassForum;
