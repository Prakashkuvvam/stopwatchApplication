import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time => time + 10), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = useCallback(() => {
    setIsRunning(!isRunning);
  }, [isRunning]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTime(0);
  }, []);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="flex items-center space-x-2">
        <Timer className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-800">Stopwatch</h1>
      </div>
      
      <div className="text-6xl font-mono font-bold text-gray-900">
        {formatTime(time)}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleStartStop}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
            isRunning
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          <span>{isRunning ? 'Pause' : 'Start'}</span>
        </button>

        <button
          onClick={handleReset}
          className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-white bg-gray-500 hover:bg-gray-600 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;