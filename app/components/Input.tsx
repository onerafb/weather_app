"use client";

import styles from "../styles/input.module.css"

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
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
