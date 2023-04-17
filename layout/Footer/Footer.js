import React from "react";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import useTrans from "@/hooks/useTrans";

const cx = classNames.bind(styles);

const Footer = () => {
  const trans = useTrans();

  return (
    <div className={cx("footer-container")}>
      <div className={cx("footer")}>
        <div className={cx("links", "footer-item")}>
          <div className={cx("link-group")}>
            <Link href="/">{trans.footer.subject}</Link>
            <Link href="/my-class">{trans.footer.class}</Link>
            <Link href="/">{trans.footer.practice}</Link>
            <Link href="/">{trans.footer.connection}</Link>
          </div>
          <div className={cx("link-group")}>
            <Link href="/">{trans.footer.exam}</Link>
            <Link href="/">{trans.footer.question}</Link>
            <Link href="/">{trans.footer.document}</Link>
            <Link href="/">{trans.footer.learn}</Link>
          </div>
          <div className={cx("link-group")}>
            <Link href="/">{trans.footer.online_exam}</Link>
            <Link href="/">{trans.footer.course}</Link>
            <Link href="/">{trans.footer.statistical}</Link>
            <Link href="/">{trans.footer.search}</Link>
          </div>
        </div>
        <div className={cx("language-select", "footer-item")}>
          <Link href="/">
            <BsGlobe />
            <span>{trans.modalLang.lang}</span>
          </Link>
        </div>
        <div className={cx("icon", "footer-item")}>
          <p>MetaLearn</p>
        </div>
        <div className={cx("copyright", "footer-item")}>
          <p>© 2023 MetaLearn, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
