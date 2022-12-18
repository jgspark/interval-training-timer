import React, {useState} from 'react';
import TimerView from './src/view/TimerView';

const App = () => {
  const state = useState(10);

  return <TimerView remainingTime={state} />;
};

export default App;
