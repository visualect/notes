import { daysOfWeek } from "@/lib/dates";
import Cell from "./Cell";
import EmptyCell from "./EmptyCell";
import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const monthNames = [
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

function Calendar() {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1);

  const getDay = (date: Date) => {
    let day = date.getDay();
    if (day === 0) day = 7;
    return day - 1;
  };

  const createCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
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
              blocked={
                currentDate.getMonth() + 1 > currentMonth &&
                currentDate.getFullYear() >= currentYear
              }
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

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const onChangeMonthBack = () => {
    if (
      currentDate.getMonth() + 1 >= currentMonth &&
      currentDate.getFullYear() >= currentYear
    )
      return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const onChangeMonthForward = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center mb-8">
        <div>
          {monthNames[currentMonth]} {currentYear}
        </div>
        <div className="flex flex-row gap-8">
          <div
            onClick={onChangeMonthBack}
            className="hover:text-blue-500 cursor-pointer"
          >
            <MdArrowBackIos size={20} />
          </div>
          <div
            onClick={onChangeMonthForward}
            className="hover:text-blue-500 cursor-pointer"
          >
            <MdArrowForwardIos size={20} />
          </div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-col justify-between gap-2 sm:gap-4 md:gap-8 w-full h-full aspect-square"
      >
        <div className="grid grid-cols-7">
          {daysOfWeek.map((item) => (
            <div
              key={item}
              className="flex justify-center font-normal text-xl sm:text-2xl "
            >
              {item}
            </div>
          ))}
        </div>
        {createCalendar()}
      </motion.div>
    </>
  );
}

export default Calendar;
