import React from "react";

const ContactIcon = (props) => {
  if (props.index == 2) {
    return (
      <div style={{ width: '25%', height: '6%', marginTop: '-46px', marginBottom: 20, zIndex: '2', overflow: "hidden", marginRight: '10px' }}>
        <img src={props.contactData.imgRef} style={{ width: '100%', position: 'relative' }}></img>
      </div >
    )
  } else {
    return (
      <div style={{ marginRight: '10px', width: '14%', height: '14%', backgroundColor: 'white', borderWidth: '1px', borderRadius: '4px', borderStyle: 'solid', borderColor: 'rgb(0, 0, 0)', boxShadow: 'rgb(0, 128, 55) 2px 2px 4px 0px' }}>
        <a href={props.contactData.aRef} target="_blank">
          <img style={{ width: '100%', height: '100%' }} src={props.contactData.imgRef}></img>
        </a>
      </div>
    )
  }
}

export default ContactIcon