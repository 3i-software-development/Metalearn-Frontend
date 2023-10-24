import React, { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import { GetUsers } from "@/pages/api/CallAPI01"

const Result03 = () => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await GetUsers();
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
  
  export default Result03