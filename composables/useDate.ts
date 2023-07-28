export const useDate = () => {
  const usableDate = (date: string | Date): Date => new Date(date);

  const getHours = (date: string | Date) => {
    const dateUse = usableDate(date);
    return dateUse.getHours() >= 10
      ? dateUse.getHours() + "h00"
      : "0" + dateUse.getHours() + "h00";
  };

  const getDate = (date: string | Date) => {
    const dateUse = usableDate(date);
    return (
      dateUse.getFullYear() + "/" + getMonth(dateUse) + "/" + getDay(dateUse)
    );
  };

  const getMonth = (date: Date) =>
    date.getMonth() >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);

  const getDay = (date: Date) =>
    date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();

  const fullDate = (date: Date | string) => {
    return getDate(date) + " " + getHours(date);
  };

  const todayUTC = computed(() => {
    const current00 = new Date();
    const current23 = new Date();
    current00.setHours(0);
    current00.setMinutes(0);
    current00.setSeconds(0);

    current23.setHours(23);
    current23.setMinutes(0);
    current23.setSeconds(0);

    return {
      start: current00.toISOString(),
      end: current23.toISOString(),
    };
  });

  const isBetweenNowAndLessTwoHours = (date: string | Date) => {
    const lastRecordHour = new Date(date).getHours();
    const currentHour = new Date().getHours();
    const currentLessTwoHours = currentHour - 2;
    return (
      currentLessTwoHours < lastRecordHour && lastRecordHour <= currentHour
    );
  };

  return {
    fullDate,
    getHours,
    getDate,
    todayUTC,
    isBetweenNowAndLessTwoHours,
  };
};
