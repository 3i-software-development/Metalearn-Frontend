import MyClass from "@/components/Class/MyClass";
import SearchForm from "@/components/Class/SearchForm";
import Section from "@/components/Section/Section";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useRouter } from "next/router";
import LmsClassForum from "@/components/LmsClassForum";
import LmsListStudent from "@/components/LmsListStudent";
import LmsCalendar from "@/components/LmsCalendar";

const cx = classNames.bind(styles);

const Index = () => {
  const [openPage, setOpenPage] = useState(undefined)
  const [openkey, setOpenKey] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    if (router.query.page) {
      setOpenPage('lmsClassForum');
    } else {
      setOpenPage(undefined);
    }
  }, [router.query.page]);

  useEffect(() => {
    if (router.query.key) {
      setOpenKey(router.query.key);
    } else {
      setOpenKey(undefined);
    }
  }, [router.query.key]);

  const displayContent = () => {
    if (openPage == 'lmsClassForum' && openkey == 'students') return <LmsListStudent />
    else if (openPage == 'lmsClassForum' && openkey == 'calendar') return <LmsCalendar />
    else if (openPage == 'lmsClassForum') return <LmsClassForum />
    else return <MyClass />
  }

  return (
    <Section>
      <div className={cx("class-content")}>
        <SearchForm />
        {displayContent()}
      </div>
    </Section>
  );
};

export default Index;
