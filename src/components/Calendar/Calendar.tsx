import { daysOfWeek } from "@/lib/dates";

function Calendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based in JavaScript

  const getDay = (date: number) => {
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
          weekDays.push(<td key={`${week}-${weekday}`}></td>);
        } else {
          weekDays.push(<td key={`${week}-${weekday}`}>{day}</td>);
          day++;
        }
      }

      calendar.push(<tr key={week}>{weekDays}</tr>);
    }

    return calendar;
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          {daysOfWeek.map((item) => (
            <th key={item} className="font-normal text-gray-500">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{createCalendar()}</tbody>
    </table>
  );
}

export default Calendar;
