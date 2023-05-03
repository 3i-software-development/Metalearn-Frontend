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
          <h1 className={cx("titleSignup")}>Signup</h1>
          <div className={cx("container_formSignup")}>
            <div className={cx("inputForm")}>
              <div className={cx("inputFormnputSignup")}>
                <TextField
                  label="Tên đăng nhập"
                  type="name"
                  autoComplete="current-password"
                  variant="standard"
                  className={cx("input")}
                  {...register("username", { required: true, minLength: 5 })}
                />
                {errors.username && errors.username.type == "required" && (
                  <p>Vui lòng nhập username</p>
                )}
                {errors.username && errors.username.type == "minLength" && (
                  <p>UserName phải tối hiểu 5 kí tự</p>
                )}
              </div>
              <div className={cx("inputFormnputSignup")}>
                <TextField
                  label="Mật khẩu"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  className={cx("input")}
                  {...register("password", { required: true, minLength: 5 })}
                />
                {errors.password && errors.password.type == "required" && (
                  <p>Vui lòng nhập password</p>
                )}
                {errors.password && errors.password.type == "minLength" && (
                  <p>Password phải tối hiểu 5 kí tự</p>
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
                  <p>Vui lòng nhập name</p>
                )}
                {errors.name && errors.name.type == "minLength" && (
                  <p>Name phải tối hiểu 5 kí tự</p>
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
                  <p>Vui lòng nhập Email</p>
                )}
                {errors.email && errors.email.type == "pattern" && (
                  <p>Email phải tối hiểu 5 kí tự</p>
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
                  <p>Vui lòng nhập Phone Number</p>
                )}
                {errors.phone && errors.phone.type == "pattern" && (
                  <p>Phone Number phải là số và là 10 kí tự</p>
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
                      Gíao viên
                    </option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
          <div className={cx("btn-signup")}>
            <Link href="/auth/login">Quay lai</Link>
            <button type="submit">Đăng kí</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
