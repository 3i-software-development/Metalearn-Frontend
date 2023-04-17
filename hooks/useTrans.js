import { useRouter } from "next/router";
import { en } from "../public/lang/en";
import { vi } from "../public/lang/vi";

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === "vi" ? vi : en;

  return trans;
};

export default useTrans;
