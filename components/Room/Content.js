import React, { useState } from "react";
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import Comment from "./Comment";
import UserPopup from "./Popup/UserPopup";

const cx = classNames.bind(styles);

const Content = ({ item }) => {

    const CommentList = [
        {
            id: 1,
            user: "The day before",
            date: "25-7-2019",
            content: "We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design"
        },
        {
            id: 2,
            user: "Jane Doe",
            date: "25-7-2019",
            content: "We've combined the power of the Following feed with the For you feed so there’s one"
        }
    ]
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [newComment, setNewComment] = useState('');
    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    }
    const handleAddComment = () => {
        // Add your logic to handle adding a comment here
        console.log(newComment);
    }
    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };



    return (
        <div className={cx('right-container')}>
            {(item) ? (
                <div>
                    <div className={cx('tool-bar')} style={{ backgroundColor: "#337ab7", height: "40px", display: "flex", justifyContent: "space-between" }}>
                        <div style={{ marginLeft: "25px", fontSize: "25px" }}>
                            <i style={{ marginLeft: "30px" }} class="fa-solid fa-pen"></i>
                            <i style={{ marginLeft: "30px" }} class="fa-solid fa-video"></i>
                            <i style={{ marginLeft: "30px" }} class="fa-solid fa-message"></i>
                            <i style={{ marginLeft: "30px" }} class="fa-solid fa-file-signature"></i>
                        </div>
                        <div style={{ fontSize: "25px", marginRight: "25px" }}>
                            <i style={{ marginRight: "20px" }} class="fa-solid fa-users" onClick={togglePopup}
                            ></i>
                        </div>

                    </div>
                    {isPopupVisible && (
                        <UserPopup />
                    )}
                    <div className={cx('content-container')}>
                        <div>
                            <div className={cx('title')}>{item.title}</div>
                            <div className={cx('time')}>{item.time}</div>
                            <div className={cx('content')}>{item.content}</div>
                            <div className={cx('author')}>{item.author}</div>
                        </div>
                    </div>
                    <div className={cx('comment-container')}>
                        <input
                            type="text"
                            className={cx('comment-input')}
                            placeholder="Thêm bình luận..."
                            value={newComment}
                            onChange={handleCommentChange}
                        />
                        <button className={cx('comment-button')} onClick={handleAddComment}>
                            Thêm
                        </button>
                    </div>
                    <div className="comment-list">
                        {
                            CommentList.map((item, index) => (
                                <div key={index}>
                                    <Comment user={item.user} content={item.content} date={item.date} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default Content
