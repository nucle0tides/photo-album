import React from 'react';
import styles from './styles.scss';

const Polaroid = ({ source, caption }) => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.body}>
        <img
          src={source}
          alt="rabbit"
        />
        <span>{caption}</span>
      </div>
    </div>
  </div>
);

export default Polaroid;
