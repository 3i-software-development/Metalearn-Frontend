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

export const UserLogin = async ({ username, password }) => {
  const bodyFormData = new FormData();
  bodyFormData.append("Username", username);
  bodyFormData.append("Password", password);

  const response = await axios({
    url: "https://admin.metalearn.vn/MobileLogin/LoginNoCheckOnline",
    method: "POST",
    data: bodyFormData,
  });

  if (!response.data.Error) {
    localStorage.setItem("user", username);
  }
  return response;
};

export const GetUser = () => {
  return useMutation(["getUser"], async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("Username", username);
    bodyFormData.append("Password", password);

    const response = await axios({
      url: "https://admin.metalearn.vn/MobileLogin/LoginNoCheckOnline",
      method: "POST",
      data: bodyFormData,
    });
    console.log(response);
  });
};
