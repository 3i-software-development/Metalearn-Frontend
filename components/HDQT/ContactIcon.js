import React from "react";

const ContactIcon = (props) => {
  if (props.index == 2) {
    return (
      <div className={props.cx("qr-con")}>
        <img className={props.cx("qr")} src={props.contactData.imgRef}></img>
      </div >
    )
  } else {
    return (
      <div className={props.cx("contact")}>
        <a href={props.contactData.aRef} target="_blank">
          <img className={props.cx("img")} src={props.contactData.imgRef}></img>
        </a>
      </div>
    )
  }
}

export default ContactIcon