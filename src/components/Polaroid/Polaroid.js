import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import styles from './styles.scss';

// codepen flip taken from: https://codesandbox.io/embed/01yl7knw70
const Polaroid = ({ source, caption, alt }) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 250, friction: 50 }
  });

  const front = (
    <animated.div
      className={styles.container}
      style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
    >
    <div className={styles.body}>
      <img
        src={source}
        alt={alt}
      />
      <span>{caption}</span>
    </div>
    </animated.div>
  );

  const back = (
    <animated.div
      className={styles.container}
      style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(-180deg)`) }}
    >
      <div className={styles.body}>
        <span>{caption}</span>
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
