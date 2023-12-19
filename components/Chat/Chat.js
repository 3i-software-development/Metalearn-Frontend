import React, { useState } from "react";
import ContactList from "./ContactList";
import MessageContainer from "./MessageContainer";
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

const Chat = () => {
    const message1 = {
        id: 1,
        content: 'Hi',
        name: "Nguyễn Văn A"
    }
    const message2 = {
        id: 2,
        content: 'Hello',
        name: "Nguyễn Văn B"
    }
    const fakeData = [
        {
            id: 1,
            name: 'Nguyễn Văn  A',
            messages: [
                message1, message2, message1, message2, message1, message2,
                message1, message2, message1, message2, message1, message2,
                message1, message2, message1, message2, message1, message2,
                message1, message2, message1, message2, message1, message2,
                message1, message2, message1, message2, message1, message2,
                message1, message2, message1, message2, message1, message2,
                message1, message2, message1, message2, message1, message2,
                message1, message2, message1, message2, message1, message2,
                message1, message2, message1, message2, message1, message2,
            ]
        },
        {
            id: 2,
            name: 'Nguyễn Văn B',
            messages: [
                message1, message2, message1, message2, message1, message2,
            ]
        },
        { id: 3, name: "Nguyễn Văn C", messages: [] },
        { id: 4, name: "Nguyễn Văn D", messages: [] },
        { id: 5, name: "Nguyễn Văn E", messages: [] },
        { id: 6, name: "Nguyễn Văn F", messages: [] },
        { id: 7, name: "Nguyễn Văn G", messages: [] },
        { id: 8, name: "Nguyễn Văn H", messages: [] },
        { id: 9, name: "Nguyễn Văn I", messages: [] },
        { id: 10, name: "Nguyễn Văn K", messages: [] },
        { id: 11, name: "Nguyễn Văn L", messages: [] },
        { id: 12, name: "Nguyễn Văn M", messages: [] },
        { id: 13, name: "Nguyễn Văn N", messages: [] },
        { id: 14, name: "Nguyễn Văn O", messages: [] },
        { id: 15, name: "Nguyễn Văn P", messages: [] },
        { id: 16, name: "Nguyễn Văn Q", messages: [] },
        { id: 17, name: "Nguyễn Văn R", messages: [] },
        { id: 18, name: "Nguyễn Văn S", messages: [] },
        { id: 19, name: "Nguyễn Văn T", messages: [] },
        { id: 20, name: "Nguyễn Văn U", messages: [] },
        { id: 21, name: "Nguyễn Văn V", messages: [] },
        { id: 22, name: "Nguyễn Văn W", messages: [] },
    ];

    const [contactSelected, setContactSelected] = useState(fakeData[0]);

    const handleContactClick = (contact) => {
        setContactSelected(contact);
    };

    return (
        <div className={cx('chat-container')}>
            <ContactList contacts={fakeData} handleContactClick={handleContactClick} contactSelected={contactSelected} />
            <div className={cx('right-chat-container')}>
                <MessageContainer contact={contactSelected} />
                <div className={cx('message-input-container')}>
                    <input className={cx('message-input')} placeholder="Type a message" />
                    <button className={cx('send-button')}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
