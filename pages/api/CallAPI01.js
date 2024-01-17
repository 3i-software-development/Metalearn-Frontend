import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useAuth } from "@/hooks/authContext";

// Của phần "Kết Quả" nằm trong mục "Nhiệm Vụ"
export const GetListShiftLog = async (teacher, student) => {
  const { userName, userId } = useAuth();

    const requestData = new FormData();

    // requestData.append('userId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
    requestData.append('userId', userId);
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
    const { userName, userId } = useAuth();


    // requestData.append('userId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
    requestData.append('userId', userId);
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
    const { userName, userId } = useAuth();

    // requestData.append('userId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
    requestData.append('userId', userId);
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



//API của Khóa Học.
  export const GetListCourseWatched = async (teacher, student) => {
    const { userName, userId } = useAuth();

    const requestData = new FormData();
  
    requestData.append('userName', userName);
    requestData.append('TimeDay', '');
    requestData.append("teacher", teacher);
    requestData.append('student', student);
    try {
      const response = await axios.post(
        'https://admin.metalearn.vn/MobileLogin/GetListCourseWatched?userName=admin',
        requestData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return response.data;
    } catch (error) {
  
      console.error('Error:', error);
      throw error;
    }
  };



  export const GetDetailLecture = async (teacher, student) => {

    const requestData = new FormData();
    const { userName, userId } = useAuth();

    requestData.append('userName', userName);
    requestData.append('TimeDay', '');
    requestData.append("teacher", teacher);
    requestData.append('student', student);
    try {
      const response = await axios.post(
        'https://admin.metalearn.vn/MobileLogin/GetDetailLecture?courseCode=KH_22/6',
        requestData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return response.data;
    } catch (error) {
  
      console.error('Error:', error);
      throw error;
    }
  };


  export const GetListFileCwRead = async () => {
    const { userName, userId } = useAuth();

    const formData = new FormData();
    formData.append('CatCode', '')
    formData.append('SubjectCode', '')
    formData.append('ObjectType', 'All')
    formData.append('ObjectCode', '')
    formData.append('FromDate', '')
    formData.append('ToDate', '')
    formData.append('FileName', '')
    formData.append('FileType', '')
    formData.append('Content', '')
    formData.append('UserUpload', '')
    formData.append('Username', userName)
    formData.append('KeySearch', '')
    formData.append('Count', undefined)
    formData.append('CurrentPageView', '1')
    formData.append('Length', '15')

    try {
      const response = await axios.post(
        '  https://admin.metalearn.vn/MobileLogin/GetListFileCwRead',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return response.data;
    } catch (error) {
  
      console.error('Error:', error);
      throw error;
    }
  };
