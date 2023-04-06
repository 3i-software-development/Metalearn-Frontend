import axios from 'axios';
import qs from 'qs';
import { useMutation, useQuery } from 'react-query';

export const GetListExam = () => {
    return useQuery(['getmenuexam'], async () => {
        const response = await axios.post(`https://admin.metalearn.vn/MobileLogin/GetListLmsLecture?lectureName=&userName=zeta7&isTutor888=false&pageLength=10&pageNum=1`);
        return response.data;
    });
};

export const GetListClass = () => {
    return useQuery(['getmenuexam'], async () => {
        const response = await axios.post(`https://admin.metalearn.vn/MobileLogin/GetListTutorScheduleNew?sortByTime=true&userName=admin`);
        return response.data;
    });
};

export const GetListDoc = () => {
    return useQuery(['getlistdoc'], async () => {
        const response = await axios.post(`https://admin.metalearn.vn/MobileLogin/GetListFileCw?CatCode=COURSEWARE&SubjectCode=&ObjectType=&ObjectCode=&FromDate=&ToDate=&FileName=&FileType=&Content=&UserUpload=&KeySearch=&Count=&CurrentPageView=1&Length=6`);
        return response.data;
    });
};