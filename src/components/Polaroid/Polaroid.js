import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import EXIF from 'exif-js';
import styles from './styles.scss';

// codepen flip taken from: https://codesandbox.io/embed/01yl7knw70
const Polaroid = ({ source, caption, alt }) => {
  const [date, setDate] = useState(undefined);
  const [flipped, setFlipped] = useState(false);
  const imgRef = useRef();
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 250, friction: 50 }
  });

  React.useEffect(() => {
    if (imgRef && imgRef.current) {
      imgRef.current.addEventListener('load', imageLoad);
      return () => imgRef.current.removeEventListener('load');
    }
  }, [imgRef]);

  const imageLoad = (e) => {
    const source = e.target;
    EXIF.getData(source, function() {
      const imgTimetamp = EXIF.getTag(this, 'DateTime');
      var [year, month, day] = imgTimetamp.split(/\D/);
      setDate(`${month}/${day}/${year}`);
    });
  }

  const front = (
    <animated.div
      className={styles.polaroidContainer}
      style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
    >
    <div className={styles.body}>
      <div className={styles.imgContainer}>
        <img
          src={source}
          alt={alt}
          ref={imgRef}
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
      <div className={styles.body}>
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
