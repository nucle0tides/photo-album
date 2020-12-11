import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './styles.scss';

// codepen flip taken from: https://codesandbox.io/embed/01yl7knw70
const Polaroid = ({ source, caption, alt, data }) => {
  const [date, setDate] = useState(undefined);
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 250, friction: 50 }
  });

  useEffect(() => {
    const { ModifyDate: captureDate } = data;
    if (captureDate) {
      let [year, month, day] = captureDate.split(/\D/);
      setDate(`${month}/${day}/${year}`);
    }
  }, [data]);

  const front = (
    <animated.div
      className={styles.polaroidContainer}
      style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
    >
      <div className={styles.frontBody}>
        <div className={styles.imgContainer}>
          <img
            data-loading
            data-src={source}
            alt={alt}
          />
        </div>
        <div className={styles.dateContainer}>{date}</div>
      </div>
    </animated.div>
  );

  const back = (
    <animated.div
      className={styles.polaroidContainer}
      style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(-180deg)`) }}
    >
      <div className={styles.backBody}>
        <span>
          {caption}
        </span>
      </div>
    </animated.div>
  );

  return (
    <div
      className={styles.root}
      onClick={() => setFlipped(state => !state)}
    >
      {front}
      {back}
    </div>
  );
};

export default Polaroid;
