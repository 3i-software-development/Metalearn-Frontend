//component Mission

import React, { useState, useEffect } from "react";
import { GetListJobCardLms, GetListStatusCardJoB } from "@/pages/api/CallAPI"


const CardStatusJob = () => {
    const [listStatusCardJoB, setListGetStatusCardJob] = useState([]);
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
    return (
        <div>
            {
                listStatusCardJoB ? listStatusCardJoB.map((itemStatus, indexStatus) => {
                    return (
                        <div key={indexStatus}>
                            {itemStatus.Code}
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

const Mission = () => {

    const [listGetListJobCardLms, setListGetListJobCardLms] = useState([]);
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
    return (
        <div>
            Mission
            {
                listGetListJobCardLms ? listGetListJobCardLms.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>
                                {item.LmsTaskCode} : {item.LmsTaskName}
                            </div>
                            <div>
                                Người giao : {item.AssignName}
                            </div>
                            <div>
                                {item.BeginTime}
                            </div>
                            <CardStatusJob />
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default Mission;