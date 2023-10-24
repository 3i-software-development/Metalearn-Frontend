import axios from "axios";
import { useMutation, useQuery } from "react-query";


export const GetListNews = async () => {
  const response = await axios.post(
    `https://admin.metalearn.vn/MobileLogin/GetListInCategories`
  );
  return response.data;
};

//export const GetListCmsItem = async() => {
//const response = await axios.post(
//`https://admin.metalearn.vn/MobileLogin/GetListCmsItem`
//);
//return response.data;
//};

export const GetListCmsItem = async (cat_id) => {
  // Define the data you want to send in the request body
  const formData = new FormData();
  formData.append('cat_id', cat_id);

  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetListCmsItem',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
    throw error; // You can handle the error as per your application's requirements
  }
};


export const GetListExam = () => {
  return useQuery(["getmenuexam"], async () => {
    const response = await axios.post(
      `https://admin.metalearn.vn/MobileLogin/GetListLmsLecture?lectureName=&userName=zeta7&isTutor888=false&pageLength=10&pageNum=1`
    );
    return response.data;
  });
};

// export const GetListClass = () => {
//   return useQuery(["getmenuexam"], async () => {
//     const response = await axios.post(
//       `https://admin.metalearn.vn/MobileLogin/GetListTutorScheduleNew?sortByTime=true&userName=admin`
//     );
//     return response.data;
//   });
// };
export const GetListDoc = () => {
  return useQuery(["getlistdoc"], async () => {
    const response = await axios.post(
      `https://admin.metalearn.vn/MobileLogin/GetListFileCw?CatCode=COURSEWARE&SubjectCode=&ObjectType=&ObjectCode=&FromDate=&ToDate=&FileName=&FileType=&Content=&UserUpload=&KeySearch=&Count=&CurrentPageView=1&Length=6`

    );
    return response.data;
  });
};

export const UserLogin = () => {
  return useMutation(['login'], async (bodyFormData) => {
    const response = await axios({
      url: 'https://admin.metalearn.vn/MobileLogin/LoginNoCheckOnline',
      method: 'POST',
      data: bodyFormData
    });
    return response
  });
};

export const GetListMyExam = (query) => {
  return useQuery(['myExam', query], async () => {
    const response = await axios({
      url: 'https://admin.metalearn.vn/MobileLogin/GetListLmsTestBody',
      method: 'POST',
      data: query
    });
    return response.data
  });
};


export const GetListQuizzes = () => {
  return useQuery(['quizzes'], async () => {
    const response = await axios({
      url: 'https://admin.metalearn.vn/MobileLogin/GetSubjectQuizBody',
      method: 'POST',
    });
    return response.data
  });
}

export const GetListMySubject = () => {
  return useQuery(['mySubject'], async () => {
    const response = await axios({
      url: 'https://admin.metalearn.vn/MobileLogin/GetListUserSubject?userName=admin&isTutor888=false',
      method: 'POST',
    });
    return response.data
  });
};

export const GetListMyClass = async () => {

  const requestData = new FormData();

  requestData.append('userName', 'admin');
  requestData.append('fromDate', '');
  requestData.append("toDate", "");
  requestData.append('pageLength', '31');
  requestData.append('pageNum', '1');
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetListMyClass',
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

export const GetListMyTutorSchedule = async (teacher, student) => {

  const requestData = new FormData();

  requestData.append('userName', 'admin');
  requestData.append('TimeDay', '');
  requestData.append("teacher", teacher);
  requestData.append('student', student);
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetListMyTutorSchedule',
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


export const GetListLmsTestBody = async () => {
  const requestPayload = {
    "testName": "",
    "userName": "admin",
    "content": "",
    "latex": "",
    "level": "",
    "ratingMin": -1,
    "ratingMax": -1,
    "fromDatePara": "",
    "toDatePara": "",
    "createdBy": "",
    "onlyAssignment": false,
    "onlyDone": true,
    "onlyShared": true,
    "pageLength": 30,
    "pageNum": 1
  };

  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetListLmsTestBody',
      requestPayload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
 
    console.error('Error:', error);
    throw error;
  }
};










export const GetListUserSubject = async (teacher, student) => {

  const requestData = new FormData();

  requestData.append('userName', 'admin');
  requestData.append('TimeDay', '');
  requestData.append("teacher", teacher);
  requestData.append('student', student);
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetListUserSubject?userName=admin&isTutor888=false',
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


export const GetListStatusCardJob = async (teacher, student) => {

  const requestData = new FormData();

  requestData.append('userName', 'admin');
  requestData.append('TimeDay', '');
  requestData.append("teacher", teacher);
  requestData.append('student', student);
  
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetStatusCardJob',
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


//"Bảng Nhiệm Vụ" của Thông Tin Chung của mục Nhiệm Vụ
export const GetListBoardLms = async (teacher, student) => {
  const requestData = new FormData();

  requestData.append('userId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
  requestData.append('ObjId', '');
  requestData.append("UserType", 10);
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetListBoardLms',
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


export const GetListClass = async (userId) => {
  try {

    const requestPayload = {};

    const response = await axios.post('https://admin.metalearn.vn/MobileLogin/GetListClass', requestPayload, {
      params: {
        userId: userId,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data;
  } catch (error) {

    console.error('Error:', error);
    throw error;
  }
};

export const GetListJobCardLms = async () => {

  const formData = new FormData();

  formData.append('CurrentPageList', '1');
  formData.append('Length', '10');
  formData.append('UserName', 'admin');
  formData.append('FromDate', '');
  formData.append('ToDate', '');
  formData.append('UserId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
  formData.append('Status', '0');
  formData.append('Object', '');
  formData.append("ObjType", "");
  formData.append('CardName', '');
  formData.append("BoardCode", '');

  try {
    const response = await axios.post('https://admin.metalearn.vn/MobileLogin/GetListJobCardLms', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {

    console.error('Error:', error);
    throw error;
  }
};



export const GetGirdCardBoardLms = async () => {
  // Define the data you want to send in the request body
  const requestData = new FormData();
  requestData.append('userId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
  requestData.append('userName', 'admin');
  requestData.append("Length", 10);
  requestData.append('CurrentPageList', 1);
  requestData.append('BoardCode', '');
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetGirdCardBoardLms',
      requestData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
    throw error; // You can handle the error as per your application's requirements
  }
};