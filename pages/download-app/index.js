import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import style from "./style.module.scss";
import Img from "@/public/app/Img.jpg";
import Imgix from "react-imgix";

const cx = classNames.bind(style);

const index = () => {
  return (
    <div className={cx("container")}>
      <h1>Cách học phù hợp với cuộc sống của bạn — trên iOS và Android</h1>
      <div className={cx("flex")}>
        <div className={cx("lileft")}>
          <span className={cx("span")}>
            <na>
              <ul className={cx("ul")}>
                <li>
                  Xây dựng bộ kỹ năng của bạn với các khóa học video về hơn 3400
                  chủ đề.
                </li>
                <li>
                  Tùy chỉnh trải nghiệm của bạn với tính năng nhắc nhở học tập
                  và chế độ nền tối.
                </li>
                <li>
                  Học ở bất cứ đâu với chế độ xem offline, Chromecast và
                  AirPlay.
                </li>
                <li>
                  Vừa học vừa làm việc khác nhờ tính năng hình trong hình và âm
                  thanh kiểu podcast.
                </li>
              </ul>
            </na>
          </span>
        </div>
        <Imgix
          alt=""
          src="https://s.udemycdn.com/mobile/default-banner-desktop-1x.jpg"
          sizes="(max-width: 800px) 100vw, 800px"
          imgixParams={{ w: 400, h: 400 }}
          htmlAttributes={{ alt: "udemycdn image" }}
        ></Imgix>

        {/* <na>
                    <ul className={cx('ul')}>
                        <li>Xây dựng bộ kỹ năng của bạn với các khóa học video về hơn 3400 chủ đề.</li>
                        <li>Tùy chỉnh trải nghiệm của bạn với tính năng nhắc nhở học tập và chế độ nền tối.</li>
                        <li>Học ở bất cứ đâu với chế độ xem offline, Chromecast và AirPlay.</li>
                        <li>Vừa học vừa làm việc khác nhờ tính năng hình trong hình và âm thanh kiểu podcast.</li>
                    </ul>
                </na> */}
        {/* <Image src={Img} alt='Img' width='1000' height='500' className={cx('image')}/> */}
      </div>
    </div>
  );
};

export default index;
