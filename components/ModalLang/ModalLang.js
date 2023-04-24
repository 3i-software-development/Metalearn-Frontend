import { Modal } from "antd";
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

const ModalLang = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const changeLang = (lang) => {
    router.push("/" + router.pathname, "/" + router.asPath, { locale: lang });
    setOpen(false);
  };

  return (
    <>
      <BiWorld className={cx("icon")} onClick={showModal} />
      <Modal
        open={open}
        title="Chọn ngôn ngữ"
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <div className={cx("lang-list")} id="google_translate_element">
          <p className={cx("lang-member")} onClick={() => changeLang("vi")}>
            Tiếng Việt
          </p>
          <p className={cx("lang-member")} onClick={() => changeLang("en")}>
            English
          </p>
          <p className={cx("lang-member")} onClick={() => changeLang("fr")}>
            Français
          </p>
          <p className={cx("lang-member")} onClick={() => changeLang("ja")}>
            日本語
          </p>
          <p className={cx("lang-member")} onClick={() => changeLang("ko")}>
            한국인
          </p>
          <p className={cx("lang-member")} onClick={() => changeLang("zh-cn")}>
            中文
          </p>
          <p className={cx("lang-member")} onClick={() => changeLang("ca")}>
            កម្ពុជា។
          </p>
          <p className={cx("lang-member")} onClick={() => changeLang("my")}>
            မြန်မာဘာသာ
          </p>
          <p className={cx("lang-member")} onClick={() => changeLang("la")}>
            ພາສາລາວ
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ModalLang;
