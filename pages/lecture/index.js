import React from "react";
import { Tabs } from "antd";
import { useRouter } from "next/router";
import { useGetDetailLectureQuery } from "@/lib/Midleware/LectureQuery";
import { useAuth } from "@/hooks/authContext";

const Index = () => {
  const router = useRouter();
  const { userName } = useAuth();

  const [query, setQuery] = React.useState({
    courseCode: router.query?.courseCode,
    userName: userName,
  });

  const { data } = useGetDetailLectureQuery(query);
  console.log(data);

  const onChange = (key) => {
    // console.log(key);
  };

  // Hàm loại bỏ thẻ p từ chuỗi HTML
  function removePTags(htmlString) {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  const items = [
    {
      key: "1",
      label: "Danh sách",
      children: (
        <p
          dangerouslySetInnerHTML={{ __html: data?.ListLecture[0]?.LectName }}
        />
      ),
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
          dangerouslySetInnerHTML={{
            __html: `<li>Giới thiệu khóa học</li>
            <li>Chứng chỉ khóa học</li>
            <li>Chia sẻ khóa học</li>
            <li>
            Hỏi đáp</li>
            <li>
            Hỏi đáp</li>
            <li>Tài liệu tham khảo</li>`,
          }}
        />
      ),
    },
  ];

  // console.log(router.query?.courseCode);

  return (
    <>
      {/* <video src={data?.ListLecture[0]?.VideoPresent} width="1500" height="500" controls>
      </video> */}
      <iframe
        width="100%"
        height="700px"
        src="https://www.youtube.com/embed/wEU25--_mtE?si=rtdZbU8oWOg61iJL"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <Tabs
        style={{ marginTop: "20px" }}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </>
  );
};

export default Index;
