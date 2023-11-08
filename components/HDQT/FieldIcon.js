import React from "react";

const FieldIcons = (props) => {
  return (
    <div style={{ height: '30px', width: '27%', margin: '1%', backgroundColor: 'white', border: 'solid 1px black'}}>
      <a href={props.fieldData.aRef} target="_blank">
        <img style={{ height: '100%', width: '100%' }} src={props.fieldData.imgRef}></img>
      </a>
    </div>
  )
}

export default FieldIcons