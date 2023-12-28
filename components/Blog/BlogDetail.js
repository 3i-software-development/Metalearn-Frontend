import { useGetListCmsItemQuery } from "@/lib/Midleware/CmsClassQuery";
import { useState } from "react";
import { Avatar, List } from "antd";
import Link from "next/link";

const BlogDetail = ({ catId }) => {
    const [query, setQuery] = useState({
        cat_id: catId,
        blogSubject: "BLOG_MATH_0168aa38af-c48f-496f-8311-52e4fedb49b6",
        userName: "admin",
    });
    const { data: ListCms } = useGetListCmsItemQuery(query);
    // console.log(ListCms)
    const data = ListCms?.Object?.map((e) => {
        return {
            title: e.title,
            description: e.createBy,
            id: e.id,
        };
    });
    // console.log(data);
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <Link href={`/blog?key=1391&id=7456`}>
                        <List.Item style={{ cursor: 'pointer' }}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                                    />
                                }
                                title={<h3>Tiêu đề: {item.title}</h3>}
                                description={
                                    <p>
                                        Người đăng: {item?.description}
                                    </p>
                                }
                            />
                        </List.Item>
                    </Link>
                )}
            />
        </div>
    );
};

export default BlogDetail;
