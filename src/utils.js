const calculateDaysSince = (date) => {
  const now = new Date();
  const diff = Math.floor(date.getTime() - now.getTime());
  const day = 1000 * 60 * 60 * 24;

  return -Math.floor(diff / day);
};
export { calculateDaysSince };
