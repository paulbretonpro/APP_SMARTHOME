export const useDate = () => {
  const getHours = (date: Date) =>
    date.getHours() >= 10
      ? date.getHours() + "h00"
      : "0" + date.getHours() + "h00";

  const getDate = (date: Date) =>
    date.getFullYear() + "/" + getMonth(date) + "/" + getDay(date);

  const getMonth = (date: Date) =>
    date.getMonth() >= 10 ? date.getMonth() : "0" + date.getMonth();

  const getDay = (date: Date) =>
    date.getDay() >= 10 ? date.getDay() : "0" + date.getDay();

  const fullDate = (date: Date | string) => {
    const dateTz = new Date(date);

    return getDate(dateTz) + " " + getHours(dateTz);
  };

  return {
    fullDate,
    getHours,
    getDate,
  };
};
