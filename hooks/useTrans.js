import { ca } from "@/public/lang/ca";
import { fr } from "@/public/lang/fr";
import { ja } from "@/public/lang/ja";
import { ko } from "@/public/lang/ko";
import { la } from "@/public/lang/la";
import { my } from "@/public/lang/my";
import { zh_cn } from "@/public/lang/zh-cn";
import { useRouter } from "next/router";
import { en } from "../public/lang/en";
import { vi } from "../public/lang/vi";

const useTrans = () => {
  const { locale } = useRouter();

  let trans = vi;

  switch (locale) {
    case "vi": trans = vi;
      break;
    case "en": trans = en;
      break;
    case "fr": trans = fr;
      break;
    case "ja": trans = ja;
      break;
    case "ko": trans = ko;
      break;
    case "zh-cn": trans = zh_cn;
      break;
    case "ca": trans = ca;
      break;
    case "my": trans = my;
      break;
    case "la": trans = la;
      break;
  }

  return trans;
};

export default useTrans;
