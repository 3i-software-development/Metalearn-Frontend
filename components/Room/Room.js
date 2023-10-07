import React, { useState } from "react";
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import RoomList from "./RoomList";
import Content from "./Content";

const cx = classNames.bind(styles);

const Room = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    const JoinList = [
        {
            id: 1,
            title: "The day before",
            time: "25-7-2019",
            author: "The boys",
            content: "We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design"
        },
        {
            id: 2,
            author: "Jane Doe",
            title: "offline",
            time: "25-7-2019",
            content: "We've combined the power of the Following feed with the For you feed so there’s one"

        }
        // Add more users as needed
    ]

    const ManageList = [
        {
            id: 1,
            title: "The day before",
            time: "25-7-2019",
            author: "The boys",
            content: "We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design"
        },
        {
            id: 2,
            author: "Jane Doe",
            title: "offline",
            time: "25-7-2019",
            content: "We've combined the power of the Following feed with the For you feed so there’s one"
        },
        {
            id: 3,
            author: "Jane Doe",
            title: "offline",
            time: "25-7-2019",
            content: "We've combined the power of the Following feed with the For you feed so there’s one"
        },
        {
            id: 4,
            author: "Jane Doe",
            title: "offline",
            time: "25-7-2019",
            content: "We've combined the power of the Following feed with the For you feed so there’s one"
        },
        {
            id: 4,
            author: "Jane Doe",
            title: "offline",
            time: "25-7-2019",
            content: "We've combined the power of the Following feed with the For you feed so there’s one"
        },
        // Add more users as needed
    ]



    const handleRoomSelect = (roomId) => {
        setSelectedRoom(roomId);
    }

    return (
        <div className={cx('Room-page')}>

            <div className="Room">
                <RoomList JoinList={JoinList} ManageList={ManageList} handleRoomSelect={handleRoomSelect} />
            </div>
            <div className="Room-content">
                <Content item={selectedRoom} />
            </div>
        </div>
    )
}

export default Room
