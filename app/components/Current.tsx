import { getCurrentDate } from "../utils/Date";
import styles from "../styles/current.module.css";

interface CurrentProps {
  data?: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_f: number;
    };
    location: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();

  if (!data || !data.current || !data.location) {
    return <p>Data is missing necessary properties.</p>;
  }

  const { current, location } = data;
  const { condition, temp_f } = current;
  const weatherIcon = condition.icon;
  const tempCelsius = (((temp_f - 32) * 5) / 9).toFixed();

  return (
    <div className={styles.current_date_con}>
      <div className={styles.current_first}>
        <p className={styles.current_date}>{currentDate}</p>
        <p className={styles.current_location}>
          {location.name}, {location.region}
        </p>
        <p className={styles.current_condition}>{condition.text}</p>

        <p className={styles.current_temp}>{tempCelsius}°C</p>
      </div>
      <div className={styles.current_second}>
        {" "}
        {weatherIcon && (
          <img src={weatherIcon} alt="icon" className={styles.current_img} />
        )}
      </div>
    </div>
  );
};

export default Current;
