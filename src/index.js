import { useEffect, useRef } from 'react';
import useClickOutside from '@kne/use-click-outside';

const useSimulationBlur = (callback, options) => {
  options = Object.assign({
    strictMode: false,
    dom: null
  }, options);
  const stateRef = useRef(false);
  const ref = useClickOutside(() => {
    if (stateRef.current === true) {
      callback();
    }
    stateRef.current = false;
  });
  useEffect(() => {
    const handler = () => {
      if (!options.strictMode) {
        stateRef.current = true;
      }
    };
    const focusHandler = () => {
      if (options.strictMode) {
        stateRef.current = true;
      }
    };
    ref.current.addEventListener('click', handler, true);
    ref.current.addEventListener('focus', focusHandler, true);
    return () => {
      ref.current && ref.current.removeEventListener('click', handler);
      ref.current && ref.current.removeEventListener('focus', focusHandler);
    };
  }, []);
  return ref;
};

export default useSimulationBlur;
