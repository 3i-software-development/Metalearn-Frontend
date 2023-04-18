import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Section from "../Section/Section";
import ExamItem from "./ExamItem";
import NavbarExam from "./NavbarExam";
const cx = classNames.bind(style);
const Exam = () => {
  return (
    <Section>
      <div id={cx("leaderboards")}>
        <NavbarExam/>
        <ExamItem/>
      </div>
    </Section>
  );
};

export default Exam;
