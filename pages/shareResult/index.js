import React, { useState } from 'react'
import { Select } from 'antd';
import AddIcon from '@mui/icons-material/Add';
import { useGetListUserConnectedQuery } from '@/lib/Midleware/UserQuery';
import { useGetListCourseMobileQuery } from '@/lib/Midleware/CourseQuery';


const Index = () => {
    const [query, setQuery] = useState({
        userName: "admin"
    })

    const { data } = useGetListUserConnectedQuery(query)
    const newData = data?.map(e => {
        return {
            value: e?.UserName,
            label: e?.GivenName
        }
    })

    const { data: courseMobileQuery } = useGetListCourseMobileQuery({
        userName: "admin",
        isPublic: true,
    });
    console.log(courseMobileQuery);

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };


    return (
        <div style={{ margin: '40px 40px', }}>
            <h3 style={{ marginBottom: '30px' }}>Chia sẻ kết quả rèn luyện</h3>
            <div style={{ display: 'flex', height: '40vh', columnGap: '20px' }}>
                <Select
                    style={{ width: '100%' }}
                    showSearch
                    placeholder="Công ty"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    options={newData}
                />
                <span style={{position: 'relative', top: '5px', cursor: 'pointer'}}>
                    <AddIcon />
                </span>
            </div>
        </div>
    )
}

export default Index