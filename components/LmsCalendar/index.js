import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = dayjsLocalizer(dayjs)

const LmsCalendar = () => {
  return (
    <div>
      <h4 style={{marginBottom: '20px', fontWeight: 'bold', fontSize: '25px'}}>Lịch học</h4>
    <Calendar
      localizer={localizer}
      // events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
  );
};


export default LmsCalendar