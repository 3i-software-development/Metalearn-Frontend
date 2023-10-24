import React, { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import { GetListShiftLog } from "@/pages/api/CallAPI01"

const Result = () => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await GetListShiftLog();
          console.log(data); // Xử lý dữ liệu nhận được từ API ở đây
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {/* Nội dung component */}
      </div>
    );
  };
  
  export default Result