import React from "react";

const BusinessTag = (props) => {
  return (
    <div className={props.cx("tag")}>
      <h1 className={props.cx("tag-font")}>
        {props.name}
      </h1>
    </div>
  )
}

export default BusinessTag