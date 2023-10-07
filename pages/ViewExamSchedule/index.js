import React from "react";

import ViewExamSchedule from "@/components/ViewExamSchedule/ViewExamSchedule";
import classNames from "classnames/bind";
import styles from "./index.module.scss"

const cx = classNames.bind(styles);

const Index = () => {

  return (
    <div>
      <ViewExamSchedule />
    </div>
  );
};

export default Index;

