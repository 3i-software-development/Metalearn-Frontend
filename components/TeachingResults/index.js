import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { IoIosRemove, IoMdAdd, IoIosSquare } from "react-icons/io";
import { CgShapeRhombus } from "react-icons/cg";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, Tooltip, Legend);
export default function TeachingResults() {
  const [hide, setHide] = useState(false);
  const cx = classNames.bind(styles);

  const handleSetHide = () => {
    setHide((pre) => !pre);
  };

  const data = {
    labels: ["25/4/2022"],
    datasets: [
      {
        labels: "369",
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className={cx("TeachingResults_wrapper")}>
      <div className={cx("TeachingResults_all")}>
        <div className={cx("TeachingResults_all_item")}>
          <div className={cx("TeachingResults_Item")}>
            <CgShapeRhombus />
            <div>Câu Hỏi [1]</div>
          </div>
          <div onClick={handleSetHide}>
            {hide ? (
              <IoIosRemove className={cx("Icon_Remove")} />
            ) : (
              <IoMdAdd className={cx("Icon_Remove")} />
            )}
          </div>
        </div>
        {hide && (
          <div className={cx("content_all")}>
            <div className={cx("content_item")}>
              <IoIosSquare />
              <span>Số câu hỏi: 0</span>
            </div>
            <Bar style={{ width: "100%" }} data={data} options={options} />
          </div>
        )}
      </div>
    </div>
  );
}
