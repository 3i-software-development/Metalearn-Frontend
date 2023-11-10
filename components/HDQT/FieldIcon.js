import React from "react";

const FieldIcons = (props) => {
  return (
    <div className={props.cx("field")}>
      <a href={props.fieldData.aRef} target="_blank">
        <img className={props.cx("img")} src={props.fieldData.imgRef}></img>
      </a>
    </div>
  )
}

export default FieldIcons