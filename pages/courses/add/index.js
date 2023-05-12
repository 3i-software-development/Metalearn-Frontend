import React from "react";
import SliderBar from "@/components/Menu";
import Section from "@/components/Section/Section";

const Add = () => {
  return (
    <Section>
      <div className='page-main'>
        <div className="sidebar-left">
          <SliderBar />
        </div>
        <div>
          <h1>Quản lý khóa học</h1>
        </div>
      </div>
    </Section>
  )
}

export default Add