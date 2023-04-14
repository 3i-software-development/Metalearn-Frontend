import MyClass from "@/components/Class/MyClass";
import SearchForm from "@/components/Class/SearchForm";
import Section from "@/components/Section/Section";
import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const Index = () => {
  return (
    <Section>
      <div className={cx("class-content")}>
        <SearchForm />
        <MyClass />
      </div>
    </Section>
  );
};

export default Index;
