import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Section from "../Section/Section";
import ExamItem from "./ExamItem";
import NavbarExam from "./NavbarExam";
import { ArrayData } from "@/data";
import useDebounce from "@/hooks/useDebounce";
import Pagination from "../Pagination/Pagination";
const cx = classNames.bind(style);
const Exam = () => {
  const [arrData, setArrayData] = useState(ArrayData);
  const [valueInputSeacrch, setValueInputSeacrch] = useState();
  const [resultSearch, setResultSearch] = useState(ArrayData);
  const [valueCheckedSearch, setValueCheckedSearch] = useState(); 
  console.log(valueCheckedSearch)
  useEffect(() => {
    if (valueInputSeacrch ) {
      const temp = arrData.filter((item) =>
      item.subject.toLowerCase().includes(valueInputSeacrch)
      );
      setResultSearch(temp);
    } else {
      setResultSearch(arrData);
    }
  }, [valueInputSeacrch]);

  return (
    <Section>
      <div id={cx("leaderboards")}>
        <div className={cx("options")}>
          <input
            type="text"
            className={cx("search")}
            placeholder="Search for exam..."
            onChange={(e) => setValueInputSeacrch(e.target.value)}
          />
          <i></i>
          <div className={cx("sort")}>
            s<h2>Sort By Exam</h2>
            <div className={cx("tabTitles")}>
              <span id={cx("bedwars")} className={cx("active")}>
                Exam
              </span>
              <span id={cx("ffa")}>Free-For-All</span>
            </div>
            <form className={cx("tabContents")}>
              <li className={cx("tab bedwars")}>
                {arrData &&
                  arrData?.map((item) => {
                    return (
                      <div key={item.id}>
                        <input
                          name="sort"
                          type="radio"
                          value={item.subject}
                          onChange={(e) =>
                            setValueCheckedSearch(e.target.value)
                          }
                        />
                        <span for="q">{item.subject}</span>
                      </div>
                    );
                  })}
              </li>
            </form>
          </div>
          {/* <Pagination items={arrData.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handleOnPageChange}/> */}
          <Pagination />
        </div>
        <ul className={cx("toplist")}>
          {resultSearch &&
            resultSearch?.map((item) => {
              return (
                <li data-rank="1" className={cx("lilist")} key={item.id}>
                  <div className={cx("thumb")}>
                    <span
                      className={cx("img")}
                      data-name="BluewaveSwift"
                    ></span>
                    <span className={cx("name")}>
                      <h4>{item.subject}</h4>
                      <p>{item.munites}</p>
                    </span>
                  </div>
                  <div className={cx("more")}>
                    {" "}
                    <span className={cx("stat")}>
                      <b>
                        {item.point} / 10
                        <br />
                        Point
                      </b>
                    </span>
                    <span className={cx("stat")}>
                      <p>
                        <i class="fa-solid fa-book fa-2xl"></i>
                      </p>
                    </span>
                  </div>
                </li>
              );
            })}

          {/* <li data-rank="2" className={cx("lilist")}>
            <div className={cx("thumb")}>
              <span className={cx("img")} data-name="BluewaveSwift"></span>
              <span className={cx("name")}>
                <h4>Naths</h4>
                <p>15 munites</p>
              </span>
            </div>
            <div className={cx("more")}>
              {" "}
              <span className={cx("stat")}>
                <b>
                  0 / 10
                  <br />
                  Point
                </b>
              </span>
              <span className={cx("stat")}>
                <p>
                  <i class="fa-solid fa-book fa-2xl"></i>
                </p>
              </span>
            </div>
          </li>
          <li data-rank="3" className={cx("lilist")}>
            <div className={cx("thumb")}>
              <span className={cx("img")} data-name="BluewaveSwift"></span>
              <span className={cx("name")}>
                <h4>Naths</h4>
                <p>15 munites</p>
              </span>
            </div>
            <div className={cx("more")}>
              {" "}
              <span className={cx("stat")}>
                <b>
                  0 / 10
                  <br />
                  Point
                </b>
              </span>
              <span className={cx("stat")}>
                <p>
                  <i class="fa-solid fa-book fa-2xl"></i>
                </p>
              </span>
            </div>
          </li>
          <li data-rank="4" className={cx("lilist")}>
            <div className={cx("thumb")}>
              <span className={cx("img")} data-name="BluewaveSwift"></span>
              <span className={cx("name")}>
                <h4>Naths</h4>
                <p>15 munites</p>
              </span>
            </div>
            <div className={cx("more")}>
              {" "}
              <span className={cx("stat")}>
                <b>
                  0 / 10
                  <br />
                  Point
                </b>
              </span>
              <span className={cx("stat")}>
                <p>
                  <i class="fa-solid fa-book fa-2xl"></i>
                </p>
              </span>
            </div>
          </li>
          <li data-rank="5" className={cx("lilist")}>
            <div className={cx("thumb")}>
              <span className={cx("img")} data-name="BluewaveSwift"></span>
              <span className={cx("name")}>
                <h4>Naths</h4>
                <p>15 munites</p>
              </span>
            </div>
            <div className={cx("more")}>
              {" "}
              <span className={cx("stat")}>
                <b>
                  0 / 10
                  <br />
                  Point
                </b>
              </span>
              <span className={cx("stat")}>
                <p>
                  <i class="fa-solid fa-book fa-2xl"></i>
                </p>
              </span>
            </div>
          </li>
          <li data-rank="6" className={cx("lilist")}>
            <div className={cx("thumb")}>
              <span className={cx("img")} data-name="BluewaveSwift"></span>
              <span className={cx("name")}>
                <h4>Naths</h4>
                <p>15 munites</p>
              </span>
            </div>
            <div className={cx("more")}>
              {" "}
              <span className={cx("stat")}>
                <b>
                  0 / 10
                  <br />
                  Point
                </b>
              </span>
              <span className={cx("stat")}>
                <p>
                  <i class="fa-solid fa-book fa-2xl"></i>
                </p>
              </span>
            </div>
          </li>
          <li data-rank="7" className={cx("lilist")}>
            <div className={cx("thumb")}>
              <span className={cx("img")} data-name="BluewaveSwift"></span>
              <span className={cx("name")}>
                <h4>Naths</h4>
                <p>15 munites</p>
              </span>
            </div>
            <div className={cx("more")}>
              {" "}
              <span className={cx("stat")}>
                <b>
                  0 / 10
                  <br />
                  Point
                </b>
              </span>
              <span className={cx("stat")}>
                <p>
                  <i class="fa-solid fa-book fa-2xl"></i>
                </p>
              </span>
            </div>
          </li>
          <li data-rank="8" className={cx("lilist")}>
            <div className={cx("thumb")}>
              <span className={cx("img")} data-name="BluewaveSwift"></span>
              <span className={cx("name")}>
                <h4>Naths</h4>
                <p>15 munites</p>
              </span>
            </div>
            <div className={cx("more")}>
              {" "}
              <span className={cx("stat")}>
                <b>
                  0 / 10
                  <br />
                  Point
                </b>
              </span>
              <span className={cx("stat")}>
                <p>
                  <i class="fa-solid fa-book fa-2xl"></i>
                </p>
              </span>
            </div>
          </li> */}
        </ul>
        {/* <Pagination/> */}
      </div>
    </Section>
  );
};

export default Exam;
