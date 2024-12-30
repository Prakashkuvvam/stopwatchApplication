import React from 'react';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-12 rounded-xl shadow-lg">
        <Stopwatch />
      </div>
    </div>
  );
}

export default App;