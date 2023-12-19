import React, { useState, useEffect } from "react";
import { GetListJobCardLms, GetListStatusCardJoB } from "@/pages/api/CallAPI"
import styles from "./ConfigGoogle.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Missio02 from '../Mission02/Mission02'
import index from "@/pages/blog";



const cx = classNames.bind(styles);

const IconRender = ({StatusCode}) => {
    switch (StatusCode) {
      case 'TRASH':
        return <i className="fa-solid fa-trash"></i>;
      case 'DONE':
        return <i class="fa-solid fa-check"></i>;
      case 'CLOSED':
        return <i class="fa-solid fa-x"></i>;
      case 'CANCELED':
        return <i className="fa-solid fa-canceled"></i>;
      case 'CREATED':
        return <i class="fa-solid fa-plus"></i>;
      case 'START':
        return <i class="fa-solid fa-play"></i>;
      default:
        return null; // Mặc định trường hợp
    }
  };  

const CardStatusJob = () => {
    const [listStatusCardJoB, setListGetStatusCardJob] = useState([]);
    const [btnact, setBtnact] = useState(0);
    
    const getStatusCardJobData = async () => {
        try {
            const res = await GetListStatusCardJoB();
            setListGetStatusCardJob(res.Object);
        } catch (error) {
            // Handle any errors here
        }
    }
    useEffect(() => {
        getStatusCardJobData();
    }, []);
    const reversedList = listStatusCardJoB.slice().reverse();
    return (
        <div className={cx("hhhh")}>

            {
                listStatusCardJoB ? listStatusCardJoB.slice().reverse().map((itemStatus, indexStatus) => {
                    return (

                        <div key={indexStatus}>
                            
                            <IconRender StatusCode = {itemStatus.Code} />
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

const Mission = () => {

    const [listGetListJobCardLms, setListGetListJobCardLms] = useState([]);
    const [selected, setSelected] = useState(listGetListJobCardLms[0]);





    const handleItemClick = (itemName) => {
        setSelected(listGetListJobCardLms[itemName])
        console.log(itemName)
      };
    

    async function fetchData() {
        try {
            const res = await GetListJobCardLms();
            setListGetListJobCardLms(res.Object.data);
            
        } catch (error) {
            // Handle any errors here
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(()=> {
        console.log(listGetListJobCardLms)
    },[listGetListJobCardLms])
    useEffect(()=> {
        console.log(selected)
    },[selected])
    return (
        <div className={cx("ghjk")}>
            <div className={cx("lkjh")}>
                <h1>Mission</h1>
                {
                    listGetListJobCardLms ? listGetListJobCardLms.map((item, index) => {
                        return (

                            <div onClick={() => handleItemClick(index)} className={cx("hhh", "split-rows")} key={index}>


                                <div className={cx("poiu")}>
                                    <h2>
                                        {item.LmsTaskCode} : {item.LmsTaskName}                         
                                    </h2>

                                    <div style={{display: "flex"}}>
                                        <h3 className={cx("Mission_01")}>Mời tạo</h3>
                                        <h3 className={cx("Mission_02")}>Không đặt thời hạn</h3>
                                    </div>
                                </div>

                                <div>
                                    <h4 className={cx("kkkl4")}>
                                        Người giao : {item.AssignName}
                                    </h4>
                                </div>

                                <div>
                                    <h5 className={cx("kkkl5")}>
                                        {item.BeginTime}
                                    </h5>
                                </div>
                                <CardStatusJob />
                            </div>
                        )
                    }) : null
            }
            </div>

            <div className={cx("jjjj")}>
            {/* <h2 style={{fontSize: "35px"}}>{selected.LmsTaskName}</h2> */}
                <Missio02 selected={selected} />
    
            </div>
        </div>
    )
}

export default Mission;