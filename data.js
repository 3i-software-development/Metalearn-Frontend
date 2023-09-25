export const ArrayData = [
    {
        id: 1,
        subject: "Toán",
        point: 8,
        munites:"15 munites"
    },
    {
        id: 2,
        subject: "Tin học",
        point: 8,
        munites:"15 munites"
    },
    {
        id: 3,
        subject: "Ngữ Văn",
        point: 8,
        munites:"15 munites"
    },
    {
        id: 4,
        subject: "Hóa Học",
        point: 8,
        munites:"15 munites"
    }, {
        id: 5,
        subject: "Vật Lý",
        point: 8,
        munites:"15 munites"
    },
];

export const selectStatus = [
    { 
        label: "NONE",
        value: ""
    },
    { 
        label: "CREATED",
        value: "Mới tạo"
    },
    { 
        label: "ACTIVE",
        value: "Đã kích hoạt"
    }, 
    { 
        label: "DEACTIVE",
        value: "Ngừng kích hoạt"
    }, 
    { 
        label: "COMPLETE",
        value: "Hoàn thành"
    }
];

export const initialCourseItem = {
    CourseCode: "",
    CourseName: "",
    CourseNote: "",
    CreatedBy: "",
    CreatedTime: "",
    Duration: "",
    EndTime: "",
    FileBase: "",
    ImgCover: "",
    ListSubject: "",
    ListVideo: "",
    Price: "",
    StartTime: "",
    Status: "",
    Tags: "",
    Unit: "",
    VideoPresent: ""
}

export const initialLessonItem = {
    LessonCode: "",
    LessonName: "",
    Status: "",
    Image: ""
}

export const Users = [
    {
        id: "1",
        name: ""
    },
    {
        id: "2",
        name: "Tất cả"
    },
    {
        id: "3",
        name: "Quản trị viên"
    },
    {
        id: "4",
        name: "Phạm Trang"
    }
]