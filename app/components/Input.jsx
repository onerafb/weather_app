"use client";

import styles from "../styles/input.module.css"



const Input = ({ handleSearch, setLocation }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search City"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
        className={styles.input}
      />
    </form>
  );
};

export default Input;
