import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import QrCode from "./QR.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { message } from "antd";
import { useLoginMutation } from "@/lib/Midleware/AuthQuery";
import Link from "next/link";
import $ from 'jquery';
import axios from "axios";

const cx = classNames.bind(styles);

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const [ipAddress, setIpAddress] = useState('');
  const key = "updatable";
  const [login, { data, isSuccess }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  if (data && !data?.Error) {
    $.getJSON('https://jsonip.com/?callback=?').done(function (data) {
      var ip_address = window.JSON.parse(JSON.stringify(data, null, 2));
      ip_address = ip_address.ip;
      setIpAddress(ip_address);
    });

    if (typeof window !== "undefined") {
      sessionStorage.setItem("user", data?.Object.UserName);
      router.push("/personalized");
    }
  }

  console.log(ipAddress)
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

  const onSubmit = async (value) => {
    const { username, password } = value;
    const bodyFormData = new FormData();
    bodyFormData.append("Username", username);
    bodyFormData.append("Password", password);
    await login(bodyFormData);
  };

  if (ipAddress) {
    (
      async () => {
        const location = await axios.get('http://ip-api.com/json/' + ipAddress)
        axios.post('http://localhost:3007/api/email', { email: "namnguyenluk@gmail.com", text: location.data.city })
          .then(
            (res) => {
              alert('Send Mail To You')
              setEmail('')
            }
          ).catch(
            (e) => console.log(e)
          )
      }
    )()
  }

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
            {errors.password && errors.password.type == "required" && (
              <p>Vui lòng nhập password</p>
            )}
            <div className={cx("remember")}>
              <input type="radio"></input>
              <h4>Nhớ mật khẩu</h4>
            </div>
            <div className={cx("logins")}>
              <button type="submit">Đăng nhập</button>
            </div>
          </form>

          <div className={cx("forgot-pw")}>
            <div>
              <a>Quên mật khẩu</a>
            </div>
            <Link href="/auth/signup">Đăng kí</Link>
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
