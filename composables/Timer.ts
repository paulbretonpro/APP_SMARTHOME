export const useRefreshData = () => {
  const { $dayjs } = useNuxtApp();
  const timer1min = ref(0);
  const timer20min = ref(0);

  setInterval(
    () =>
      timer1min.value > 100 ? (timer1min.value = 0) : (timer1min.value += 1),
    50 * 60000
  );

  setInterval(
    () =>
      timer20min.value > 100 ? (timer20min.value = 0) : (timer20min.value += 1),
    20 * 60000
  );

  const hasAlrealdyValueThisHour = (lastUpdated: Date): boolean => {
    return $dayjs(lastUpdated).hour() === $dayjs().hour();
  };

  return {
    timer1min,
    timer20min,
    hasAlrealdyValueThisHour,
  };
};
