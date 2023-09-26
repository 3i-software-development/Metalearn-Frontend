import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import ListCourses from "../ListCourse/ListCourses";
import { GetListExam, GetListClass, GetListDoc } from "@/pages/api/CallAPI";
import AddForm from "../Quiz/AddForm";
import Link from "next/link";

const cx = classNames.bind(styles);

const ListCourse = () => {
  const ListExam = GetListExam();
  const ListClass = GetListClass();
  const ListDoc = GetListDoc();

  const [btnact, setBtnact] = useState(0);

  const [selectedCourseTitle, setSelectedCourseTitle] = useState("Select a course");

  const listCourse = [
    {
      title: "Lớp học ngày 27/6 [lop_27_06]",
      day: "14:21 27/06/2023",
      countStudent: 8,
      teacher: "Phạm Trang (3i)-GV",
      status: "Open"
    },
    {
      title: "Lớp học của Thọ [LH_21/6]",
      day: "14:21 27/06/2023",
      countStudent: 3,
      teacher: "Vũ Xuân Thọ",
      status: "Open"
    },
    {
      title: "Lớp tin [1111]",
      day: "14:21 27/06/2023",
      countStudent: 3,
      teacher: "Phạm Trang (3i)-GV",
      status: "Open"
    },
    {
      title: "Lớp học tiếng anh cô Trang ngày 20/6/2023 [Love001_01]",
      day: "14:21 27/06/2023",
      countStudent: 4,
      teacher: "Phạm Trang (3i)-GV",
      status: "Open"
    },
    {
      title: "Lớp học môn Toán [111ba]",
      day: "14:21 27/06/2023",
      countStudent: 8,
      teacher: "Cao Thị Trâm",
      status: "Open"
    },
  ]

  //const listSubject = ["Đề thi", "Lớp học", "Tài liệu"]
  const listSubject2 = ["Ngân Hàng Quiz", "Ngân Hàng Đề Thi", "Tài Liệu", "Lớp Học", "Buổi Học Trực Tuyến", "Thi Online", "Thông Tin Giáo Viên"]


  const listCourseDescription = [
    {

    },
    {

    }
  ]


  

  return (
    <div>
    {/* 
      <div className={cx("list-course-container")}>
        <div className={cx("list-btn")}>
          {listSubject.map((item, index) => (
            <button
              className={cx(btnact == index && "active")}
              key={index}
              onClick={() => setBtnact(index)}
            >
              <i className="fa-solid fa-bookmark"></i>
              {item}
            </button>
          ))}
        </div>
        <div className={cx("list-main")}>
          {btnact === 0 && <h3>Danh sách đề thi</h3>}
          {btnact === 1 && <h3>Danh sách lớp học</h3>}
          {btnact === 2 && <h3>Danh sách tài liệu</h3>}
          
          {btnact === 0 && ListExam.data && (
            <ListCourses data={ListExam.data.query} exam />
          )}
          {btnact === 1 && ListClass.data && (
            <ListCourses data={ListClass.data.query} clas />
          )}
          {btnact === 2 && ListDoc.data && (
            <ListCourses data={ListDoc.data.query} doc />
          )}
        </div>   
      </div> */}



      <div className={cx("list-course-container")}>
       
        <div className={cx("list-btn")}>
          {listSubject2.map((item, index) => (
            <button     
              className={cx(btnact == index && "active")}
              key={index}
              onClick={() => setBtnact(index)} 
            >
            <div>
              <i style={{fontSize: "100px", marginTop: "70px"}} class="fa-solid fa-building-columns"></i>
            </div>
            <p className={cx("ListCourse-In-Course")}>[123]</p>   
              <h5 className={cx("ListCourse-Title")}>{item}</h5>   
          </button>

          ))}
        </div>
        <div className={cx("list-main")}>

          
          {btnact === 0 && <h3>Danh sách Ngân Hàng Quiz</h3>}
          {btnact === 1 && <h3>Danh sách Ngân Hàng Đề Thi</h3>}
          {btnact === 2 && <h3>Danh sách Tài Liệu</h3>}
          {btnact === 3 && <h3>Danh sách Lớp Học</h3>}
          {/* {btnact === 4 && <h3>Danh sách Buổi Học Trực Tuyến</h3>} */}
          {btnact === 4 &&   <Link href="/BankDT" className={cx("mb-login")}>
          <h3>Danh sách Buổi Học Trực Tuyến</h3>
        </Link>}

        
          {btnact === 5 && <h3>Danh sách Thi Online</h3>}


          
          
       
          {btnact === 6 && <h3>Danh sách Thông Tin Giáo Viên</h3>}

          
          {btnact === 0 && ListExam.data && (
            <ListCourses data={ListExam.data.query} exam />
          )}
          {btnact === 1 && ListClass.data && (
            <ListCourses data={ListClass.data.query} clas />
          )}
          {btnact === 2 && ListDoc.data && (
            <ListCourses data={ListDoc.data.query} doc />
          )}
          
          {btnact === 3 && (
          <div style={{ display: "flex" }}>
           
            <ul>
              {listCourse.map((course, index) => (
                <li className={cx("List-Course-Class")} key={index}
                onClick={() => setSelectedCourseTitle(course.title)}
                >
                  <i style={{color: "rgb(186, 186, 14)"}} class="fa-solid fa-star"></i> <strong>Title:</strong> {course.title}<br />
                  <i style={{color: "rgb(186, 186, 14)"}} class="fa-solid fa-star"></i> <strong><i class="fa-regular fa-clock"></i>:</strong> {course.day}<br />
                  <i style={{color: "rgb(186, 186, 14)"}} class="fa-solid fa-star"></i> <strong>Count Students:</strong> {course.countStudent}<br />
                  <i style={{color: "rgb(186, 186, 14)"}} class="fa-solid fa-star"></i> <strong>Teacher:</strong> {course.teacher}<br />
                  <i style={{color: "rgb(186, 186, 14)"}} class="fa-solid fa-star"></i> <strong>Status:</strong> {course.status}<br />
                </li>
               
                
              ))}
            </ul>
            <div className={cx("List-Course-Class-Description")}>
                <div>

                  {selectedCourseTitle && (<h1 style={{ textAlign: "center" }}>{selectedCourseTitle}</h1>)}
                  <div style={{backgroundColor: "#337ab7", height: "40px", margin: "0 60px", borderRadius: "10px", display: "flex", justifyContent: "space-between"}}>
                    
                    <div style={{marginLeft: "25px", fontSize: "25px"}}>
                      <i style={{marginLeft: "30px"}} class="fa-solid fa-pen"></i>
                      <i style={{marginLeft: "30px"}} class="fa-solid fa-video"></i>
                      <i style={{marginLeft: "30px"}} class="fa-solid fa-message"></i>
                      <i style={{marginLeft: "30px"}} class="fa-solid fa-file-signature"></i>
                    </div>

                    <div style={{fontSize: "25px", marginRight: "25px"}}>
                    <i style={{marginRight: "20px"}} class="fa-solid fa-users"></i>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                      {/* <h2>{selectedCourseTitle}</h2> */}

                      <div>
                        <img style={{ borderRadius: "50%", height: "60px", width: "60px", margin: "50px" }} src="https://upload.wikimedia.org/wikipedia/vi/5/5a/Batman-Arkham-Origins-Logo.jpg" alt="Teacher Avatar"
                        />
                      </div>

                      <div>
                        <input placeholder="Thêm bình luận" style={{margin: "50px", width: "290%", height: "60px", borderRadius: "10px"}} type="search" />
                      </div>
                  </div>

        <div style={{ backgroundColor: "white", borderRadius: "10px", marginLeft: "20px", marginRight: "80px", display: "inline-block", marginTop: "10px" }}>
          <div style={{ display: "flex", width: "100%", height: "150px", textAlign: "center" }}>
            <div style={{ width: "30%" }}>
              <img style={{ borderRadius: "50%", height: "30px", width: "30px", margin: "10px auto" }} src="https://upload.wikimedia.org/wikipedia/vi/5/5a/Batman-Arkham-Origins-Logo.jpg" alt="Teacher Avatar" />
              <h6 style={{ display: "block", textAlign: "center" }}>Học sinh số 45</h6>
            </div>

            <div style={{ margin: "50px", width: "auto", height: "60px", borderRadius: "10px", textAlign: "left", alignContent: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ margin: 0 }}>Quý vị đang xem nội dung tin rao Nhà ở xã hội RichHome 3 - Kim Oanh - Bến Cát -Bình Dương - LH: 0968 289 - Mã tin 21680928. Mọi thông tin, nội dung liên quan tới tin rao này là do người đăng tin đăng tải và chịu trách nhiệm.</p>
              <div style={{ justifyContent: "space-around", display: "flex", marginTop: "10px" }}>
                <i style={{ color: "red" }} class="fa-solid fa-heart">Like</i>
                <i class="fa-solid fa-comment">Comment</i>
                <i class="fa-solid fa-share">Share</i>
              </div>
            </div>
          </div>
        </div>


        <div style={{ backgroundColor: "white", borderRadius: "10px", marginLeft: "20px", marginRight: "80px", display: "inline-block", marginTop: "10px" }}>
          <div style={{ display: "flex", width: "100%", height: "150px", textAlign: "center" }}>
            <div style={{ width: "30%" }}>
              <img style={{ borderRadius: "50%", height: "30px", width: "30px", margin: "10px auto" }} src="https://haycafe.vn/wp-content/uploads/2022/02/Gai-xinh-cute-anh-dai-dien-dep-cho-nu.jpg" />
              <h6 style={{ display: "block", textAlign: "center" }}>Học sinh số 09</h6>
            </div>

            <div style={{ margin: "50px", width: "auto", height: "60px", borderRadius: "10px", textAlign: "left", alignContent: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ margin: 0 }}>Quý vị đang xem nội dung tin rao Nhà ở xã hội RichHome 3 - Kim Oanh - Bến Cát -Bình Dương - LH: 0968 289 - Mã tin 21680928. Mọi thông tin, nội dung liên quan tới tin rao này là do người đăng tin đăng tải và chịu trách nhiệm.</p>
              <div style={{ justifyContent: "space-around", display: "flex", marginTop: "10px" }}>
                <i style={{ color: "red" }} class="fa-solid fa-heart">Like</i>
                <i class="fa-solid fa-comment">Comment</i>
                <i class="fa-solid fa-share">Share</i>
              </div>
            </div>
          </div>
        </div>






                  


                </div>
            </div>

            

          </div>
          )}
          
          {/* {btnact === 4 && ListDoc.data && (
            // <ListCourses data={ListDoc.data.query} doc />

            <div>

              <div style={{marginTop: "20px", width: "50%", backgroundColor: "rgb(165, 168, 165)", borderRadius: "5px", paddingBottom: "10px", paddingTop: "10px"}}>
                <div style={{paddingLeft: "12px"}}>
                  <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                  <h4>Môn học: Lập trình</h4>
                  <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "10px"}}>
                <i class="fa-solid fa-mobile"></i>
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="fa-solid fa-video"></i>
                </div>
              </div>


              <div style={{marginTop: "20px", width: "50%", backgroundColor: "rgb(165, 168, 165)", borderRadius: "5px", paddingBottom: "10px", paddingTop: "10px"}}>
                <div style={{paddingLeft: "12px"}}>
                  <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                  <h4>Môn học: Lập trình</h4>
                  <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "10px"}}>
                <i class="fa-solid fa-mobile"></i>
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="fa-solid fa-video"></i>
                </div>
              </div>

              <div style={{marginTop: "20px", width: "50%", backgroundColor: "rgb(165, 168, 165)", borderRadius: "5px", paddingBottom: "10px", paddingTop: "10px"}}>
                <div style={{paddingLeft: "12px"}}>
                  <h3>Buổi học ngày 19/04 [LN1904][Trang ptt 87 (HS)]</h3>
                  <h4>Môn học: Lập trình</h4>
                  <h5>Bắt đầu ngày 18/04/2023 11:00</h5>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", marginLeft: "10px", marginRight: "10px"}}>
                <i class="fa-solid fa-mobile"></i>
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="fa-solid fa-video"></i>
                </div>
              </div>

              
            </div>

            
          )} */}
          {btnact === 5 && ListDoc.data && (
            <ListCourses data={ListDoc.data.query} doc />
          )}
          {btnact === 6 && ListDoc.data && (
            <ListCourses data={ListDoc.data.query} doc />
          )}
        </div>   
      </div>

    

    </div>
  );
};

export default ListCourse;
