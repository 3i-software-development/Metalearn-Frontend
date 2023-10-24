import axios from "axios";
import { useMutation, useQuery } from "react-query";


// Của phần "Kết Quả" nằm trong mục "Nhiệm Vụ"
export const GetListShiftLog = async (teacher, student) => {
    const requestData = new FormData();

    requestData.append('userId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
    requestData.append('ObjId', '');
    requestData.append('UserType', 10);
  
    try {
      const response = await axios.post(
        'https://admin.metalearn.vn/MobileLogin/GetListShiftLog',
        requestData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const GetListItemChecks = async (teacher, student) => {
    const requestData = new FormData();

    requestData.append('userId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
    requestData.append('ObjId', '');
    requestData.append('UserType', 10);
  
    try {
      const response = await axios.post(
        'https://admin.metalearn.vn/MobileLogin/GetListItemChecks',
        requestData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export const GetUsers = async (teacher, student) => {
    const requestData = new FormData();

    requestData.append('userId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
    requestData.append('ObjId', '');
    requestData.append('UserType', 10);
  
    try {
      const response = await axios.post(
        'https://admin.metalearn.vn/MobileLogin/GetUsers',
        requestData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };




