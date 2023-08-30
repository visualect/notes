export default function areDatesEqual(d1: number, d2: number) {
  const day1 = new Date(d1).getDate();
  const month1 = new Date(d1).getMonth();
  const year1 = new Date(d1).getFullYear();

  const day2 = new Date(d2).getDate();
  const month2 = new Date(d2).getMonth();
  const year2 = new Date(d2).getFullYear();

  if (day1 === day2 && month1 === month2 && year1 === year2) {
    return true;
  }

  return false;
}
