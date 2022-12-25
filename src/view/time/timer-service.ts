import {useEffect, useRef} from 'react';

export function useInterval(
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
