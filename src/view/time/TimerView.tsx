import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import IntervalTimer from '../../component/IntervalTimer';

const TimerView = () => {
  const [timer, setTimer] = useState<string>('30');

  const [statusColor, setStatusColor] = useState<string>('#faac02');

  const [round, setRound] = useState<string>('10');

  const [waitTimer, setWaitTimer] = useState<string>('10');

  useEffect(() => {
    console.debug('created hook : timer viewer');
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <IntervalTimer
          trainingTimer={Number(timer)}
          waitTimer={Number(waitTimer)}
          statusColor={statusColor}
          round={Number(round)}
        />
      </View>
      <TextInput value={timer} onChangeText={setTimer} />
      <TextInput value={statusColor} onChangeText={setStatusColor} />
      <TextInput value={round} onChangeText={setRound} />
      <TextInput value={waitTimer} onChangeText={setWaitTimer} />
    </SafeAreaView>
  );
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
