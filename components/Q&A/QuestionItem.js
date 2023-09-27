import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const QuestionItem = ({ group }) => {
    return (
        <div className={cx("group-content")}>
            <h3>Subject: {group.subject} </h3>
            {group.questions.map((question, questionIndex) => {
                return (
                    <div key={questionIndex} className={cx('question')}>
                        <div className={cx('question-content')}>
                            <p>Question: {question.content}</p>
                        </div>
                        <div>
                            {question.comments.map((comment, commentIndex) => {
                                return (
                                    <div key={commentIndex} className={cx('comment-content')}>
                                        <p>{comment.content}</p>
                                    </div>
                                );
                            })}

                        </div>
                        {/* Add the comment input here */}
                        <div className={cx("comment-input")}>
                            <input type="text" placeholder="Add a comment" />
                            {/* You can also add a button to submit the comment */}
                            <button>Submit</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default QuestionItem;
