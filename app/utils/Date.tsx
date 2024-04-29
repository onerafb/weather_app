export const getCurrentDate = () => {
  const CurrentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return CurrentDate;
};
