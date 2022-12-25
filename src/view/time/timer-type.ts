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
  statusColor: string;
  round: number;
}

export interface IntervalTimerState {
  currentRound: number;
  round: number;
  trainingTimer: number;
  waitTimer: number;
  statusColor: string;
  timerStatus: TIMER_STATE;
}
