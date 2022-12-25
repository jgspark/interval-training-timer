export const TIMER_STATE = {
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

export type TIMER_STATE = typeof TIMER_STATE[keyof typeof TIMER_STATE];

export interface IntervalTimerProps {
  trainingTimer: number;
  waitTimer: number;
  round: number;
}

export interface IntervalTimerState {
  currentRound: number;
  round: number;
  trainingTimer: number;
  waitTimer: number;
  intervalState: INTERVAL_STATE;
}

export const INTERVAL_STATE = {
  TRAINING: {
    color: '#00ff00',
    timerState: TIMER_STATE.PLAY,
  },
  READY: {
    color: '#ff0000',
    timerState: TIMER_STATE.DEFAULT,
  },
  WAIT: {
    color: '#faac02',
    timerState: TIMER_STATE.PLAY,
  },
} as const;

export type INTERVAL_STATE = typeof INTERVAL_STATE[keyof typeof INTERVAL_STATE];
