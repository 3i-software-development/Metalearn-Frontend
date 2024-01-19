import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Section from "@/components/Section/Section";
import { useGetListQuizQuery } from "@/lib/Midleware/QuizQuery";
import Image from "next/image";
import moment from "moment";
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';

const cx = classNames.bind(styles);

const SelftrainingCard = ({ onlyAssignment }) => {
  const [query, setQuery] = useState({
    content: "",
    createdBy: "",
    fromDatePara: "",
    groupBySubject: false,
    hasNoCorrectAnswer: false,
    id: "",
    isTutor888: false,
    latex: "",
    lectureCode: "",
    level: "",
    onlyAssignment: true,
    onlyDone: true,
    onlyShared: false,
    pageLength: 10,
    pageNum: 1,
    ratingMax: -1,
    ratingMin: -1,
    subjectCode: "",
    toDatePara: "",
    type: "",
    userName: "admin",
  });

  useEffect(() => {
    onlyAssignment ? setQuery({ ...query, onlyAssignment: true, onlyShared: false }) : setQuery({ ...query, onlyAssignment: false, onlyShared: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlyAssignment])

  const { data: quiz } = useGetListQuizQuery(query);
  console.log(quiz);

  return (
    <Section>
      {quiz?.Object?.Data?.map((item, i) => {
        return (
          <div key={i} style={{paddingBottom: '20px', borderBottom: '1px solid #ccc', padding: '15px 0'}}>
            <img
              alt="quiz"
              width={700}
              height={250}
              src={item?.PicDeeplink || ""}
            ></img>

            <span style={{display: 'block', display: 'flex', alignItems: 'center', columnGap: '10px', marginTop: '5px'}}><b><WorkIcon/> Môn học: {item?.SubjectName}</b></span>
            <span style={{display: 'block', display: 'flex', alignItems: 'center', columnGap: '10px', marginTop: '5px'}}><PersonIcon/> {moment(item?.CreatedBy).format('DD/MM/YYYY')}</span>
            <span style={{display: 'block', display: 'flex', alignItems: 'center', columnGap: '10px', marginTop: '5px'}}><AccessTimeIcon/>{item?.CreatedTime}</span>
            <span style={{display: 'block', display: 'flex', alignItems: 'center', columnGap: '10px', marginTop: '5px'}}><DoneIcon/> Trạng thái: Chưa làm</span>
          </div>
        );
      })}
    </Section>
  );
};

export default SelftrainingCard;
