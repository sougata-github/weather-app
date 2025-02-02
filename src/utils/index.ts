export const convertTemperature = (kelvin: number, unit: "C" | "F") => {
  return unit === "F" ? ((kelvin - 273.15) * 9) / 5 + 32 : kelvin - 273.15;
};

export const formatDate = (dt_txt: string) => {
  const date = new Date(dt_txt);
  return {
    day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date),
    date: new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
    }).format(date),
  };
};
