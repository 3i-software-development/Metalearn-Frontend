import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";

const cx = classNames.bind(style);
const NavbarExam = () => {
  return (
    <div className={cx("options")}>
      <input
        type="text"
        className={cx("search")}
        placeholder="Search for exam..."
      />
      <i></i>
      <div className={cx("sort")}>
        <h2>Sort By Exam</h2>
        <div className={cx("tabTitles")}>
          <span id={cx("bedwars")} className={cx("active")}>
            Exam
          </span>
          <span id={cx("ffa")}>Free-For-All</span>
        </div>
        <form className={cx("tabContents")}>
          <li className={cx("tab bedwars active")}>
            <div>
              <input
                checked
                name="sort"
                id={cx("q")}
                type="radio"
                value="bedwars_wins"
              />
              <span for="q">Maths</span>
            </div>
            <div>
              {" "}
              <input
                name="sort"
                id={cx("w")}
                type="radio"
                value="bedwars_games"
              />
              <span for="w">Literature</span>
            </div>
            <div>
              {" "}
              <input
                name="sort"
                id={cx("e")}
                type="radio"
                value="bedwars_destroyed"
              />
              <span for="e">Physics</span>
            </div>
            <div>
              {" "}
              <input
                name="sort"
                id={cx("r")}
                type="radio"
                value="bedwars_kills"
              />
              <span for="r">Chemistry</span>
            </div>
            <div>
              <input
                name="sort"
                id={cx("t")}
                type="radio"
                value="bedwars_deaths"
              />
              <span for="t">History</span>
            </div>
          </li>
          <li className={cx("tab ffa")}>
            <div>
              <input name="sort" id={cx("y")} type="radio" value="ffa_wins" />
              <span for="y">Geography</span>
            </div>
            <div>
              <input name="sort" id={cx("u")} type="radio" value="ffa_kills" />
              <span for="u">English</span>
            </div>
            <div>
              <input name="sort" id={cx("i")} type="radio" value="ffa_deaths" />
              <span for="i">Information Technology</span>
            </div>
          </li>
        </form>
      </div>
      <div className={cx("pagination")}>
        <button disabled className={cx("prev")}></button>
        <span>
          Page <b>1</b> of 300
        </span>
        <button className={cx("next")}></button>
      </div>
    </div>
  );
};

export default NavbarExam;
