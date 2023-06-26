import { useCounter } from "../hooks/useCounter";
import { BoxCounter, Content, DataCounter } from "./CounterStyles";

export function Counter() {
  const [count, inc, dec] = useCounter()
  return(
    <Content >
      <h1>Contador</h1>
      <BoxCounter>
        <span>{count}</span>
        <DataCounter>
          <div>
            <button onClick={() => inc()}>+</button>
          </div>
          <div>
            <button onClick={() => dec()}>-</button>
          </div>
        </DataCounter>
      </BoxCounter>
    </Content>
  )
}