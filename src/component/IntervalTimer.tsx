import React, {useState} from 'react';
import {Timer} from 'react-native-progress-timer';

interface IntervalTimerProps {
  trainingTimer: number;
  waitTimer: number;
  statusColor: string;
  round: number;
}

const TIMER_STATE = {
  DEFAULT: {
    state: 'DEFAULT',
    play: true,
    pause: false,
    stop: true,
    resume: false,
  },
  PLAY: {
    state: 'PLAY',
    play: false,
    pause: true,
    stop: true,
    resume: false,
  },
  PAUSE: {
    state: 'PAUSE',
    play: false,
    pause: true,
    stop: true,
    resume: false,
  },
  STOP: {
    state: 'STOP',
    play: true,
    pause: false,
    stop: true,
    resume: false,
  },
  RESUME: {
    state: 'RESUME',
    play: false,
    pause: false,
    stop: true,
    resume: true,
  },
} as const;

type TIMER_STATE = typeof TIMER_STATE[keyof typeof TIMER_STATE];

const IntervalTimer = (props: IntervalTimerProps) => {
  const {trainingTimer, waitTimer, statusColor} = props;

  const [timerState, setTimerState] = useState<TIMER_STATE>(TIMER_STATE.PLAY);

  return (
    <Timer
      // state={timerState}
      remainingTime={trainingTimer}
      size={350}
      showsText={true}
      animated={true}
      direction={'counter-clockwise'}
      borderColor={'#d9dcdd'}
      borderWidth={3}
      thickness={5}
      color={statusColor}
      style={options.style}
      textStyle={options.textStyle}
    />
  );
};

const options = {
  style: {
    margin: 'auto',
  },
  textStyle: {
    color: '#000000',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  highlight: {
    backgroundColor: '#ffffff',
  },
  play: {
    underlayColor: '#ffffff',
    borderColor: '#d9dcdd',
    textStyle: {
      color: '#000000',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
  cancel: {
    underlayColor: '#ffffff',
    borderColor: '#d9dcdd',
    textStyle: {
      color: '#000000',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
};

export default IntervalTimer;
