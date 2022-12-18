import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import IntervalTimer from '../../components/IntervalTimer';

const TimerView = () => {
  const [timer] = useState<String>('30');

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <IntervalTimer timer={timer} statusColor={'#faac02'} />
      </View>
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
