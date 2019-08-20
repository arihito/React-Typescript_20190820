import React, { useState, useCallback, useMemo } from 'react'

const Component: React.FC = (): any => {
  const [count, setCount] = useState<number | null>(0)

  const double = useMemo<number | null>(() => {
    if (count === null) return null
    return count * 2
  }, [count])

  const doubleWithUnit = useMemo<string | null>(() => {
    if (double === null) return null
    return `${double} pt`
  }, [double])

  const handleClick = useCallback(() => {
    setCount(prev => {
      if (prev === null) return null
      return prev + 1
    })
  }, [])

  return (
    <>
      <h2>useState / useMemo</h2>
      <p>特定の値を算出する際に、依存する値に変化が無ければ計算済みの値を返す仕組み</p>
      <p>クリック回数: <strong>{ count }</strong>回 | クリックの倍数: <strong>{ double }</strong>回 | 倍数の単位付き: <strong>{ doubleWithUnit }</strong></p>
      <button onClick={handleClick}>+1</button>
      <pre>{`
      const [count, setCount] = useState<number | null>(0)

      const double = useMemo<number | null>(() => {
        if (count === null) return null
        return count * 2
      }, [count])

      const doubleWithUnit = useMemo<string | null>(() => {
        if (double === null) return null
        return \`\${double} pt\`
      }, [double])

      const handleClick = useCallback(() => {
        setCount(prev => {
          if (prev === null) return null
          return prev + 1
        })
      }, [])
      `}</pre>
    </>
  )
}

export default Component