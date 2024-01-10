import axios from "axios";
import { useMutation, useQuery } from "react-query";

// Phần collection
export const GetAllPinQuiz = async () => {
    const { userName, userId } = useAuth();

    const requestPayload = {
        "subjectCode": "",
        "lectureCode": "",
        "content": "",
        "latex": "",
        "level": "",
        "ratingMin": 1,
        "ratingMax": -1,
        "fromDatePara": "",
        "toDatePara": "",
        "createdBy": "",
        "userName": userName,
        "isTutor888": false,
        "groupBySubject": false,
        "onlyAssignment": false,
        "onlyShared": true,
        "pageLength": 15,
        "pageNum": 1
    };

    try {
        const response = await axios.post(
            'https://admin.metalearn.vn/MobileLogin/GetAllPinQuiz',
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

export const GetAllPinExam = async () => {
    const requestPayload = {
        "testName": "",
        "userName": "admin",
        "subjectCode": "",
        "content": "",
        "latex": "",
        "level": "",
        "ratingMin": -1,
        "ratingMax": -1,
        "fromDatePara": "",
        "toDatePara": "",
        "createdBy": "",
        "onlyAssignment": false,
        "onlyShared": true,
        "pageLength": 15,
        "pageNum": 1
    };

    try {
        const response = await axios.post(
            'https://admin.metalearn.vn/MobileLogin/GetAllPinExam',
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

export const GetAllPinFile = async () => {
    const { userName, userId } = useAuth();

    const requestData = new FormData();
    requestData.append('CatCode', '');
    requestData.append('SubjectCode', '');
    requestData.append('ObjectType', '');
    requestData.append('ObjectCode', '');
    requestData.append('FromDate', '');
    requestData.append('ToDate', '');
    requestData.append('FileName', '');
    requestData.append('FileType', '');
    requestData.append('Content', '');
    requestData.append('UserUpload', userName);
    requestData.append('KeySearch', '');
    requestData.append('Count', '');
    requestData.append('CurrentPageView', 1);
    requestData.append('Length', 15);

    try {
        const response = await axios.post(
            'https://admin.metalearn.vn/MobileLogin/GetAllPinFile',
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

export const CountPinData = async () => {
    const requestData = new FormData();
    const { userName, userId } = useAuth();

    requestData.append('userId', userId);

    try {
        const response = await axios.post(
            `https://admin.metalearn.vn/MobileLogin/CountPinData?userId=${userId}`,
            requestData,
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

export const GetSingleQuiz = async () => {
    const requestData = new FormData();
    const { userName, userId } = useAuth();

    requestData.append('quizId', '619529');
    requestData.append('userName', userName);

    try {
        const response = await axios.post(
            `https://admin.metalearn.vn/MobileLogin/GetSingleQuiz?quizId=619529&userName=${userName}`,
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

export const UnPinData = async () => {
    const requestData = new FormData();
    const { userName, userId } = useAuth();

    requestData.append('Id', '1221');
    requestData.append('userId', userName);

    try {
        const response = await axios.post(
            `https://admin.metalearn.vn/MobileLogin/UnPinData?Id=1221&userId=${userName}`,
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

export const GetListUserConnected = async () => {
    const requestData = new FormData();
    const { userName, userId } = useAuth();

    requestData.append('userName', userName);

    try {
        const response = await axios.post(
            'https://admin.metalearn.vn/MobileLogin/GetListUserConnected',
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

export const GetUserShareQuizPermission = async () => {
    const requestData = new FormData();
    requestData.append('id', '619532');

    try {
        const response = await axios.post(
            'https://admin.metalearn.vn/MobileLogin/GetUserShareQuizPermission',
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

export const UpdateQuizPermission = async () => {
    const { userName, userId } = useAuth();

    const requestData = new FormData();
    requestData.append('Id', '619532');
    requestData.append('UpdatedBy', userName);
    requestData.append('Share', [
        'UserName', 'teamdankia11',
        'GivenName', 'Em  Nguyen HS'
    ]);

    try {
        const response = await axios.post(
            'https://admin.metalearn.vn/MobileLogin/UpdateQuizPermission',
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

export const GetTestQuiz = async () => {
    const requestData = new FormData();
    const { userName, userId } = useAuth();

    requestData.append('practiceTestCode', 'fcfe2d82-be69-4aa1-a94e-75fb9b9983e2');
    requestData.append('userName', userName);

    try {
        const response = await axios.post(
            `https://admin.metalearn.vn/MobileLogin/GetTestQuiz?practiceTestCode=fcfe2d82-be69-4aa1-a94e-75fb9b9983e2&userName=${userName}`,
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

export const GetAllPinComment = async () => {
    const { userName, userId } = useAuth();

    const requestData = new FormData();
    requestData.append('pinDataType', 'QA');
    requestData.append('userId', userId);
    const { userName, userId } = useAuth();

    try {
        const response = await axios.post(
            `https://admin.metalearn.vn/MobileLogin/GetAllPinComment?pinDataType=QA&userId=${userId}`,
            requestData,
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

