import React from 'react';
import Counter from './Counter';
import Timer from './Timer';
import './App.css';

const App: React.FC = () => (
  <div className="container">
    <h1>カウンター</h1>
    <Counter />
    <h1>タイマー</h1>
    <Timer limit={60} />
  </div>
);

export default App;
