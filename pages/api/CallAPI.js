import axios from "axios";
import { useMutation, useQuery } from "react-query";

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
