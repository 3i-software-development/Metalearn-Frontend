import React from 'react'
import { Tabs } from 'antd';
import { useRouter } from "next/router";
import { useGetDetailLectureQuery } from '@/lib/Midleware/LectureQuery';



const Index = () => {
  const router = useRouter();

  const [query, setQuery] = React.useState({
    courseCode: router.query?.courseCode,
    userName: ""
  });

  const { data } = useGetDetailLectureQuery(query);
  console.log(data);

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'Danh sách',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Nội dung',
      children: data?.ListLecture[0]?.LectDescription,
    },
    {
      key: '3',
      label: 'Bài tập',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Mở rộng',
      children: data?.ListLecture[0]?.Status,
    },
  ];

  console.log(router.query?.courseCode);

  return (
    <>
      <video src={data?.ListLecture[0]?.VideoPresent} width="1500" height="500" controls>
      </video>

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default Index