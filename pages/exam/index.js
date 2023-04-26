import Exam from "@/components/Exam/Exam";
import React from "react";
import CartItem from "@/components/Card/DocumentCart";
import Document_Cart from "@/components/Document_Cart";
import SearchAndAddSubjects from "@/components/SearchAndAddSubjects";
import TeachingResults from "@/components/Chart/TeachingResults";

const Index = () => {
  return (
    <div>
      {/* <SearchAndAddSubjects/> */}
      {/* <Document_Cart /> */}
      {/* <CartItem /> */}
      <TeachingResults/>
      <Exam />
    </div>
  );
};

export default Index;
