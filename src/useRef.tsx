import React, { useRef, useEffect } from 'react'

const Component: React.FC = () => {
  const ref = useRef<null | HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current === null) return
    const size = ref.current.getBoundingClientRect()
    console.log(size)
  })
  return (
    <div>
      <h2>useRef</h2>
      <p>React.Componentのようなクラスコンポーネントのみで可能だったDOM要素へのアクセスがFunction Componentでも可能になった。<br />
      下記では矩形サイズを取得しコンソールへ幅と高さと位置を表示</p>
      <div ref={ref} style={{ width: 100, height: 100, border: '1px solid #ccc' }}></div>
      <pre>{`
      const ref = useRef<null | HTMLDivElement>(null)
      useEffect(() => {
        if (ref.current === null) return
        const size = ref.current.getBoundingClientRect()
        console.log(size)
      })
      return (
        <>
        <div ref={ref} style={{ width: 100, hegiht: 100, border: '1px solid #ccc' }}></div>
        </>
      )
      `}</pre>
    </div>
  )
}

export default Component