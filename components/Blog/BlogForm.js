import React, { useState } from "react";
import { Button, Form, Input, Select, Checkbox, Rate } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import SearchBlog from "./tt";
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
  const [isGeneralInfoVisible, setIsGeneralInfoVisible] = useState(false);
  const [isGeneral, setIsGeneral] = useState(false);
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
  const dataC = listCms?.Object?.find((e) => e.id == id);
  console.log(dataC);
  if (dataC)
    blog = {
      ...blog,
      title: dataC?.title,
      ordering: 1,
      evaluate: 1,
      hash_tag: 'hash_tag',
    };

  const onFinish = async (values) => {
    try {
      if (mode == "add") {
        alert("Tạo blog thành công!");
      } else {
        alert("Cập nhật blog thành công!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const toggleGeneralInfoForm = () => {
    setIsGeneralInfoVisible(!isGeneralInfoVisible);
  };

  const toggleGeneral = () => {
    setIsGeneral(!isGeneral);
  };

  return (
    <div style={{ padding: "0  50px 50px 50px" }}>
      <h3 style={{ marginBottom: "15px", marginTop: "10px", textAlign: "center", fontSize: "24px" }}>
        {mode == "add" ? "Tạo" : "Cập nhật"} bài viết {" "}
      </h3>
      {/* ... thong tin chung */}
      <div>
        <div type="primary" onClick={toggleGeneralInfoForm} style={{ marginBottom: "18px", cursor: "pointer", fontWeight: "800", fontSize: "19px" }}>
          <CaretRightOutlined />  {isGeneralInfoVisible ? " Thông tin chung" : " Thông tin chung"}
        </div>
        {isGeneralInfoVisible && (
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
              rules={[{ required: true, message: "Vui lòng nhập thông tin!" }]}
            >
              <label style={{ fontSize: "16px", fontWeight: "600" }}>Chủ đề</label>
              <Select placeholder="Chọn chủ đề" allowClear style={{ fontWeight: "700", width: "1050px", marginTop: "5px" }}>
                {data?.map((item, index) => (
                  <Option key={index} value={item?.CodeSet}>
                    {item?.ValueSet}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Vui lòng nhập thông tin!" }]}
            >
              <label style={{ fontSize: "16px", fontWeight: "600" }}>Tiêu đề</label>
              <Input style={{ fontWeight: "700", width: "1050px", marginTop: "5px" }} />
            </Form.Item>
            <div style={{ display: "flex" }}>
              <Form.Item
                name="ordering"
                rules={[{ required: true, message: "Vui lòng nhập thông tin!" }]}
              >
                <label style={{ fontSize: "16px", fontWeight: "600" }}>Thứ tự</label>
                <Input style={{ fontWeight: "500", width: "450px", marginTop: "5px" }} />
              </Form.Item>
              <Form.Item
                name="evaluate"
                style={{ marginLeft: "200px" }}
                rules={[{ required: true, message: "Vui lòng nhập thông tin!" }]}
              >
                <label style={{ fontSize: "16px", fontWeight: "600" }}>Đánh giá</label>
                <Rate style={{ width: "250px", fontSize: 25 }} />
              </Form.Item>
            </div>
            <Form.Item
              name="published"
              valuePropName="checked"
              style={{ marginLeft: "0px" }}
            >
              <label style={{ fontSize: "16px", fontWeight: "600" }}>Công khai</label>
              <Checkbox style={{ marginLeft: "100px" }}></Checkbox>
            </Form.Item>
            <Form.Item
              name="hash_tag"
              rules={[{ required: true, message: "Vui lòng nhập thông tin!" }]}
            >
              <label style={{ fontSize: "16px", fontWeight: "600" }}>Từ khóa tìm kiếm</label>
              <Input style={{ fontWeight: "500", width: "1050px", marginTop: "5px" }} />
            </Form.Item>


            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" style={{ marginLeft: "-200px", width: "100px", height: "50px", fontWeight: "800" }}>
                Tạo
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
      {/* ... (noi dung) */}
      <div>
        <div type="primary" onClick={toggleGeneral} style={{ marginBottom: "16px", cursor: "pointer", fontWeight: "800", fontSize: "18px" }} >
          <div >   <CaretRightOutlined /> {isGeneralInfoVisible ? " Nội Dung" : " Nội Dung"}  <SearchBlog/></div>
        </div>
        {isGeneral && (
          <div></div>
        )}
      </div>
      
    </div>
  );
};

export default BlogForm;
