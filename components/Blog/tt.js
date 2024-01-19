import { DatePicker, Modal, Select, Slider } from "antd";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style1.module.scss";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import EditIcon from "@mui/icons-material/Edit";

const cx = classNames.bind(styles);

const SearchBlog = () => {
    const [open, setOpen] = useState(false);

    const router = useRouter();

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };


    return (
        <>
            <span className="tool-item tool-search" style={{ marginLeft: "890px" }}>
                <EditIcon onClick={showModal}></EditIcon>
            </span>
            <Modal
                open={open}
                onCancel={handleCancel}
                centered
            >
            <textarea name="" id="" cols="60" rows="20" placeholder="insert text here ..." className={cx("teaxt")}></textarea>
            </Modal>
        </>
    );
};

export default SearchBlog;
