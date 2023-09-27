import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);
function MessageContainer({ contact }) {
    return (
        <div className={cx('message-container')}>
            {contact.messages.map((message) => (
                <div key={message.id} className="message">
                    <div className={cx('message-name')}>{message.name}</div>
                    <div className={cx('message-content')}>{message.content}</div>
                </div>
            ))}
        </div>
    );
}

export default MessageContainer;
