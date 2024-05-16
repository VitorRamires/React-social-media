import React from 'react';
import styles from '../Forms/Input.module.css';

const Input = ({ label, name, type, value, onChange, error, onBlur }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <input
          className={styles.input}
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {error && <p className={styles.erro}>{error}</p>}
      </div>
    </>
  );
};

export default Input;
