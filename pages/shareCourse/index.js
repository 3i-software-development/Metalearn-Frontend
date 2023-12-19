import React, { useState } from 'react'
import { Select } from 'antd';
import PersonIcon from '@mui/icons-material/Person';
import { useGetListUserConnectedQuery } from '@/lib/Midleware/UserQuery';


const Index = () => {
    const [query, setQuery] = useState({
        userName: "admin"
    })

    const { data } = useGetListUserConnectedQuery(query)
    console.log(data);
    const newData = data?.map(e => {
        return {
            value: e?.UserName,
            label: e?.GivenName
        }
    })
    console.log(newData);

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };


    return (
    <div style={{ margin: '40px 40px',}}>
        <h3 style={{marginBottom: '30px'}}>Chia sẻ khóa học</h3>
        <div style={{ display: 'flex',height: '40vh', columnGap: '20px' }}>
            <Select
                style={{ width: '100%' }}
                showSearch
                placeholder="Người dùng"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                options={newData}
            />
            <PersonIcon />
        </div>
    </div>
    )
}

export default Index