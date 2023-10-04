import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ConfigMathpix.module.scss";


const cx = classNames.bind(styles);
function ConfigfMathpix() {

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
      <h2 className={cx("ConfigMathpix-Title")}>Cấu Hình Mathpix</h2>

      <div className={cx("ConfigMathpix")}>

        <div>
          
          <ul className={cx("ConfigMathpix-Ul")}>
            <li>
                <div className={cx("flex-item")}> 
                    <i class="fa-solid fa-circle-half-stroke"></i>
                    <h3 style={{marginLeft: "12px"}} onClick={() => handleItemClick("question1")}>Dịch vụ API</h3>
                </div>

                <label className={cx("ConfigMath-Label")}>
                    <input className={cx("ConfigMathpix_input_Styles")}></input>
                    

                    <i className={`fa-solid ${itemStates.question1 ? 'fa-arrow-down' : 'fa-arrow-right'}`} style={{ position: "absolute", right: "40px", marginTop: "12px", cursor: "pointer" }}
                        onClick={() => handleItemClick("question1")}>
                    </i>
                </label>

                {itemStates.question1 && (
                  <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                      <ul style={{listStyle: "none"}}>
                        <li style={{position: "relative"}}>
                            <div style={{ position: "absolute", top: "50%", left: "8px", transform: "translateY(-50%)" }}>
                                <i className="fa-solid fa-search"></i>
                            </div>
                            <input
                              placeholder="SearchS"
                              style={{
                                width: "80%",
                                borderRadius: "5px",
                                backgroundColor: "rgb(244, 247, 247)",
                                height: "35px",
                                paddingLeft: "25px", // Để tạo khoảng trống giữa biểu tượng và văn bản
                              }}
                            />       
                        </li>

                        <li><input type="radio" />Tài khoản Google</li>
                        <li><input type="radio" />Tài khoản Mathpix</li>
                        <li><input type="radio" />Tài khoản Zoom</li>
                        <li><input type="radio" />Tài khoản FPT.AI</li>              
                      </ul>      
                  </div>
                )}
            </li>

            <li>
                <div className={cx("flex-item")}>
                    <i class="fa-solid fa-circle-half-stroke"></i>
                    <h3 style={{marginLeft: "12px"}}>Mã tài khoản</h3>
                </div>
                <label>
                    <input className={cx("ConfigMathpix_input_Styles")}></input>
                </label>
            </li>

            <li>
                <div className={cx("flex-item")}>
                    <i class="fa-solid fa-circle-half-stroke"></i>
                    <h3 style={{marginLeft: "12px"}}>Tên tài khoản</h3>
                </div>
                <label>
                    <input className={cx("ConfigMathpix_input_Styles")}></input>
                </label>
            </li>

            <li>
                <div className={cx("flex-item")}>
                    <i class="fa-solid fa-circle-half-stroke"></i>
                    <h3 style={{marginLeft: "12px"}}>Thư điện tử</h3>
                </div>
                <label>
                    <input className={cx("ConfigMathpix_input_Styles")}></input>
                </label>
            </li>

            <li>
              <div className={cx("flex-item")}>
                  <i className="fa-solid fa-circle-half-stroke"></i>
                  <h3 style={{ marginLeft: "12px" }} onClick={() => handleItemClick("question2")}>Loại</h3>
              </div>

              <label className={cx("ConfigMath-Label")}>
                  <input className={cx("ConfigMathpix_input_Styles")}/>

                  <i className={`fa-solid ${itemStates.question2 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                      style={{ position: "absolute", right: "40px", marginTop: "12px", cursor: "pointer" }}
                      onClick={() => handleItemClick("question2")}>
                  </i>

              </label>
                  {itemStates.question2 && (
                    <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                        <ul style={{listStyle: "none"}}>
                          <li style={{position: "relative"}}>
                              <div style={{ position: "absolute", top: "50%", left: "8px", transform: "translateY(-50%)" }}>
                                  <i className="fa-solid fa-search"></i>
                              </div>

                              <input
                                placeholder="SearchS"
                                style={{
                                  width: "80%",
                                  borderRadius: "5px",
                                  backgroundColor: "rgb(244, 247, 247)",
                                  height: "35px",
                                  paddingLeft: "25px", // Để tạo khoảng trống giữa biểu tượng và văn bản
                                }}
                              />
                          </li>

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
                    <input className={cx("ConfigMathpix_input_Styles")}></input>
                </label>
            </li>

            <li>
                <div className={cx("flex-item")}>
                    <i class="fa-solid fa-circle-half-stroke"></i>
                    <h3 style={{marginLeft: "12px"}}>Mã khóa API</h3>
                </div>
                <label>
                    <input className={cx("ConfigMathpix_input_Styles")}></input>
                </label>
            </li>
            
           
          </ul>
        </div>

        
          
      </div>
    </div>


  )
}

export default ConfigfMathpix;




