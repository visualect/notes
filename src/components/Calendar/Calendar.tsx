import { daysOfWeek } from "@/lib/dates";
import Cell from "./Cell";
import EmptyCell from "./EmptyCell";

function Calendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based in JavaScript

  const getDay = (date: Date) => {
    let day = date.getDay();
    if (day === 0) day = 7; // Make Sunday (0) the last day
    return day - 1;
  };

  const createCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
    const firstDayOfWeek = getDay(firstDayOfMonth);

    const calendar = [];
    let day = 1;

    for (let week = 0; day <= daysInMonth; week++) {
      const weekDays = [];

      for (let weekday = 0; weekday < 7; weekday++) {
        if ((week === 0 && weekday < firstDayOfWeek) || day > daysInMonth) {
          weekDays.push(<EmptyCell key={`${week}-${weekday}`} />);
        } else {
          weekDays.push(
            <Cell
              key={`${week}-${weekday}`}
              year={currentYear}
              month={currentMonth}
              day={day}
              blocked={currentDate.getDate() > day}
            />
          );
          day++;
        }
      }

      calendar.push(
        <div className="grid grid-cols-7 gap-2" key={week}>
          {weekDays}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="flex flex-col justify-between gap-8 w-full h-full">
      <div className="grid grid-cols-7">
        {daysOfWeek.map((item) => (
          <div
            key={item}
            className="flex justify-center font-normal text-gray-500 p-0"
          >
            {item}
          </div>
        ))}
      </div>
      {createCalendar()}
    </div>
  );
}

export default Calendar;
