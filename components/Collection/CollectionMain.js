import React from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import CollectionItem from "./CollectionItem";

const cx = classNames.bind(style);

const CollectionMain = () => {
    const mainData = [
        {
            id: 1,
            image: 'https://c.files.bbci.co.uk/18145/production/_113692689_quiz_1.png',
            total_quiz: 1,
            total_exam: 2,
            total_question: 4,
            total_file: 0
        },
    ];

    return (
        <div className={cx('main-section')}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <p style={{marginTop: '7px', marginRight: '5px'}}><i class="fa-solid fa-thumbtack"></i></p>
                <h2>Ghim dữ liệu</h2>
            </div>
            <div className={cx("main-list")}>
                {mainData.map((item) => (
                    <CollectionItem key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default CollectionMain;