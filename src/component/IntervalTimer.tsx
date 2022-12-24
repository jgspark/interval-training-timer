import React, {useEffect, useState} from 'react';
import {Timer} from 'react-native-progress-timer';
import {Text, View} from 'react-native';

interface IntervalTimerProps {
  trainingTimer: number;
  waitTimer: number;
  statusColor: string;
  round: number;
}

const TIMER_STATE = {
  DEFAULT: {
    name: 'DEFAULT',
    play: true,
    pause: false,
    stop: true,
    resume: false,
  },
  PLAY: {
    name: 'PLAY',
    play: false,
    pause: true,
    stop: true,
    resume: false,
  },
  PAUSE: {
    name: 'PAUSE',
    play: false,
    pause: true,
    stop: true,
    resume: false,
  },
  STOP: {
    name: 'STOP',
    play: true,
    pause: false,
    stop: true,
    resume: false,
  },
  RESUME: {
    name: 'RESUME',
    play: false,
    pause: false,
    stop: true,
    resume: true,
  },
} as const;

type TIMER_STATE = typeof TIMER_STATE[keyof typeof TIMER_STATE];

interface IntervalTimerState {
  round: number;
  trainingTimer: number;
  waitTimer: number;
  statusColor: string;
  timerStatus: TIMER_STATE;
}

const IntervalTimer = (props: IntervalTimerProps) => {
  const {trainingTimer, waitTimer, statusColor, round} = props;

  const [state, setState] = useState<IntervalTimerState>({
    round: 0,
    waitTimer: 0,
    trainingTimer: 0,
    statusColor: '#fff',
    timerStatus: TIMER_STATE.PLAY,
  });

  useEffect(() => {
    console.log('change props state', JSON.stringify(props));
    const _state: IntervalTimerState = {
      ...state,
      ...props,
    };
    setState(_state);
  }, [trainingTimer, waitTimer, statusColor, round]);

  return (
    <View>
      <Text> Now Round is {state.round}</Text>
      <Timer
        state={state.timerStatus}
        remainingTime={state.trainingTimer}
        size={350}
        showsText={true}
        animated={true}
        direction={'counter-clockwise'}
        borderColor={'#d9dcdd'}
        borderWidth={3}
        thickness={5}
        color={state.statusColor}
        style={options.style}
        textStyle={options.textStyle}
      />
    </View>
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

export default React.memo(IntervalTimer);
