import React from "react";
import { Tabs } from "antd";
import { useRouter } from "next/router";
import { useGetDetailLectureQuery } from "@/lib/Midleware/LectureQuery";
import { useAuth } from "@/hooks/authContext";
import YoutubeVideo from "@/components/YoutubeVideo/YoutubeVideo";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  const router = useRouter();
  const { userName } = useAuth();

  const [query, setQuery] = React.useState({
    courseCode: router.query?.courseCode,
    userName: userName,
  });

  const { data } = useGetDetailLectureQuery(query);
  // console.log(data)

  const listItems = data?.ListLecture?.map((lecture) => (
    <li
      key={lecture.Id}
      style={{ marginTop: "15px", marginLeft: "20px", listStyle: "none" }}
    >
      <Link href={`/lecture?courseCode=${lecture?.CourseCode}`}>
        <div style={{ display: "flex", cursor: 'pointer' }}>
          <Image
            src={
              "https://ionic.metalearn.vn/assets/imgs/image_2023_10_23T12_38_21_667Z.png"
            }
            width={100}
            height={100}
            alt="Lecture Image"
          />
          <span style={{ fontWeight: "bold", marginLeft: "12px" }}>
            <p>{lecture.LectName}</p>
            <p>{lecture.CourseCode}</p>
          </span>
        </div>
      </Link>
    </li>
  ));
  console.log(listItems);

  const onChange = (key) => {
    // console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Danh sách",
      children: <ul>{listItems}</ul>,
    },
    {
      key: "2",
      label: "Nội dung",
      children: (
        <p
          dangerouslySetInnerHTML={{
            __html: data?.ListLecture[0]?.LectDescription,
          }}
        />
      ),
    },
    {
      key: "3",
      label: "Bài tập",
      children: "Bài tập",
    },
    {
      key: "4",
      label: "Mở rộng",
      children: (
        <ul
          style={{
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
            marginLeft: "20px",
            listStyle: "none",
            cursor: "pointer",
          }}
          dangerouslySetInnerHTML={{
            __html: `<li>Giới thiệu khóa học</li>
            <li>Chứng chỉ khóa học</li>
            <li>Chia sẻ khóa học</li>
            <li>
            Hỏi đáp</li>
            <li>Tài liệu tham khảo</li>
            <li>
            Tương tác</li>`,
          }}
        />
      ),
    },
  ];

  return (
    <>
      <div>
        <YoutubeVideo
          videoUrl={data?.ListLecture[0]?.VideoPresent}
          width={"100%"}
          height={"500px"}
        />
        <Tabs
          style={{ marginTop: "20px", fontWeight: "bold" }}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Index;
