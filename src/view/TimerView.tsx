import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Timer} from 'react-native-progress-timer';

interface TimerViewProps {
  remainingTime: Number | any;
}

const TimerView = (props: TimerViewProps) => {
  const {remainingTime} = props;

  useEffect(() => {
    //todo :  remainingTime exception code by blocking null value
    if (remainingTime == null) {
      throw Error('remainingTime is not null');
    }
  }, [remainingTime]);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Timer
          remainingTime={remainingTime[0]}
          size={350}
          showsText={true}
          animated={true}
          direction={'counter-clockwise'}
          borderColor={'#d9dcdd'}
          borderWidth={3}
          thickness={5}
          color={'#faac02'}
          style={options.style}
          textStyle={options.textStyle}
        />
      </View>
    </SafeAreaView>
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default TimerView;
