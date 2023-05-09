import React from "react";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRegistersMutation } from "@/lib/Midleware/AuthQuery";
import { message } from "antd";
import { useRouter } from "next/router";

const cx = classNames.bind(style);

const Signup = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [registers, { data }] = useRegistersMutation();
  const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const key = "updatable";
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (data && data?.Error) {
    messageApi.open({
      type: "error",
      key: key,
      content: `${data.Title}`,
      duration: 1,
      style: {
        color: "red",
        marginTop: "80px",
      },
    });
  }
  if (data && !data?.Error) {
    messageApi.open({
      type: "success",
      key: key,
      content: `${data.Title}`,
      duration: 1,
      style: {
        color: "green",
        marginTop: "80px",
      },
    });
    setTimeout(() => {
      router.push("/auth/login");
    }, 1000);
  }
  const onSubmit = (value) => {
    const formData = new FormData();
    formData.append("Username", value.username);
    formData.append("Password", value.password);
    formData.append("GivenName", value.name);
    formData.append("PhoneNumber", value.phoneNumber);
    formData.append("RoleId", value.role);
    formData.append("GroupUserCode", "META");
    formData.append("Email", value.email);
    registers(formData);
  };

  return (
    <div className={cx("background")}>
      {contextHolder}
      <div className={cx("login")}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className={cx("titleSignup")}>Đăng ký</h1>
          <div className={cx("container_formSignup")}>
            <div className={cx("inputForm")}>
              <div className={cx("inputFormnputSignup")}>
                <TextField
                  label="Tên đăng nhập"
                  type="name"
                  autoComplete="current-password"
                  variant="standard"
                  className={cx("input")}
                  {...register("username", { required: true, minLength: 6 })}
                />
                {errors.username && errors.username.type == "required" && (
                  <p style={{ color: "red" }}>Vui lòng nhập tên đăng nhập!</p>
                )}
                {errors.username && errors.username.type == "minLength" && (
                  <p style={{ color: "red" }}>
                    Tên đăng nhập phải tối hiểu 6 kí tự
                  </p>
                )}
              </div>
              <div className={cx("inputFormnputSignup")}>
                <TextField
                  label="Mật khẩu"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  className={cx("input")}
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && errors.password.type == "required" && (
                  <p style={{ color: "red" }}>Vui lòng nhập mật khẩu!</p>
                )}
                {errors.password && errors.password.type == "minLength" && (
                  <p style={{ color: "red" }}>
                    Mật khẩu phải tối thiểu 6 kí tự
                  </p>
                )}
              </div>
              <div className={cx("inputFormnputSignup")}>
                <TextField
                  label="Tên hiển thị"
                  type="text"
                  autoComplete="current-password"
                  variant="standard"
                  className={cx("input")}
                  {...register("name", { required: true, minLength: 5 })}
                />
                {errors.name && errors.name.type == "required" && (
                  <p style={{ color: "red" }}>Vui lòng nhập tên!</p>
                )}
                {errors.name && errors.name.type == "minLength" && (
                  <p style={{ color: "red" }}>Tên phải tối thiểu 5 kí tự</p>
                )}
              </div>
            </div>
            <div className={cx("inputForm")}>
              <div className={cx("inputFormnputSignup")}>
                <TextField
                  label="Thư điện tử"
                  type="text"
                  autoComplete="current-password"
                  variant="standard"
                  className={cx("input")}
                  {...register("email", {
                    required: true,
                    pattern: regexEmail,
                  })}
                />
                {errors.email && errors.email.type == "required" && (
                  <p style={{ color: "red" }}>Vui lòng nhập email!</p>
                )}
                {errors.email && errors.email.type == "pattern" && (
                  <p style={{ color: "red" }}>Email sai cú pháp!</p>
                )}
              </div>
              <div className={cx("inputFormnputSignup")}>
                <TextField
                  label="Số điện thoại"
                  type="text"
                  autoComplete="current-password"
                  variant="standard"
                  className={cx("input")}
                  {...register("phone", {
                    required: true,
                    pattern: regexPhone,
                  })}
                />
                {errors.phone && errors.phone.type == "required" && (
                  <p style={{ color: "red" }}>Vui lòng nhập số điện thoại!</p>
                )}
                {errors.phone && errors.phone.type == "pattern" && (
                  <p style={{ color: "red" }}>
                    Số điện thoại phải là 1 dãy gồm 10 số!
                  </p>
                )}
              </div>
              <div className={cx("inputFormnputSignup")}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Vai trò
                  </InputLabel>
                  <NativeSelect
                    defaultValue={`3ee82a53-8c42-44ba-b549-8054d6f6b2db`}
                    inputProps={{
                      name: "Vai trò",
                      id: "uncontrolled-native",
                    }}
                    {...register("role")}
                  >
                    <option value={`3ee82a53-8c42-44ba-b549-8054d6f6b2db`}>
                      Học sinh
                    </option>
                    <option value={`a3c72f28-661a-4dbc-8c64-1646d95c45aa`}>
                      Giáo viên
                    </option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
          <div className={cx("return")}>
            <Link href="/auth/login" style={{ fontWeight: "800" }}>
              Quay lại
            </Link>
            <button type="submit" className={cx("btn-signup")}>
              Đăng kí
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
