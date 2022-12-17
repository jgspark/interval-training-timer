import React, { useState } from "react";
import TimerView from "./src/view/TimerView";

const App = () => {

  return (
    <TimerView remainingTime={30} />
  );
};

export default App;
