import React, {useEffect, useRef, useState} from 'react';
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
  currentRound: number;
  round: number;
  trainingTimer: number;
  waitTimer: number;
  statusColor: string;
  timerStatus: TIMER_STATE;
}

function useInterval(
  callback: () => void,
  callback2: () => void,
  delay: number,
  arg: any | null,
) {
  const ref = useRef<typeof callback>(callback);

  const ref2 = useRef<typeof callback2>(callback2);

  let interval: any = null;

  useEffect(() => {
    ref.current = callback;
    ref2.current = callback2;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      ref.current();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(tick, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, arg.round !== 0]);

  useEffect(() => {
    console.debug('arg is now !!', JSON.stringify(arg));

    if (arg.round === arg.currentRound) {
      console.debug('same round !! stop timer...');
      ref2.current();
      clearInterval(interval);
    }
  }, [arg.currentRound]);
}

const IntervalTimer = (props: IntervalTimerProps) => {
  const {trainingTimer, waitTimer, statusColor, round} = props;

  const [state, setState] = useState<IntervalTimerState>({
    currentRound: 0,
    round: 0,
    waitTimer: 0,
    trainingTimer: 0,
    statusColor: '#fff',
    timerStatus: TIMER_STATE.DEFAULT,
  });

  useEffect(() => {
    console.log('change props state', JSON.stringify(props));

    setState(v => ({
      ...v,
      ...props,
    }));
  }, [trainingTimer, waitTimer, statusColor, round]);

  useInterval(
    () => {
      setState(p => ({
        ...p,
        currentRound: p.currentRound + 1,
      }));

      return () => {
        console.log('useInterval ==> clear?');
      };
    },
    () => {
      setState(v => ({
        ...v,
        currentRound: 0,
      }));
    },
    3000,
    state,
  );

  return (
    <View>
      <Text> Now Round is {state.currentRound}</Text>
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
