import ViewExamSchedule from "@/components/ViewExamSchedule/ViewExamSchedule";
import classNames from "classnames/bind";
import styles from "./index.module.scss"

const cx = classNames.bind(styles);

const Index = () => {
  const year = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div>
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <h1 className={cx("ViewExamSchedule")} style={{marginTop: "10px"}}>Lịch thi trong tháng</h1>
            <i style={{fontSize: "70px", marginLeft: "50px"}} class="fa-regular fa-calendar-days"></i>
        </div>
        
        <div className="table-container">
          {months.map((month) => (
            <div key={month} style={{ margin: "20px" }}>
              <h2 style={{ width: "50%", color: "red", textAlign: "center"}}>{`Tháng ${month}`}</h2>
              <div>
                <ViewExamSchedule month={month} year={year} />
              </div>
            </div>
          ))}
        </div>
     
      </div>
    </div>
  );
};

export default Index;

