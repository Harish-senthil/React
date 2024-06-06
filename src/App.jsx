import React from 'react';
import colu from './components/card';  // Import colu from card.js

const App = () => {
  const styles = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px'
  };

  return (
    <div style={styles}>
      <colu.Card />
      <colu.Card1 />
      <colu.Card2 />
    </div>
  );
};

export default App;
