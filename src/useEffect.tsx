import React, { useState, useEffect } from 'react'

const Component: React.FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => clearInterval(interval)
  })
  return (
    <>
      <h2>useEffect</h2>
      <p>マウント後の毎秒をインクリメントするような従来のコンポーネントライフサイクル処理に適している</p>
      <div><strong>{count}</strong></div>
      <pre>{`
      useEffect(() => {
        const interval = setInterval(() => {
          setCount(count + 1)
        }, 1000)
        return () => clearInterval(interval)
      })
      `}
      </pre>
    </>
  )
}

export default Component