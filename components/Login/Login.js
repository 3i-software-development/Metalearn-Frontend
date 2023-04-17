import React from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import QrCode from "./qrCode.png";
const cx = classNames.bind(styles);
export default function Login() {
    console.log(QrCode)
    return (
        <div className={cx("background")}>
            
            <div className={cx("login")}>
            
                <div className={cx("qr-code")}>
                    <img src={QrCode.src} alt="#"></img>
                </div>

                <div className={cx("mem-log")}>
                    <form>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <input type='text' placeholder='Tên đăng nhập' />
                        </div>
                        <div>
                            <i class="fa-solid fa-lock"></i>
                            <input type='password' placeholder='Mật khẩu' />
                            {/* <i className={cx("fa-solid fa-eye")}></i> */}
                        </div>
                        <div className={cx("remember")}>
                            <input type='radio'></input>
                            <h4>Nhớ mật khẩu</h4>
                        </div>
                        <button type='submit'>Đăng nhập</button>
                    </form>


                    <div className={cx("forgot-pw")}>
                        <div><a>Quên mật khẩu</a></div>
                        <div><a>Đăng ký</a></div>
                    </div>
                    <div className={cx("option-login")}>
                        <a><i class="fa-brands fa-facebook"></i>Đăng nhập bằng Facebook</a>
                        <a><i class="fa-brands fa-apple"></i>Đăng nhập bằng Apple</a>
                        <a><i class="fa-brands fa-google"></i>Đăng nhập bằng Google</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
