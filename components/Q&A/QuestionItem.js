import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const QuestionItem = ({ group }) => {
    const [showCommentInput, setShowCommentInput] = useState([]);
    const [showComments, setShowComments] = useState([]);

    const toggleCommentInput = (questionIndex) => {
        // Tạo một bản sao mới của mảng showCommentInput để thay đổi trạng thái
        const updatedShowCommentInput = [...showCommentInput];
        // Nếu showCommentInput[questionIndex] đã tồn tại, đảo trạng thái. Ngược lại, thiết lập true.
        updatedShowCommentInput[questionIndex] = !updatedShowCommentInput[questionIndex];
        setShowCommentInput(updatedShowCommentInput);
    };

    const toggleShowComments = (questionIndex) => {
        // Tạo một bản sao mới của mảng showComments để thay đổi trạng thái
        const updatedShowComments = [...showComments];
        // Nếu showComments[questionIndex] đã tồn tại, đảo trạng thái. Ngược lại, thiết lập true.
        updatedShowComments[questionIndex] = !updatedShowComments[questionIndex];
        setShowComments(updatedShowComments);
    };

    return (
        <div className={cx("group-content")}>
            {group.questions.map((question, questionIndex) => {
                return (
                    <div key={questionIndex} className={cx('question')}>
                        <div className={cx('question-content')}>
                            <p>Question: {question.content}</p>
                        </div>
                        {/* Show Comment Button */}
                        <button onClick={() => toggleShowComments(questionIndex)}>
                            {showComments[questionIndex] ? "Hide Comments" : "Show Comments"}
                        </button>
                        {/* Comments */}
                        {showComments[questionIndex] && (
                            <div>
                                {question.comments.map((comment, commentIndex) => {
                                    return (
                                        <div key={commentIndex}>
                                            <div className={cx('comment-name')}>
                                                {comment.name}
                                            </div>
                                            <p></p>
                                            <div className={cx('comment-content')}>
                                                {comment.content}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        {/* Add the comment input here */}
                        {showCommentInput[questionIndex] && (
                            <div className={cx("comment-input")}>
                                <input type="text" placeholder="Add a comment" />
                                {/* You can also add a button to submit the comment */}
                                <button>Submit</button>
                            </div>
                        )}
                        {/* Toggle comment input */}
                        <div className={cx('tool-bar')} style={{ backgroundColor: "#CCFFFF", height: "40px", display: "flex", justifyContent: "space-between" }}>
                            <div style={{ marginLeft: "25px", fontSize: "25px" }}>
                                <i style={{ marginLeft: "30px" }} className="far fa-comment" onClick={() => toggleCommentInput(questionIndex)}></i>
                                <i style={{ marginLeft: "30px" }} className="far fa-thumbs-up"></i>
                                <i style={{ marginLeft: "30px" }} className="far fa-thumbs-down"></i>
                                <i style={{ marginLeft: "30px" }} className="fas fa-thumbtack"></i>
                            </div>
                            <div style={{ fontSize: "25px", marginRight: "25px" }}>
                                <i style={{ marginRight: "20px" }} className="far fa-flag"></i>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default QuestionItem;
