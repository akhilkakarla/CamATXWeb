// App.jsx
import React from 'react';
import MapComponent from './MapComponent';

function App() {
  const containerStyle = {
  width: '100vw',
  height: '100vw', // for square layout on any screen
  maxWidth: '960px',
  maxHeight: '960px',
};
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>10×10 Map with Markers</h2>
      <MapComponent />
    </div>
  );
}

export default App;