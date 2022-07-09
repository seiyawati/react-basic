import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(prevState => prevState + 1)

    // 非同期処理のためcountが更新されるまでにラグがある
    // setTimeout(() =>  setCount(count + 1), 1000)

    // 必ず前の値を参照する
    // setTimeout(() =>  setCount(prevState => prevState + 1), 1000)
  }

  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  useEffect(() => {
    console.log("Current count is ...", count)
  }, [count])

  return (
    <div>
      <p>
        良いカウンター<br />
        現在のカウント: {count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  )
}

export default Counter
