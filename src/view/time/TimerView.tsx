import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import IntervalTimer from '../../component/IntervalTimer';

const TimerView = () => {
  const [timer, setTimer] = useState<String>('30');

  const [statusColor, setStatusColor] = useState<String>('#faac02');

  useEffect(() => {
    console.debug('created hook : timer viewer');
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <IntervalTimer timer={timer} statusColor={statusColor} />
      </View>
      <TextInput value={timer} onChangeText={setTimer} />
      <TextInput value={statusColor} onChangeText={setStatusColor} />
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
