import React, {useEffect} from 'react';
import {Timer} from 'react-native-progress-timer';

interface IntervalTimerProps {
  timer: Number | any;
  statusColor: string;
}

const IntervalTimer = (props: IntervalTimerProps) => {
  const {timer, statusColor} = props;

  useEffect(() => {
    console.log('this hook', timer);
  }, [timer]);

  return (
    <Timer
      remainingTime={timer}
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

export default React.memo(IntervalTimer);
