import React from "react";
import classNames from "classnames/bind";
import MyExam from "../Collection/MyExam";

const Right = ({item}) => {
    return (
        <div>
            {
                (item)?(
                    <div>
                        <MyExam/>
                    </div>
                ) : (
                    <div>
                    </div>
                )
            }
        </div>
    )
}

export default Right