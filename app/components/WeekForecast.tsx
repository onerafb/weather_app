import styles from "../styles/week.module.css";

interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_f: number;
    mintemp_f: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
}
const WeekForecast = ({ data }: WeekForecastProps) => {
  const convertFahrenheitToCelsius = (fahrenheit: number): number => {
    return Math.round((fahrenheit - 32) / 1.8);
  };

  const getShortWeekday = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: "short" };
    return new Date(dateString).toLocaleString("en-US", options);
  };
  return (
    <div className={styles.week_con}>
      <div>
        {data.forecast.forecastday.map((day, index) => (
          <div key={index}>
            <p className={styles.week_date}>{getShortWeekday(day.date)}</p>
            <img src={day.day.condition.icon} alt="day icon" />
            <p className={styles.week_H}>
              H {convertFahrenheitToCelsius(day.day.maxtemp_f)}°C
            </p>
            <p className={styles.week_L}>
              L {convertFahrenheitToCelsius(day.day.mintemp_f)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;
