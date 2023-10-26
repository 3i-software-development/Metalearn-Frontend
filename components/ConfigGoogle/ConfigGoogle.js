import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ConfigGoogle.module.scss";


const cx = classNames.bind(styles);


function ConfigGoogle() {

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

      <h2 className={cx("ConfigGoogle-Title")}>Cấu Hình Google</h2>

      <div className={cx("ConfigGoogle")}>

        <div className={cx("ConfigGoogle-01")}>
          
          <ul className={cx("ConfigGoogle-Ul")}>
            <li>

              <div className={cx("flex-item")}> 
                  
                  <h3 className={cx("ConfigGoogle-Title-one")} onClick={() => handleItemClick("question1")}>Dịch vụ API</h3>
              </div>

              <label className={cx("ConfigGoogle-Label")}>
                <input className={cx("ConfigGoogle_Input_Styles")}></input>
                
                <i className={`ConfigGoogle-Icon fa-solid ${itemStates.question1 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                    style={{ position: "absolute", right: "40px", marginTop: "12px", cursor: "pointer" }}
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
                  
                  <h3 className={cx("ConfigGoogle-Title-one")} >Mã tài khoản</h3>
                </div>
                <label>
                  <input className={cx("ConfigGoogle_Input_Styles")}></input>
                </label>
            </li>

            <li>
                <div className={cx("flex-item")}>
                    
                    <h3 className={cx("ConfigGoogle-Title-one")} >Tên tài khoản</h3>
                </div>
                <label>
                    <input className={cx("ConfigGoogle_Input_Styles")}></input>
                </label>
            </li>

            <li>
                <div className={cx("flex-item")}>
                    
                    <h3 className={cx("ConfigGoogle-Title-one")} >Thư điện tử</h3>
                </div>

                <label>
                    <input className={cx("ConfigGoogle_Input_Styles")}></input>
                </label>
            </li>

            <li>
                <div className={cx("flex-item")}>
                    {/* <i className="fa-solid fa-circle-half-stroke"></i> */}
                    <h3 className={cx("ConfigGoogle-Title-one")} onClick={() => handleItemClick("question2")}>Loại</h3>
                </div>
              <label className={cx("ConfigGoogle-Label")}>
                  <input className={cx("ConfigGoogle_Input_Styles")}/>

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
          </ul>
        </div>



        <div className={cx("ConfigGoogle-02")}>
              <div className={cx("ConfigGoogle_Item")}>
                  <i class="fa-brands fa-google"></i>
                  <div>
                      <h4>3. III.Pontus.com</h4>
                      <p>Chọn mặc định     22/07/2022</p>
                  </div>
                  <i class="fa-solid fa-trash-can"></i>
              </div>

              <div className={cx("ConfigGoogle_Item")}>
                  <i style={{color: "green"}} class="fa-brands fa-google"></i>
                  <div>
                        <h4 style={{color: "green"}}>3. III.Erldarus.com</h4>
                        <p>Chọn mặc định     22/07/2022</p>
                  </div>
                  <i class="fa-solid fa-trash-can"></i>
              </div>

              <div className={cx("ConfigGoogle_Item")}>
                  <i style={{color: "red"}} class="fa-brands fa-google"></i>
                  <div>
                        <h4 style={{color: "red"}}>3. III.Lepus.com</h4>
                        <p>Chọn mặc định     22/07/2022</p>
                  </div>
                    <i class="fa-solid fa-trash-can"></i>
              </div>

              <div className={cx("ConfigGoogle_Item")}>
                  <i style={{color: "blue"}} class="fa-brands fa-google"></i>
                  <div>
                        <h4 style={{color: "blue"}}>3. III.Sagittarius.com</h4>
                        <p>Chọn mặc định     22/07/2022</p>
                  </div>
                    <i class="fa-solid fa-trash-can"></i>
              </div>

              <div className={cx("ConfigGoogle_Item")}>
                  <i style={{color: "pink"}} class="fa-brands fa-google"></i>
                  <div>
                      <h4 style={{color: "pink"}}>3. III.Phuongtest.com</h4>
                      <p>Mặc định     22/07/2022</p>
                  </div>
                  <i class="fa-solid fa-trash-can"></i>
              </div>
        </div>
            
      </div>
    </div>


  )
}

export default ConfigGoogle;




