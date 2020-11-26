import React from 'react';
import Polaroid from './components/Polaroid/Polaroid';
import './theme/theme.scss';

const App = () => {
  const caption = 'the chances of being killed by a rabbit are slim, but not zero';
  const source = 'http://placerabbit.com/rabbit/300x300.jpg';
  return (
    <>
      <Polaroid
        caption={caption}
        source={source}
      />
      <Polaroid
        caption={caption}
        source={source}
      />
      <Polaroid
        caption={caption}
        source={source}
      />
      <Polaroid
        caption={caption}
        source={source}
      />
    </>
  );
};

export default App;
