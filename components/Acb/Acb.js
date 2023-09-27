import React, { useState } from "react";
import classNames from "classnames/bind";
import Left from './Left'
import Right from './Right'


const Acb = () => {
    const data = [
        {
            id: 1,
            image: 'https://c.files.bbci.co.uk/18145/production/_113692689_quiz_1.png',
            total_quiz: 1,
            total_exam: 2,
            total_question: 4,
            total_file: 0
        },
    ]
    const [selectItem, setSelectItem] = useState(null)
    const handleSelectItem = (item) => {
        setSelectItem(item)
    }

    return (
        <div>
            <Left data={data} handleSelectItem={handleSelectItem} />
            <Right item={selectItem} />
        </div>
    );
}

export default Acb;