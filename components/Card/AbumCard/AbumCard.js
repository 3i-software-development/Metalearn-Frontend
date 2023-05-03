import React from "react";
import Section from "../../Section/Section";
import classNames from "classnames/bind";
import style from "./style.module.scss";
// import { style } from "@mui/system";
const cx = classNames.bind(style);
export const AbumCart = () => {
  return (
    <Section>
      <div className={cx("class")}>
        <div className={cx("card")}>
          <div className={cx("card-item")}>
            <div className={cx("card-body")}>
              <div className={cx("title")}>
                <h4>Câu hỏi Quiz [0]</h4>
              </div>
              <div className={cx("card-image")}>
                <img src="https://yeudayhoc.com/wp-content/uploads/2022/01/8-1-1024x576.png" />
              </div>

              <div className={cx("card-image")}>
                <img src="https://yeudayhoc.com/wp-content/uploads/2022/01/8-1-1024x576.png" />
              </div>

              <div className={cx("card-image")}>
                <img src="https://yeudayhoc.com/wp-content/uploads/2022/01/8-1-1024x576.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("card")}>
          <div className={cx("card-item")}>
            <div className={cx("card-body")}>
              <div className={cx("title")}>
                <h4>Đề thi [0]</h4>
              </div>
              <div className={cx("card-image")}>
                <img src="https://yeudayhoc.com/wp-content/uploads/2022/01/8-1-1024x576.png" />
              </div>
              <div className={cx("card-image")}>
                <img src="https://yeudayhoc.com/wp-content/uploads/2022/01/8-1-1024x576.png" />
              </div>
              <div className={cx("card-image")}>
                <img src="https://yeudayhoc.com/wp-content/uploads/2022/01/8-1-1024x576.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("card")}>
          <div className={cx("card-item")}>
            <div className={cx("card-body")}>
              <div className={cx("title")}>
                <h4>Câu hỏi và trả lời [0]</h4>
              </div>
              <div className={cx("card-image")}>
                <img src="https://yeudayhoc.com/wp-content/uploads/2022/01/8-1-1024x576.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
