import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SettingFontText.module.scss"
const cx = classNames.bind(styles);
function SettingFontText() {

  const pages = [
    {
      name: "Menu trái",
    },
    {
      name: "Tiêu đề",
    },
    {
      name: "Thông báo",
    },
    {
      name: "Điều khiển",
    },
    {
      name: "Nội dung chữ",
    },
    {
      name: "Nội dung control",
    },
    {
      name: "Nội dung kiểu cây",
    },
    {
      name: "Giao diện bài viết",
    }
  ];

  const [saveSetting, setSaveSetting] = useState({
    "Menu trái": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Tiêu đề": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Thông báo": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Điều khiển": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Nội dung chữ": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Nội dung control": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Nội dung kiểu cây": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Giao diện bài viết": {
      style: "default",
      size: "17",
      color: "#000000"
    }
  });

  const [itemStates, setItemStates] = useState({
    "Menu trái": false,
    "Tiêu đề": false,
    "Thông báo": false,
    "Điều khiển": false,
    "Nội dung chữ": false,
    "Nội dung control": false,
    "Nội dung kiểu cây": false,
    "Giao diện bài viết": false,
  });

  useEffect(() => {
    // Load the settings from local storage
    const saveSetting = localStorage.getItem("saveSetting");
    if (saveSetting) {
      setSaveSetting(JSON.parse(saveSetting));
      console.log(saveSetting)
    }
  }, []);

  const handleItemClick = (itemName) => {
    // Khi nhấp vào một phần tử, chỉ cập nhật trạng thái của phần tử đó
    setItemStates({
      ...itemStates,
      [itemName]: !itemStates[itemName],
    });
  };

  const handleFontChange = (event, itemName) => {
    const newFont = event.target.value;
    setSaveSetting((prevSaveSetting) => ({
      ...prevSaveSetting,
      [itemName]: {
        ...prevSaveSetting[itemName],
        style: newFont,
      },
    }));
  };

  const handleFontSizeChange = (event, itemName) => {
    const newSize = event.target.value;
    setSaveSetting((prevSaveSetting) => ({
      ...prevSaveSetting,
      [itemName]: {
        ...prevSaveSetting[itemName],
        size: newSize,
      },
    }));
  };

  const handleColorChange = (event, itemName) => {
    const newColor = event.target.value;
    setSaveSetting((prevSaveSetting) => ({
      ...prevSaveSetting,
      [itemName]: {
        ...prevSaveSetting[itemName],
        color: newColor,
      },
    }));
  };

  const handleSave = () => {
    // Lưu setting vào localStorage
    localStorage.setItem("saveSetting", JSON.stringify(saveSetting));
    console.log(saveSetting);
  };




  return (

    <div>
      <h1>Setting Font Text</h1>
      {
        pages.map((page, index) => (
          <div key={index}>
            <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
              <i class="fa-solid fa-folder"></i>
              <h2 className={cx("hover-item")} style={{ marginLeft: "20px", marginRight: "20px" }}>{page.name}</h2>
              <i className={`fa-solid ${itemStates.question1 ? 'fa-arrow-down' : 'fa-arrow-right'}`}
                onClick={() => handleItemClick(page.name)}>
              </i>
            </div>
            {
              itemStates[page.name] && (
                <div style={{ marginTop: "17px", marginLeft: "50px" }}>
                  <ul style={{ listStyle: "none" }}>
                    
                    <li>
                      <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h4 className={cx("hover-item")}>Kiểu phông</h4>
                          <div style={{ marginTop: '17px', marginLeft: '50px' }}>
                            <select value={saveSetting[page.name].style} onChange={(event) => handleFontChange(event, page.name)} style={{ marginBottom: "15px" }}>
                              <option value="default ">Mặc định</option>
                              <option value="Times New Roman">Times New Roman</option>
                              <option value='Quicksand'>Quicksand</option>
                              <option value='VT323'>VT323</option>
                              <option value="incionsolate">Incionsolate</option>
                              <option value="paccico">Paccico</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div style={{ display: "flex" }}>
                        <h4 className={cx("hover-item")}>Kích thước phong chữ</h4>
                        <input
                          className={cx('font-size-change')}
                          style={{ marginLeft: "12px", borderRadius: "5px" }}
                          type="number"
                          placeholder="17"
                          value={saveSetting[page.name].size}
                          onChange={(event) => {
                            const newSize = Math.min(Math.max(event.target.value, 1), 60);
                            setSaveSetting((prevSaveSetting) => ({
                              ...prevSaveSetting,
                              [page.name]: {
                                ...prevSaveSetting[page.name],
                                size: newSize,
                              },
                            }));
                          }}
                        />
                      </div>
                    </li>

                    <li>
                      <div>
                        <h4 className={cx("hover-item")}>Màu phông chữ</h4>
                        <input
                          className={cx('color-font-change')}
                          type="color"
                          value={saveSetting[page.name].color}
                          onChange={(event) => handleColorChange(event, page.name)}
                        ></input>
                      </div>
                    </li>

                  </ul>
                </div>
              )
            }
          </div>
        ))
      }

      
      <button className={cx("button-item-save")} onClick={() => handleSave()}>Save</button>



    </div>
  );
}

export default SettingFontText;
