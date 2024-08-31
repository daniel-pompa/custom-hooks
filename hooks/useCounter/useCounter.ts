import { useState } from 'react';

interface UseCounterReturn {
  counter: number;
  increment: (value?: number) => void;
  decrement: (value?: number) => void;
  reset: () => void;
}

export const useCounter = (initialValue: number = 0): UseCounterReturn => {
  const [counter, setCounter] = useState<number>(initialValue);

  /**
   * Increment the counter by a specified value.
   * @param {number} [value=1] - The value to increment the counter by.
   */
  const increment = (value: number = 1): void => {
    setCounter((prevCounter: number) => prevCounter + value);
  };

  /**
   * Decrement the counter by a specified value.
   * If the counter is at zero, it does not decrement.
   * @param {number} [value=1] - The value to decrement the counter by.
   */
  const decrement = (value: number = 1): void => {
    setCounter((prevCounter: number) => {
      if (prevCounter === 0) {
        return prevCounter;
      }
      return prevCounter - value;
    });
  };

  /** Reset the counter to its initial value. */
  const reset = (): void => {
    setCounter(initialValue);
  };

  return { counter, increment, decrement, reset };
};
