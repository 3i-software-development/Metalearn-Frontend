import React from "react";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import Section from "../Section/Section";

const cx = classNames.bind(style);

const Signup = () => {
  return (
    <Section>
      <form>
        <h1 className={cx("titleSignup")}>Signup</h1>
        <div className={cx("container_formSignup")}>
          <div className={cx("inputForm")}>
            <div className={cx("inputFormnputSignup")}>
              <TextField
                id="standard-password-input"
                label="Tên đăng nhập"
                type="name"
                autoComplete="current-password"
                variant="standard"
                className={cx("input")}
              />
            </div>
            <div className={cx("inputFormnputSignup")}>
              <TextField
                id="standard-password-input"
                label="Mật khẩu"
                type="password"
                autoComplete="current-password"
                variant="standard"
                className={cx("input")}

              />
            </div>
            <div className={cx("inputFormnputSignup")}>
              <TextField
                id="standard-password-input"
                label="Tên hiển thị"
                type="text"
                autoComplete="current-password"
                variant="standard"
                className={cx("input")}

              />
            </div>
          </div>
          <div className={cx("inputForm")}>
            <div className={cx("inputFormnputSignup")}>
              <TextField
                id="standard-password-input"
                label="Thư điện tử"
                type="text"
                autoComplete="current-password"
                variant="standard"
                className={cx("input")}

              />
            </div>{" "}
            <div className={cx("inputFormnputSignup")}>
              <TextField
                id="standard-password-input"
                label="Số điện thoại"
                type="text"
                autoComplete="current-password"
                variant="standard"
                className={cx("input")}

              />
            </div>
            <div className={cx("inputFormnputSignup")}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Vai trò
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "Vai trò",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Học sinh</option>
                  <option value={20}>Giao viên</option>
                  <option value={30}>Bảo vệ</option>
                </NativeSelect>
              </FormControl>
            </div>
          </div>
          <div className={cx("btn-signup")}>
          <button>Đăng kí</button>
        </div>
        </div>
       
      </form>
    </Section>
  );
};

export default Signup;