import styles from "../styles/weather_details.module.css";

interface WeatherDetailsProps {
  data: {
    current: {
      wind_mph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_f: number;
      vis_km: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  return (
    <div className={styles.weather_detail_container}>
      <div>

      <div>
        <p className={styles.weather_value_text}>Wind Speed</p>
        <p className={styles.weather_value}>{data.current.wind_mph} mph</p>
      </div>
      <div>
        <p className={styles.weather_value_text}>Humidity</p>
        <p className={styles.weather_value}>{data.current.humidity} %</p>
      </div>
      <div>
        <p className={styles.weather_value_text}>Wind Direction</p>
        <p className={styles.weather_value}>{data.current.wind_dir} </p>
      </div>
      <div>
        <p className={styles.weather_value_text}>Sunrise</p>
        <p className={styles.weather_value}>{data.forecast.forecastday[0].astro.sunrise}</p>
      </div>
      <div>
        <p className={styles.weather_value_text}>Sunset</p>
        <p className={styles.weather_value}>{data.forecast.forecastday[0].astro.sunset}</p>
      </div>
      <div>
        <p className={styles.weather_value_text}>Feel Like</p>
        <p className={styles.weather_value}>{data.current.feelslike_f}F</p>
      </div>
      <div>
        <p className={styles.weather_value_text}>Air Pressure</p>
        <p className={styles.weather_value}>{data.current.pressure_mb} hpa</p>
      </div>
      <div>
        <p className={styles.weather_value_text}>Visibility</p>
        <p className={styles.weather_value}>{data.current.vis_km} Km</p>
      </div>
      </div>

    </div>
  );
};

export default WeatherDetails;
