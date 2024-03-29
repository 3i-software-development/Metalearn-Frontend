/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Avatar,
  Button,
  Drawer,
  Checkbox,
  Form,
  Input,
  Cascader,
  InputNumber,
  AutoComplete,
  Select,
  Upload,
  Col,
  Row,
} from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  CaretDownFilled,
  CaretRightFilled,
} from '@ant-design/icons';
import NotificationPopup from "@/components/Notification/NotificationPopup";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { FaBell } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { useRouter } from "next/router";
import axios from 'axios'

import {
  Box,
  IconButton,
  ListItemButton,
  ListItemText,
  Menu,
  Tooltip,
} from "@mui/material";
const { Option } = Select;
import { useAuth } from "@/hooks/authContext";

import { useSelector } from "react-redux";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";

const cx = classNames.bind(styles);

const Header = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const [telegram ,setTelegram]  = useState();
  const [facebook ,setFacebook] = useState();
  const [instagram ,setInstagram] = useState();
  const [youtube ,setYoutube] = useState();
  const [twitter ,setTwitter] = useState();

  const [showMobile, setShowmobile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { isAuthenticated, userId, userName, loginState, logout } = useAuth();
  const [toggle, setToggle] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => { }, [isAuthenticated]);

  const filterProfileData = (arr, name) => {
    if (Array.isArray(arr)) {
      let filter = arr.filter(item => item.Name == name);
      return filter;
    }

  }

  const getUser = async () => {
    let req = await axios.get(`https://admin.metalearn.vn/MobileLogin/GetProfile?id=${userId}`);
    if (req !== undefined && req.data.Object.SocialInfo) {
      let reqData = await JSON.parse(req.data.Object.SocialInfo);
      setTelegram(filterProfileData(reqData, 'Telegram'));
      setFacebook(filterProfileData(reqData, 'Facebook'));
      setInstagram(filterProfileData(reqData, 'Instagram'));
      setYoutube(filterProfileData(reqData, 'Youtube'));
      setTwitter(filterProfileData(reqData, 'Twitter'));
    }
  }

  const items = [
    {
      key: "1",
      label: "Lập trình",
    },
    {
      key: "2",
      label: "Toán",
      children: [
        {
          key: "2-1",
          label: "Toán 10",
        },
        {
          key: "2-2",
          label: "Toán 11",
          children: [
            {
              key: "2-2-1",
              label: "Toán hình 11",
            },
            {
              key: "2-2-2",
              label: "Đại số 11",
            },
          ],
        },
        {
          key: "2-3",
          label: "Toán Cao Cấp",
        },
      ],
    },
    {
      key: "3",
      label: "Văn học",
    },
    {
      key: "4",
      label: "Địa lý",
      children: [
        {
          key: "2-1",
          label: "Địa lý 10",
        },
        {
          key: "2-2",
          label: "Địa lý 11",
        },
        {
          key: "2-3",
          label: "Địa lý 12",
        },
      ],
    },
    {
      key: "5",
      label: "Ngoại ngữ",
      children: [
        {
          key: "5-1",
          label: "tiếng Anh",
        },
        {
          key: "5-2",
          label: "tiếng Pháp",
        },
        {
          key: "5-3",
          label: "tiếng Đức",
        },
        {
          key: "5-5",
          label: "tiếng Nhật",
        },
        {
          key: "5-4",
          label: "tiếng Hàn",
        },
      ],
    },
    {
      key: "6",
      label: "Lịch sử",
      children: [
        {
          key: "6-1",
          label: "Lịch sử 10",
        },
        {
          key: "6-2",
          label: "Lịch sử 11",
        },
        {
          key: "6-3",
          label: "Lịch sử 12",
        },
      ],
    },
  ];

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };
  const toggleMenu = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const user = useSelector((state) => state.login);

  const [show, setShow] = useState(false);
  //
  const showDrawer = async () => {
    setOpen(true);
    setAnchorElUser(null);
    await getUser()
  };

  const onClose = () => {
    setOpen(false);
  };
  {/* //Quên Mật Khẩu */ }
  const [showPasswordResetForm, setShowPasswordResetForm] = useState(false);

  const openPasswordResetForm = () => {
    setShowPasswordResetForm(true);
    setAnchorElUser(null);
  };

  const closePasswordResetForm = () => {
    setShowPasswordResetForm(false);
  };
 {/* //Đổi Mật Khẩu */ }
  const [showPasswordDrawer, setShowPasswordDrawer] = useState(false);

  const handleOpenPasswordDrawer = () => {
    setShowPasswordDrawer(true);
  };

  const handleClosePasswordDrawer = () => {
    setShowPasswordDrawer(false);
  };


  const [placement, setPlacement] = useState("left");

  //
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  const handldeOpenFormUser = () => {
    setShowInfo(prev => !prev)
    console.log(showInfo)
  }

  return (
    <div className={cx("header")}>
      <div className={cx("header-left")}>
        {isAuthenticated && (
          <AiOutlineMenu
            className={cx("icon-mobile")}
            onClick={() => toggleMenu()}
          />
        )}
        {toggle && <MenuMobile items={items} setToggle={setToggle} />}

        <Link
          href={isAuthenticated ? "/personalized" : "/"}
          className={cx("logo-container")}
        >
          Meta<span>Learn</span>
        </Link>

        <div className={cx("header-links")}>
          {/* <Link href="/subjects" className={cx("head-link")}>
            <Dropdown menu={{ items }}>
              <Space className={cx("head-link")}>Môn học</Space>
            </Dropdown>
          </Link> */}
          <Link href="/news" className={cx("head-link")}>
            Tin tức
          </Link>
          <Link href="/my-class" className={cx("head-link")}>
            Lớp học
          </Link>
          {/* <Link href="/documents" className={cx("head-link")}>
            Tài liệu
          </Link> */}
          <Link href="/courseware" className={cx("head-link")}>
            Khóa học
          </Link>
          <Link href="/exam" className={cx("head-link")}>
            Đề thi
          </Link>
          <Link href="/document-course" className={cx("head-link")}>
            Học liệu
          </Link>
          <Link href="/blog" className={cx("head-link")}>
            Blog 
          </Link>
        </div>
      </div>

      <div className={cx("header-right")}>
        {/* <div className={cx("search-container")}>
          <span className="search-icon">
            <BsSearch />
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className={cx("search-input")}
          />
        </div> */}

        {isAuthenticated && (
          <div className={cx("icon-ss")}>
            <div className={cx("authenticated_div")}>
              <div className={cx("icon-container")}>
                <BsSearch className={cx("icon-search-mobile")} />
              </div>
              <div className={cx("icon-container")}>
                <Link href="/payment">
                  <TiShoppingCart className={cx("icon")} />
                </Link>
              </div>
              <div className={cx("icon-container")}>
                <FaBell onClick={toggleNotification} />
              </div>
              <div className={cx("icon-container")}>
                <BiSolidUser onClick={handleOpenUserMenu} />
              </div>
              <Button className={cx("logout-button")} onClick={() => logout()}>
                Đăng xuất
              </Button>
              {/* Notification Popup */}
              {showNotification && <NotificationPopup />}
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <ListItemButton onClick={showDrawer}>

                    <div style={{ display: "flex", columnGap: "10px" }}>
                      <PersonIcon />
                      <div>
                        <ListItemText primary="Thông tin cá nhân" />
                      </div>
                    </div>
                  </ListItemButton>

                  <ListItemButton onClick={openPasswordResetForm}>
                    <div style={{ display: "flex", columnGap: "10px" }}>
                      <KeyIcon />
                      <div>
                        <ListItemText primary="Quên mật khẩu" />
                      </div>
                    </div>
                  </ListItemButton>

                  {/* </MenuItem> */}
                </Menu>
              </Box>
            </div>
          </div>
        )}

        {/* Notification button */}
        {!isAuthenticated && (
          <div className={cx("user")}>
            <Link href="/auth/login" className={cx("login-btn")}>
              Đăng nhập
            </Link>
            <Link href="/auth/signup" className={cx("signup-btn")}>
              Đăng kí
            </Link>
          </div>
        )}
      </div>

      {/* //Thông tin cá nhân */}
      <Drawer
        title="Thông tin cá nhân"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        style={{ width: "130%" }}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "84",
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <div style={{ padding: '12px 3px', borderBottom: "1px solid #ccc" }}>
            <UserOutlined />
            <input style={{ marginLeft: '6px', border: "none", outline: 'none', width: '80%' }} defaultValue={userName} />
          </div>
          <div style={{ padding: '12px 3px', borderBottom: "1px solid #ccc" }}>
            <PhoneOutlined />
            <input style={{ marginLeft: '6px', border: "none", outline: 'none', width: '80%' }} defaultValue={telegram ? telegram[0]?.Value : ''} />
          </div>
          <div style={{ padding: '12px 3px', borderBottom: "1px solid #ccc" }}>
            <MailOutlined />
            <input style={{ marginLeft: '6px', border: "none", outline: 'none', width: '80%' }} defaultvalue="vietnamtopapp@gmail.com" />
          </div>
          <div style={{ margin: '12px 0px', display: 'flex', justifyContent: 'space-between' }}>
            <Button style={{ backgroundColor: "#183153", width: '50%', marginRight: '2px' }} size="large" type="primary">Cập nhật</Button>
            <Button onClick={handleOpenPasswordDrawer} style={{ backgroundColor: "#183153", width: '50%', marginLeft: '2px' }} size="large" type="primary">Đổi mật khẩu</Button>
          </div>
          <Button style={{ width: '100%' }} size="large" danger type="primary">Xoá dữ liệu tài khoản</Button>
          <div className={cx("form-user")}>
            <CaretRightFilled onClick={handldeOpenFormUser} style={{ display: showInfo ? "none" : "inline-block", marginRight: '4px' }} />
            <CaretDownFilled onClick={handldeOpenFormUser} style={{ display: !showInfo ? "none" : "inline-block", marginRight: '4px' }} />
            <span onClick={handldeOpenFormUser} style={{ fontSize: '17px', fontWeight: 700, cursor: 'pointer' }}>Thông tin liên quan</span>
            {showInfo &&
              <div className={cx("form-user-input")}>
                <div style={{ display: 'flex', margin: '4px 4px', justifyContent: 'space-between' }}>
                  <p>Trường học</p>
                  <p style={{ color: 'blue' }}>Cập nhật</p>
                </div>
                <div className={cx("form-user-input-item")}>
                  <input placeholder="Nhập trường học" style={{ border: 'none', width: '100%', padding: '3px 2px', outline: 'none' }} />
                </div>
                <div className={cx("form-user-input-item")}>
                  <FacebookOutlined style={{ background: '#ccc', color: "#fff", borderRadius: '7px', fontSize: '24px', padding: '0px 3px' }} />
                  <input placeholder="Facebook" defaultValue={facebook ? facebook[0]?.Value : ''} style={{ border: "none", outline: "none", marginLeft: "12px", fontSize: '13px', width: '100%' }} />
                </div>
                <div className={cx("form-user-input-item")}>
                  <InstagramOutlined style={{ backgroundColor: "#ccc", color: "#fff", borderRadius: '7px', fontSize: '24px', padding: '0px 3px' }} />
                  <input placeholder="Instagram" defaultValue={instagram ? instagram[0]?.Value : ''} style={{ border: "none", outline: "none", marginLeft: "12px", fontSize: '13px', width: '100%' }} />
                </div>
                <div className={cx("form-user-input-item")}>
                  <YoutubeOutlined style={{ backgroundColor: "#ccc", color: "#fff", borderRadius: '7px', fontSize: '24px', padding: '0px 3px' }} />
                  <input placeholder="Youtube" defaultValue={youtube ? youtube[0]?.Value : ''} style={{ border: "none", outline: "none", marginLeft: "12px", fontSize: '13px', width: '100%' }} />
                </div>
                <div className={cx("form-user-input-item")}>
                  <TwitterOutlined style={{ backgroundColor: "#ccc", color: "#fff", borderRadius: '7px', fontSize: '24px', padding: '0px 3px' }} />
                  <input placeholder="Twitter" defaultValue={twitter ? twitter[0]?.Value : ''} style={{ border: "none", outline: "none", marginLeft: "12px", fontSize: '13px', width: '100%' }} />
                </div>
              </div>

            }

          </div>

        </Form>
      </Drawer>
      {/* Đổi Mật khẩu */}
      <Drawer
        title="Đổi mật khẩu"
        placement={placement}
        closable={false}
        onClose={handleClosePasswordDrawer}
        visible={showPasswordDrawer}
        style={{ width: '120%' }}
      >
        <Form
          name="changePassword"
          onFinish={onFinish}
          scrollToFirstError
        >
          {/* Thêm các trường nhập thay đổi mật khẩu vào đây */}
          <Form.Item
            name="oldPassword"
            label="Mật khẩu cũ"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu cũ!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="oldPassword"
            label="Mật khẩu mới"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu mới!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="oldPassword"
            label="nhập lại mật khẩu"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu !',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {/* Thêm các trường nhập khác (mật khẩu mới, xác nhận mật khẩu) cần thiết */}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đổi mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
      {/* //Quên Mật Khẩu */}
      <Drawer
        title="Quên mật khẩu"
        placement="left"
        closable={true}
        onClose={closePasswordResetForm}
        visible={showPasswordResetForm}
        key="left"
        style={{ width: "130%" }}
      >
         <Form
          name="changePassword"
          onFinish={onFinish}
          scrollToFirstError
        >
          {/* Thêm các trường nhập thay đổi mật khẩu vào đây */}
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Header;

const MenuMobile = ({ items, setToggle }) => {
  const { isAuthenticated, loginState, logout } = useAuth();
  const [expandedItems, setExpandedItems] = useState([]);
  const closeMenu = () => {
    // Đóng menu bằng cách xóa các mục đã mở
    setToggle(false);
  };
  const handleItemClick = (item) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter((i) => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };
  return (
    <div className={cx("menu-mobile")}>
      {isAuthenticated && (
        <ul className={cx("mb-list")}>
          <li>
            <span
              className={cx(
                "mb-link",
                expandedItems.includes("my-class") ? "expanded" : ""
              )}
              onClick={() => handleItemClick("my-class")}
            >
              Lớp học trực tuyến
            </span>
            {expandedItems.includes("my-class") && (
              <ul className={cx("sub-menu")}>
                {/* Add sub-menu items for "Lớp học trực tuyến" */}
                <li>
                  <Link
                    href="/my-class/item1"
                    className={cx("mb-link-sub")}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-class/item2"
                    className={cx("mb-link-sub")}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    Item 2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/subjects"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Subject
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Tin tức
            </Link>
          </li>
          <li>
            <Link
              href="/my-class"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Lớp học trực tuyến
            </Link>
          </li>
          <li>
            <Link
              href="/documents"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Tài liệu
            </Link>
          </li>
          <li>
            <Link
              href="/exam"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Đề thi
            </Link>
          </li>
          <li>
            <Link
              href="/teachers"
              className={cx("mb-link")}
              onClick={() => {
                closeMenu();
              }}
            >
              Teacher
            </Link>
          </li>
          <Button
            className={cx("logout-button-mobile")}
            onClick={() => {
              logout();
              closeMenu();
            }}
          >
            Đăng xuất
          </Button>
        </ul>
      )}
    </div>
  );
};
