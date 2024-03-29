import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useAuth } from "@/hooks/authContext";
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
  const {userName} = useAuth();
  return useQuery(['mySubject'], async () => {
    const response = await axios({
      url: `https://admin.metalearn.vn/MobileLogin/GetListUserSubject?userName=${userName}&isTutor888=false`,
      method: 'POST',
    });
    return response.data
  });
};

export const GetListMyClass = async () => {
  const {userName} = useAuth();

  const requestData = new FormData();

  requestData.append('userName', userName);
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
  const {userName} = useAuth();
  const requestData = new FormData();

  requestData.append('userName', userName);
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
  const {userName} = useAuth();

  const requestPayload = {
    "testName": "",
    "userName": userName,
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
  const {userName} = useAuth();

  requestData.append('userName', userName);
  requestData.append('TimeDay', '');
  requestData.append("teacher", teacher);
  requestData.append('student', student);
  try {
    const response = await axios.post(
      `https://admin.metalearn.vn/MobileLogin/GetListUserSubject?userName=${userName}&isTutor888=false`,
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


export const GetListStatusCardJoB = async (teacher, student) => {

  const requestData = new FormData();
  const {userName} = useAuth();

  requestData.append('userName', userName);
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
  const {userName} = useAuth();

  const formData = new FormData();

  formData.append('CurrentPageList', '1');
  formData.append('Length', '10');
  formData.append('UserName', userName);
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
  const {userName} = useAuth();

  requestData.append('userId', '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06');
  requestData.append('userName', userName);
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

export const GetListConnectionWait = async (userName) => {
  // Define the data you want to send in the request body
  const requestData = new FormData();
  requestData.append('userName', userName);
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetListConnectionWait',
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

export const GetListConnectionEnabled = async (userName) => {
  // Define the data you want to send in the request body
  const requestData = new FormData();
  requestData.append('userName', userName);
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetListConnectionEnabled',
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


//formData
export const GetListConnectionSent = async (userName) => {
  // Define the data you want to send in the request body
  const requestData = new FormData();
  requestData.append('userName', userName);
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetListConnectionSent',
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

export const GetUsers = async () => {
  try {
    const response = await axios.post(
      'https://admin.metalearn.vn/MobileLogin/GetUsers',
    );
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
    throw error; // You can handle the error as per your application's requirements
  }
};

// kết quả rèn luyện

//query string parameter
export const GetApiLmsCountStudent = async (type) => {
  const {userName, userId} = useAuth();

  // const userId = '0d7d1f0c-eec7-42ec-9296-4bfe97c5bc06';
  const apiUrl = `https://admin.metalearn.vn/MobileLogin/GetApiLmsCountStudent?userId=${userId}&type=${type}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    const data = JSON.parse(responseData[type]);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const GetDetailLecture = async () => {
  const courseCode = "KH_22/6"
  const apiUrl = `https://admin.metalearn.vn/MobileLogin/GetDetailLecture?courseCode=${courseCode}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const GetListCourseAssigned = async () => {
  const {userName} = useAuth();
  const requestData = {}
  try {
    const response = await axios.post(
      `https://admin.metalearn.vn/MobileLogin/GetListCourseAssigned?userName=${userName}`,
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

export const GetLectureQuiz = async () => {
  const lectureCode ="BG_22/6"
  const requestData = {}
  try {
    const response = await axios.post(
      `https://admin.metalearn.vn/MobileLogin/GetLectureQuiz?lectureCode=${lectureCode}`,
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
