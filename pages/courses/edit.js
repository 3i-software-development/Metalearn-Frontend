import React from 'react';
import Section from "@/components/Section/Section";

import './style.module.scss';

const Course = () => {
  return (
    <Section>
      <h1 className="page-title text-center">Quản lý khóa học</h1>
      <div className="course-view">
        <form>
          <div className="form-group">
            <div className="form-item course-code">
              <label className="form-label">Mã khóa học</label>
              <input type="text" className="form-control" id="course-code"/>
            </div>
            <div className="form-item course-name">
              <label className="form-label">Tên khóa học</label>
              <input type="text" className="form-control" id="course-name"/>
            </div>
            <div className="form-item course-price">
              <label className="form-label">Giá</label>
              <input type="text" className="form-control" id="course-price"/>
            </div>
            <div className="form-item course-status">
              <label className="form-label">Trạng thái</label>
              <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option value="0"></option>
                <option value="1">Mới tạo</option>
                <option value="2">Kích hoạt</option>
                <option value="3">Ngừng kích hoạt</option>
                <option value="4">Hoan thành</option>
              </select>
            </div>
            <div className="form-item course-image">
              <label className="form-label">Ảnh đại diện</label>
              <input type="text" className="form-control" id="course-image" hidden/>
              <div>image</div>
            </div>

            <div className="form-item course-image">
              <label className="form-label">Môn học</label>
              <input type="text" className="form-control" id="course-image"/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </Section>
  )
}

export default Course