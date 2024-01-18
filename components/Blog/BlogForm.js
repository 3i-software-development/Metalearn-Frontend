import React, { useState } from "react";
import { Button, Form, Input, Select, Space, Checkbox ,Rate} from "antd";
import {
  useGetAllSubjectBlogQuery,
  useInsertBlogMutation,
} from "@/lib/Midleware/BlogQuery";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import { useGetFullTextQuery } from "@/lib/Midleware/NewQuery";
import { useGetListCmsItemQuery, useUpdateCmsItemMutation } from "@/lib/Midleware/CmsClassQuery";
import { useAuth } from "@/hooks/authContext";

const { Option } = Select;
const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const BlogForm = () => {
  // const { userName } = useAuth();
  const userName = "admin";

  const router = useRouter();
  const [form] = Form.useForm();
  const [value, setValue] = useState("");
  const [insertBlog] = useInsertBlogMutation();
  const [updateCmsItem] = useUpdateCmsItemMutation();
  const { data } = useGetAllSubjectBlogQuery();

  let mode = "add";
  const id = router.query.id;
  let { data: blog } = useGetFullTextQuery({ id: id });
  if (id) {
    mode = "update";
  }

  const { data: listCms } = useGetListCmsItemQuery({
    cat_id: "1391",
    userName: userName,
    blogSubject: "BLOG_GROUP_fb0fc637-4571-4745-8a23-45e635a00ecf",
  });
  const dataC = listCms?.Object?.find(e => e.id == id)
  console.log(dataC);
  if (dataC) blog = { ...blog, title: dataC?.title, ordering: 1,evaluate:1, hash_tag: 'hash_tag' };

  // Hàm loại bỏ thẻ p từ chuỗi HTML
  function removePTags(htmlString) {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  const onFinish = async (values) => {
    try {
      if (mode == "add") {
        await insertBlog({
          ...values,
          created_by_alias: userName,
          hash_tag: "[]",
          rate: 1,
        });
        alert("Tạo blog thành công!");
      } else {
        updateCmsItem({
          ...values,
          id: Number(id),
          cat_id: 1391,
          hash_tag: "[]",
          rate: 1,
        });
        alert("Cập nhật blog thành công!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onReset = () => {
    form.resetFields();
  };
  // useEffect(() => {
  // }, [userName]);
  return (
    <div style={{ padding: "0  50px 50px 50px" }}>
      <h3 style={{ marginBottom: "30px" }}>
        {mode == "add" ? "Thêm" : "Cập nhật"} blog kiến thức:{" "}
      </h3>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        initialValues={mode === "update" ? blog : {}}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="blog_subject"
          label="Chủ đề"
          rules={[{ required: true, message: "Please input your input!" }]}
        >
          <Select placeholder="Chọn chủ đề" allowClear>
            {data?.map((item, index) => {
              return (
                <Option key={index} value={item?.CodeSet}>
                  {removePTags(item?.ValueSet)}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="title"
          label="Tiêu đề"
          rules={[{ required: true, message: "Please input your input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="ordering"
          label="Thứ tự"
          rules={[{ required: true, message: "Please input your input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="evaluate"
          label="Đánh giá"
          rules={[{ required: true, message: "Please input your input!" }]}
        >
        <Rate />
        </Form.Item>
        <Form.Item
          name="hash_tag"
          label="Từ khóa tìm kiếm"
          rules={[{ required: true, message: "Please input your input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="full_text"
          label="Nội dung"
          rules={[{ required: true, message: "Please input your input!" }]}
        >
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>

        <Form.Item
          name="published"
          valuePropName="checked"
          style={{ marginLeft: "140px" }}
        >
          <Checkbox>Công khai</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BlogForm;
