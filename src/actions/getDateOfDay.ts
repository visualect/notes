export default function getDateOfDay(location: string) {
  const params = new URLSearchParams(location);
  const year = Number(params.get("y"));
  const month = Number(params.get("m"));
  const day = Number(params.get("d"));

  return { year, month, day };
}
