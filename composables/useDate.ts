export const useDate = () => {
  const getHours = (date: Date) =>
    date.getHours() >= 10
      ? date.getHours() + "h00"
      : "0" + date.getHours() + "h00";

  const getDate = (date: Date) =>
    date.getFullYear() + "/" + getMonth(date) + "/" + getDay(date);

  const getMonth = (date: Date) =>
    date.getMonth() >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);

  const getDay = (date: Date) =>
    date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();

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
