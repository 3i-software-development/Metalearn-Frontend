import React from "react";
import ContactIcon from "@/components/HDQT/ContactIcon";
import FieldIcons from "@/components/HDQT/FieldIcon";
import BusinessTag from "./BusinessTag";
import { contactDatas, fieldDatas, companyData, backgroundVideo, representative, businessTag } from "@/components/HDQT/data";
import styles from './style.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

const Index = () => {
    return (
        <div>
            <div className={cx("header-container")}>
                <img className={cx("header-img")} src={companyData.imgRef}></img>
            </div>
            <div className={cx("body-container")}>
                <video className={cx("background-video")} src={backgroundVideo.videoRef} loop autoPlay playsInline muted></video>
                <div className={cx("info-container")}>
                    <div className={cx("person-img-container")}>
                        <img className={cx("person-img")} src={representative.imgRef} />
                    </div>
                    <div className={cx("name-container")}>
                        <h1 className={cx("name")}>{representative.name}</h1>
                    </div>
                    <div className={cx("rep-container")}>
                        <h1 className={cx("rep")}>{representative.position}</h1>
                    </div>
                    <div className={cx("contacts-container")}>
                        {
                            contactDatas.map((item, index) => {
                                return (

                                    <ContactIcon key={index} cx={cx} contactData={item} index={index}></ContactIcon>

                                )
                            })
                        }
                    </div>
                    <div className={cx("line")}></div>
                    <div className={cx("fields-container")}>
                        {
                            fieldDatas.map((item, index) => {
                                return (
                                    <FieldIcons key={index} cx={cx} fieldData={item}></FieldIcons>
                                )
                            })
                        }
                    </div>
                    <div className={cx("tags-container")}>
                        {
                            businessTag.map((item, index) => {
                                return (
                                    <BusinessTag key={index} cx={cx} name={item.name} ></BusinessTag>
                                )
                            })
                        }
                    </div>
                    <a className={cx("c-company")} href={companyData.aRef} target="_blank" >
                        <div className={cx("c-company-text")}>© {companyData.name}</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Index