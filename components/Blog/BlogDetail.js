import { useGetListCmsItemQuery } from "@/lib/Midleware/CmsClassQuery"
import { useState } from "react"
import { Avatar, List } from 'antd';

// const data = [
//     {
//         title: 'Ant Design Title 1',
//         description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
//     },
//     {
//         title: 'Ant Design Title 2',
//         description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
//     },
//     {
//         title: 'Ant Design Title 3',
//         description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
//     },
//     {
//         title: 'Ant Design Title 4',
//         description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
//     },
// ];

const BlogDetail = ({ catId }) => {
    const [query, setQuery] = useState({
        cat_id: catId,
        blogSubject: 'BLOG_MATH_0168aa38af-c48f-496f-8311-52e4fedb49b6',
        userName: "admin"
    })
    const { data: ListCms } = useGetListCmsItemQuery(query)
    console.log(ListCms)
    const data = ListCms?.Object?.map(e => {
        return {
            title: e.title,
            description: e.createBy
        }
    })
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                            title={<a href="https://ant.design">Tiêu đề: {item.title}</a>}
                            description={<a href="https://ant.design">Người đăng: {item?.description}</a>}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default BlogDetail