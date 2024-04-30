"use client";
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Current from "./components/Current";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
import styles from "./styles/page.module.css";
const Home = () => {
  // State
  const [data, setData] = useState({});
  const [location, setLocation] = useState("satara");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.weatherapi.com/v1/forecast.json?key=8dba1270f9ca41689af174404242704&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setError("");
      } catch (error) {
        setError("City not found / Slow internet connection.");
        setData({});
      } finally {
        setLoading(false);
      }
    }
  };

  // Fetch data on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setError("");
      } catch (error) {
        setError("City not found / Slow internet connection.");
        setData({});
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Content based on data, loading, and error
  let content;
  if (loading) {
    content = (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h2>Loading...</h2>
      </div>
    );
  } else if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h2>Loading...</h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <p style={{ textAlign: "center", marginTop: "5rem" }}>{error}</p>
      </div>
    );
  } else {
    content = (
      <div className={styles.info_container}>
        <div>
          <Current data={data} />
          <WeatherDetails data={data} />
        </div>
        <WeekForecast data={data} />
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <Input handleSearch={handleSearch} setLocation={setLocation} />
      {content}
    </div>
  );
};

export default Home;
