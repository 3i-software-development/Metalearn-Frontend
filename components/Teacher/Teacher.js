import React from "react";
import TeacherItem from "./TeacherItem";
import style from "./style.module.scss";
import classNames from "classnames/bind";
import FilterForm from "./filterForm";

const cx = classNames.bind(style);

const Teacher = () => {
  const teacherData = [
    {
      id: 1,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 2,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 3,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 4,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 5,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 6,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 7,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 8,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 9,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 10,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 11,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 12,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 13,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
    {
      id: 14,
      name: "Teacher",
      age: 28,
      avatar:
        "https://media.istockphoto.com/id/1215201838/vector/indian-teacher-with-book-near-blackboard-in-class.jpg?s=612x612&w=0&k=20&c=nbZv2PounwE0inw5tYrHZo_I-t5qWaX5CY1QnxJ0rFw=",
      subjects: ["Toán", "Ngữ văn", "Tiếng Anh", "Khoa học tự nhiên"],
      phoneNumber: "0237475768",
      reviews: 4,
      likes: 19,
      follows: 30,
      address: "85 Hạ Đình, Thanh Xuân, Hà Nội",
    },
  ];
  return (
    <div className={cx('teachers-tab')}>
      <FilterForm />
      <div className={cx('teachersList-secion')}>
        <h1 className={cx('teacher-title')}>Danh sách giáo viên</h1>
        <div className={cx("teachersList")}>
        {teacherData.map((item) => (
          <TeacherItem key={item.id} data={item} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Teacher;