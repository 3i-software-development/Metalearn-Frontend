import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SettingFontText.module.scss"

const cx = classNames.bind(styles);
function SettingFontText() {

  const [font, setFont] = useState('default');
    const [itemStates, setItemStates] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7: false,
        question8: false,
    })
    const handleItemClick = (itemName) => {
      // Khi nhấp vào một phần tử, chỉ cập nhật trạng thái của phần tử đó
      setItemStates({
          ...itemStates,
          [itemName]: !itemStates[itemName],
      });
    };

  const handleFontChange = (event) => {
    setFont(event.target.value); // Cập nhật giá trị font khi người dùng chọn
  };

   
    return (  

        <div>
            <h1>Setting Font Text</h1>

            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
                <i class="fa-solid fa-folder"></i>
                <h2 style={{marginLeft: "20px", marginRight: "20px"}}>Menu trái</h2>
                <i className={`fa-solid ${itemStates.question1 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                    onClick={() => handleItemClick("question1")}>        
                </i>     
            </div>

            {itemStates.question1 && (
              <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                <ul style={{listStyle: "none"}}>
                  <li>
                    <div style={{display: "flex"}}>

                      <div style={{display: "flex", alignItems: "center"}}>
                        <h4>Kiểu phông</h4>
                        <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                          <select value={font} onChange={handleFontChange} style={{marginBottom: "15px"}}>
                            <option value="default">Mặc định</option>
                            <option value="timesNewRoman">Times New Roman</option>
                            <option value="quicksand">Quicksand</option>
                            <option value="vt323">VT323</option>
                            <option value="incionsolate">Incionsolate</option>
                            <option value="paccico">Paccico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div style={{display: "flex"}}>
                      <h4>Kích thước phong chữ</h4>
                      <input style={{marginLeft: "12px", borderRadius: "5px"}} placeholder="17"></input>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Màu phông chữ</h4>
                      <input type="color"></input>
                    </div>
                  </li>
                </ul>      
              </div>
              )}

            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
              <i class="fa-solid fa-folder"></i>
              <h2 style={{marginLeft: "20px", marginRight: "20px"}}>Tiêu để</h2>
              <i className={`fa-solid ${itemStates.question2 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                onClick={() => handleItemClick("question2")}>        
              </i>     
            </div>
            
            {itemStates.question2 && (
              <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                <ul style={{listStyle: "none"}}>
                  <li>
                    <div style={{display: "flex"}}>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <h4>Kiểu phông</h4>
                        <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                          <select value={font} onChange={handleFontChange} style={{marginBottom: "15px"}}>
                            <option value="default">Mặc định</option>
                            <option value="timesNewRoman">Times New Roman</option>
                            <option value="quicksand">Quicksand</option>
                            <option value="vt323">VT323</option>
                            <option value="incionsolate">Incionsolate</option>
                            <option value="paccico">Paccico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div style={{display: "flex"}}>
                      <h4>Kích thước phong chữ</h4>
                      <input style={{marginLeft: "12px", borderRadius: "5px"}} placeholder="17"></input>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Màu phông chữ</h4>
                      <input type="color"></input>
                    </div>
                  </li>
                </ul>      
              </div>
            )}
            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
              <i class="fa-solid fa-folder"></i>
              <h2 style={{marginLeft: "20px", marginRight: "20px"}}>Tho6gn báo</h2>
              <i className={`fa-solid ${itemStates.question3 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                  onClick={() => handleItemClick("question3")}>        
              </i>     
            </div>
            
            {itemStates.question3 && (
              <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                <ul style={{listStyle: "none"}}>
                  <li>
                    <div style={{display: "flex"}}>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <h4>Kiểu phông</h4>
                        <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                          <select value={font} onChange={handleFontChange} style={{marginBottom: "15px"}}>
                            <option value="default">Mặc định</option>
                            <option value="timesNewRoman">Times New Roman</option>
                            <option value="quicksand">Quicksand</option>
                            <option value="vt323">VT323</option>
                            <option value="incionsolate">Incionsolate</option>
                            <option value="paccico">Paccico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div style={{display: "flex"}}>
                      <h4>Kích thước phong chữ</h4>
                      <input style={{marginLeft: "12px", borderRadius: "5px"}} placeholder="17"></input>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Màu phông chữ</h4>
                      <input type="color"></input>
                    </div>
                  </li>
                </ul>      
              </div>
              )}

            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
              <i class="fa-solid fa-folder"></i>
              <h2 style={{marginLeft: "20px", marginRight: "20px"}}>Điều khiển</h2>
              <i className={`fa-solid ${itemStates.question4 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                  onClick={() => handleItemClick("question4")}>        
              </i>     
            </div>
            
            {itemStates.question4 && (
              <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                <ul style={{listStyle: "none"}}>
                  <li>
                    <div style={{display: "flex"}}>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <h4>Kiểu phông</h4>
                        <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                          <select value={font} onChange={handleFontChange} style={{marginBottom: "15px"}}>
                            <option value="default">Mặc định</option>
                            <option value="timesNewRoman">Times New Roman</option>
                            <option value="quicksand">Quicksand</option>
                            <option value="vt323">VT323</option>
                            <option value="incionsolate">Incionsolate</option>
                            <option value="paccico">Paccico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div style={{display: "flex"}}>
                      <h4>Kích thước phong chữ</h4>
                      <input style={{marginLeft: "12px", borderRadius: "5px"}} placeholder="17"></input>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Màu phông chữ</h4>
                      <input type="color"></input>
                    </div>
                  </li>
                </ul>      
              </div>
              )}

            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
              <i class="fa-solid fa-folder"></i>
              <h2 style={{marginLeft: "20px", marginRight: "20px"}}>Nội dung chữ</h2>
              <i className={`fa-solid ${itemStates.question5 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                  onClick={() => handleItemClick("question5")}>        
              </i>     
            </div>
            
            {itemStates.question5 && (
              <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                <ul style={{listStyle: "none"}}>
                  <li>
                    <div style={{display: "flex"}}>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <h4>Kiểu phông</h4>
                        <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                          <select value={font} onChange={handleFontChange} style={{marginBottom: "15px"}}>
                            <option value="default">Mặc định</option>
                            <option value="timesNewRoman">Times New Roman</option>
                            <option value="quicksand">Quicksand</option>
                            <option value="vt323">VT323</option>
                            <option value="incionsolate">Incionsolate</option>
                            <option value="paccico">Paccico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div style={{display: "flex"}}>
                      <h4>Kích thước phong chữ</h4>
                      <input style={{marginLeft: "12px", borderRadius: "5px"}} placeholder="17"></input>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Màu phông chữ</h4>
                      <input type="color"></input>
                    </div>
                  </li>
                </ul>      
              </div>
            )}

            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
              <i class="fa-solid fa-folder"></i>
              <h2 style={{marginLeft: "20px", marginRight: "20px"}}>Nội dung control</h2>
              <i className={`fa-solid ${itemStates.question6 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                  onClick={() => handleItemClick("question6")}>        
              </i>     
            </div>
            
            {itemStates.question6 && (
              <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                <ul style={{listStyle: "none"}}>
                  <li>
                    <div style={{display: "flex"}}>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <h4>Kiểu phông</h4>
                        <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                          <select value={font} onChange={handleFontChange} style={{marginBottom: "15px"}}>
                            <option value="default">Mặc định</option>
                            <option value="timesNewRoman">Times New Roman</option>
                            <option value="quicksand">Quicksand</option>
                            <option value="vt323">VT323</option>
                            <option value="incionsolate">Incionsolate</option>
                            <option value="paccico">Paccico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div style={{display: "flex"}}>
                      <h4>Kích thước phong chữ</h4>
                      <input style={{marginLeft: "12px", borderRadius: "5px"}} placeholder="17"></input>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Màu phông chữ</h4>
                      <input type="color"></input>
                    </div>
                  </li>
                </ul>      
              </div>
            )}

            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
              <i class="fa-solid fa-folder"></i>
              <h2 style={{marginLeft: "20px", marginRight: "20px"}}>Nội dung kiểu cây</h2>
              <i className={`fa-solid ${itemStates.question7 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                  onClick={() => handleItemClick("question7")}>        
              </i>     
            </div>
            
            {itemStates.question7 && (
              <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                <ul style={{listStyle: "none"}}>
                  <li>
                    <div style={{display: "flex"}}>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <h4>Kiểu phông</h4>
                        <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                          <select value={font} onChange={handleFontChange} style={{marginBottom: "15px"}}>
                            <option value="default">Mặc định</option>
                            <option value="timesNewRoman">Times New Roman</option>
                            <option value="quicksand">Quicksand</option>
                            <option value="vt323">VT323</option>
                            <option value="incionsolate">Incionsolate</option>
                            <option value="paccico">Paccico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div style={{display: "flex"}}>
                      <h4>Kích thước phong chữ</h4>
                      <input style={{marginLeft: "12px", borderRadius: "5px"}} placeholder="17"></input>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Màu phông chữ</h4>
                      <input type="color"></input>
                    </div>
                  </li>
                </ul>      
              </div>
              )}

            <div style={{display: "flex", alignItems: "center", position: "relative"}}>
              <i class="fa-solid fa-folder"></i>
              <h2 style={{marginLeft: "20px", marginRight: "20px"}}>Giao diện bài viết</h2>
              <i className={`fa-solid ${itemStates.question8 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                  onClick={() => handleItemClick("question8")}>        
              </i>     
            </div>
            
            {itemStates.question8 && (
              <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                <ul style={{listStyle: "none"}}>
                  <li>
                    <div style={{display: "flex"}}>
                      <div style={{display: "flex", alignItems: "center"}}>
                        <h4>Kiểu phông</h4>
                        <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                          <select value={font} onChange={handleFontChange} style={{marginBottom: "15px"}}>
                            <option value="default">Mặc định</option>
                            <option value="timesNewRoman">Times New Roman</option>
                            <option value="quicksand">Quicksand</option>
                            <option value="vt323">VT323</option>
                            <option value="incionsolate">Incionsolate</option>
                            <option value="paccico">Paccico</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div style={{display: "flex"}}>
                      <h4>Kích thước phong chữ</h4>
                      <input style={{marginLeft: "12px", borderRadius: "5px"}} placeholder="17"></input>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Màu phông chữ</h4>
                      <input type="color"></input>
                    </div>
                  </li>
                </ul>      
              </div>
            )}
  
        </div>
    );
}

export default SettingFontText;