let add = (a: number, b: number): number => {
  return a + b;
};

// Kondisi yang menghentikan ekseskusi sebelum sampai akhir anotasinya adalah never
const throwError = (message: string): never => {
  throw new Error(message);
};

// use void for function that no have return
const printWord = (): void => {
  console.log("print");
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeatherES6 = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};
