import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ConfigZoom.module.scss";


const cx = classNames.bind(styles);


function ConfigZoom() {

  const [itemStates, setItemStates] = useState({
    question1: false,
    question2: false,
})

const handleItemClick = (itemName) => {
  // Khi nhấp vào một phần tử, chỉ cập nhật trạng thái của phần tử đó
  setItemStates({
      ...itemStates,
      [itemName]: !itemStates[itemName],
  });
};
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Cấu Hình Zoom</h2>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div>
          
          <ul style={{listStyle: "none", border: "2px solid black", width: "300%", borderRadius: "5px", marginLeft: "22px", paddingBottom: "10px", position: "relative"}}>
            <li>
              <div className={cx("flex-item")}> 
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Dịch vụ API</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}>
                  
                </input>
                <i className={`fa-solid ${itemStates.question1 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "40px", marginTop: "12px" }}
                    onClick={() => handleItemClick("question1")}></i>
              </label>

              {itemStates.question1 && (
                <div style={{ marginTop: "17px", marginLeft: "50PX" }}>
                    <h4>* Dịch vụ API 1</h4>
                    <h4>* Dịch vụ API 2</h4>
                    <h4>* Dịch vụ API 3</h4>
                    <h4>* Dịch vụ API 4</h4>
                    <h4>* Dịch vụ API 5</h4>
                </div>
            )}
            </li>
            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Mã tài khoản</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>
            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Tên tài khoản</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>
            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Thư điện tử</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>
            <li>
            <div className={cx("flex-item")}>
                <i className="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{ marginLeft: "12px" }}>Loại</h3>
              </div>

              <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input className={cx("configZoom_input_Styles")}
                  />
                 <i className={`fa-solid ${itemStates.question2 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "40px", marginTop: "12px" }}
                    onClick={() => handleItemClick("question2")}></i>
              </label>
                  {itemStates.question2 && (
                    <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                      <ul style={{listStyle: "none"}}>
                        <li><input type="radio" /> Lịch hợp</li>
                        <li><input type="radio" /> Nhóm chát</li>
                        <li><input type="radio" /> Toán</li>
                        <li><input type="radio" /> Lưu trữ</li>
                        <li><input type="radio" /> Tài khoản FPT.AI</li>
                      </ul>      
                    </div>
                  )}
            </li>
            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Số tài khoản</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>
            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Mã khóa API (Web)</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>
            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Mã bí mật API (web)</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>
            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Mã khóa API (App)</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>
            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Mã bí mật API (Web)</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>
            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Mã host</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>
            

            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Mã token (Web)</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>

            <li>
              <div className={cx("flex-item")}>
                <i class="fa-solid fa-circle-half-stroke"></i>
                <h3 style={{marginLeft: "12px"}}>Mã tự làm mới</h3>
              </div>
              <label>
                <input className={cx("configZoom_input_Styles")}></input>
              </label>
            </li>

            
         
          </ul>
        </div>

        <div style={{backgroundColor: "rgb(247, 245, 245)", width: "40%", borderRadius: "20px"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", marginBottom: "20px"}}>
            <h2>Z</h2>
            <h4>1. Tài khoản phụ 03</h4>
            <i class="fa-solid fa-trash-can"></i>
          </div>

          <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", marginBottom: "20px"}}>
            <h2>Z</h2>
            <h4>1. Tài khoản phụ 02</h4>
            <i class="fa-solid fa-trash-can"></i>
          </div>

          <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", marginBottom: "20px"}}>
            <h2>Z</h2>
            <h4>1. Tài khoản phụ 05</h4>
            <i class="fa-solid fa-trash-can"></i>
          </div>

          <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", marginBottom: "20px"}}>
            <h2>Z</h2>
            <h4>1. Tài khoản phụ 01</h4>
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </div>
          
      </div>
    </div>


  )
}

export default ConfigZoom;




