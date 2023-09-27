import React from "react";
import classNames from "classnames/bind";
import CollectionItem from "../Collection/CollectionItem";
import CollectionMain from "../Collection/CollectionMain";

const Left = ({ data, handleSelectItem }) => {
    const handleClick = (item) => {
        handleSelectItem(item)
    }
    return (
        <div>
            <div>Left</div>
            <div>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} onClick={() => handleClick(item)}>
                                <CollectionMain/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Left