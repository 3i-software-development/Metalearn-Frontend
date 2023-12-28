import React, { useState } from "react";
import { Button, Form, Input, Select, Space, Checkbox } from "antd";
import {
  useGetAllSubjectBlogQuery,
  useInsertBlogMutation,
} from "@/lib/Midleware/BlogQuery";
import AddIcon from "@mui/icons-material/Add";

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

const CreateBlog = () => {
  const [value, setValue] = useState('')
  const [form] = Form.useForm();
  const [insertBlog] = useInsertBlogMutation();
  const { data } = useGetAllSubjectBlogQuery();

  // Hàm loại bỏ thẻ p từ chuỗi HTML
  function removePTags(htmlString) {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  const onFinish = async (values) => {
    try {
      await insertBlog({
        ...values,
        full_text: values,
        created_by_alias: "admin",
        published: true,
      });
      alert("Tạo blog thành công!");
    } catch (error) {
      console.log(error);
    }
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div style={{ padding: "50px 50px" }}>
      <AddIcon style={{ display: 'inline' }} />
      <h3 style={{ marginBottom: '30px' }}>Tạo blog kiến thức: </h3>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item name="blog_subject" label="Chủ đề" rules={[{ required: true, message: 'Please input your input!' }]}>
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
        <Form.Item name="title" label="Tiêu đề" rules={[{ required: true, message: 'Please input your input!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="ordering" label="Thứ tự" rules={[{ required: true, message: 'Please input your input!' }]}>
          <Input />
        </Form.Item>


        <Form.Item name="hash_tag" label="Từ khóa tìm kiếm" rules={[{ required: true, message: 'Please input your input!' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="full_text" label="Nội dung" rules={[{ required: true, message: 'Please input your input!' }]}>
          {/* <Input /> */}
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          style={{ marginLeft: "140px" }}
        >
          <Checkbox>Công khai</Checkbox>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender") === "other" ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
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

export default CreateBlog;
