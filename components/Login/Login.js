import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import QrCode from "./qrCode.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { UserLogin } from "@/pages/api/CallAPI";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { Button, message } from 'antd';

const cx = classNames.bind(styles);

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  
  const key = 'updatable';
  const info = () => {
    messageApi.open({
      key: key,
      content: 'Đăng nhập thành công ',
    });
    message.config({
      backGroundColor:"red"
    })
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Router = useRouter();
  const { data, isLoading, isSuccess, isError, error, mutate } = useMutation(
    UserLogin,
    {
      onSuccess: () => {},
    }
  );
  const onSubmit = (value) => {
    const { username, password } = value;
    mutate({ username, password });
    
  };
  return (
    <div className={cx("background")}>
      {contextHolder}
      <div className={cx("login")}>
        <div className={cx("qr-code")}>
          <Image src={QrCode.src} alt="#" width="200" height="200"></Image>
        </div>

        <div className={cx("mem-log")}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Tên đăng nhập"
                {...register("username", { required: true, minLength: 5 })}
              />
            </div>
            {errors.username && errors.username.type == "required" && (
              <p>Vui lòng nhập username</p>
            )}
            {errors.username && errors.username.type == "minLength" && (
              <p>UserName phải tối hiểu 5 kí tự</p>
            )}
            <div>
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Mật khẩu"
                {...register("password", { required: true, maxLength: 20 })}
              />
            </div>
            {errors.username && errors.username.type == "required" && (
              <p>Vui lòng nhập password</p>
            )}
            <div className={cx("remember")}>
              <input type="radio"></input>
              <h4>Nhớ mật khẩu</h4>
            </div>
            <div className={cx("logins")}>
              <button type="submit" onClick={info}>Đăng nhập</button>
            </div>
          </form>

          <div className={cx("forgot-pw")}>
            <div>
              <a>Quên mật khẩu</a>
            </div>
            <div>
              <a>Đăng ký</a>
            </div>
          </div>
          <div className={cx("option-login")}>
            <a>
              <i className="fa-brands fa-facebook"></i>Đăng nhập bằng Facebook
            </a>
            <a>
              <i className="fa-brands fa-apple"></i>Đăng nhập bằng Apple
            </a>
            <a>
              <i className="fa-brands fa-google"></i>Đăng nhập bằng Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
