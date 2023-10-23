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

export const GetListClass = () => {
  return useQuery(["getmenuexam"], async () => {
    const response = await axios.post(
      `https://admin.metalearn.vn/MobileLogin/GetListTutorScheduleNew?sortByTime=true&userName=admin`
    );
    return response.data;
  });
};
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
  // Define the data you want to send in the request body
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
    // Handle errors here
    console.error('Error:', error);
    throw error; // You can handle the error as per your application's requirements
  }
};

export const GetListMyTutorSchedule = async (teacher, student) => {
  // Define the data you want to send in the request body
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
    // Handle errors here
    console.error('Error:', error);
    throw error; // You can handle the error as per your application's requirements
  }
};







export const GetListStatusCardJoB = async (teacher, student) => {
  // Define the data you want to send in the request body
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
    // Handle errors here
    console.error('Error:', error);
    throw error; // You can handle the error as per your application's requirements
  }
};
