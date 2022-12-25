import React, {useEffect, useState} from 'react';
import {Timer} from 'react-native-progress-timer';
import {Text, View} from 'react-native';
import {
  INTERVAL_STATE,
  IntervalTimerProps,
  IntervalTimerState,
} from '../view/time/timer-type';

const IntervalTimer = (props: IntervalTimerProps) => {
  const {trainingTimer, waitTimer, round} = props;

  const [state, setState] = useState<IntervalTimerState>({
    currentRound: 0,
    round: 0,
    waitTimer: 0,
    trainingTimer: 0,
    intervalState: INTERVAL_STATE.READY,
  });

  useEffect(() => {
    console.log('change props state', JSON.stringify(props));

    setState(v => ({
      ...v,
      ...props,
    }));
  }, [trainingTimer, waitTimer, round]);

  return (
    <View>
      <Text> Now Round is {state.currentRound}</Text>
      <Timer
        state={state.intervalState.timerState}
        remainingTime={state.trainingTimer}
        size={350}
        showsText={true}
        animated={true}
        direction={'counter-clockwise'}
        borderColor={'#d9dcdd'}
        borderWidth={3}
        thickness={5}
        color={state.intervalState.color}
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
