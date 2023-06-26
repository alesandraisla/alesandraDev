import { useState } from "react";

export function useCounter(initialValue = 50) {
  const [count, setCount] = useState(initialValue);

  function inc() {
    setCount(count + 1)
  }

  function dec() {
    setCount(count -1)
  }
  return [count, inc, dec]
}