import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import IntervalTimer from '../../component/interval-timer';
import {MOCK_DATA} from './mock-data';

interface TimerViewState {
  id: number;
  trainingTimer: number;
  waitTimer: number;
  round: number;
}

const TimerView = () => {
  const [state, setState] = useState<TimerViewState>({
    id: 0,
    trainingTimer: 0,
    waitTimer: 0,
    round: 0,
  });

  useEffect(() => {
    console.debug('created hook : timer viewer' + JSON.stringify(MOCK_DATA));

    const _data = MOCK_DATA.find(m => m.id);

    setState(v => ({
      ...v,
      ..._data,
    }));
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <IntervalTimer
          trainingTimer={state.trainingTimer}
          waitTimer={state.waitTimer}
          round={state.round}
        />
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
