import React from 'react';
import Card from './components/card';

const App = () => {

  const styles = {
    display: 'flex',
    gap: '20px'
    
  }

  return (
    <div style={styles}>
      <Card />
      <Card />
      <Card />
    </div>
    
  );
};

export default App;
