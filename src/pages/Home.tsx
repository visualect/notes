import Calendar from "../components/Calendar/Calendar";
import DateDisplay from "../components/Time/DateDisplay";
import TimeDisplay from "../components/Time/TimeDisplay";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 py-20 ">
      <section className="flex flex-row justify-between items-center">
        <DateDisplay />
        <TimeDisplay />
      </section>
      <section>
        <Calendar />
      </section>
    </div>
  );
}
