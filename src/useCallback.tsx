import React, { useState, useCallback } from 'react'

type Props = {
  clickedX: number
  clickedY: number
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Component: React.FC<Props> = (props) => {
  return (
    <div style={{overflow:'hidden'}}>
      <div className="clickArea" onClick={props.handleClick}></div>
      <div className="clickArea" onClick={props.handleClick}></div>
      <p>X: <strong>{props.clickedX}</strong>px | Y: <strong>{props.clickedY}</strong>px</p>
    </div>
  )
}

const Container: React.FC = () => {
  const [state, update] = useState({
    clickedX: 0,
    clickedY: 0
  })
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.persist()
      const { top, left } = event.currentTarget.getBoundingClientRect()
      update(prev => ({
        ...prev,
        clickedX: Math.floor(event.clientX - left),
        clickedY: Math.floor(event.clientY - top)
      }))
    },
    []
  )
  return (
    <>
      <h2>useCallback</h2>
      <p>ReactElementにバインドするイベントハンドラーのメモ化に利用する<br />
        アクセスできるプロパティを限定しないようにReact.MounsEventの指定要素をより広義なHTMLEventとすることで規制を緩くしている</p>
      <Component clickedX={state.clickedX} clickedY={state.clickedY} handleClick={handleClick} />
      <pre>{`
      type Props = {
        clickedX: number
        clickedY: number
        handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
      }
      const Component: React.FC<Props> = (props) => {
        return (
          <div style={{overflow:'hidden'}}>
            <div style={{float:'left',width:'50%',height:100,background:'#ccf'}} onClick={props.handleClick}></div>
            <div style={{float:'left',width:'50%',height:100,background:'#fcc'}} onClick={props.handleClick}></div>
            <p>X: <strong>{props.clickedX}</strong>px | Y: <strong>{props.clickedY}</strong>px</p>
          </div>
        )
      }
      const Container: React.FC = () => {
        const [state, update] = useState({
          clickedX: 0,
          clickedY: 0
        })
        const handleClick = useCallback(
          (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            event.persist()
            const { top, left } = event.currentTarget.getBoundingClientRect()
            update(prev => ({
              ...prev,
              clickedX: Math.floor(event.clientX - left),
              clickedY: Math.floor(event.clientY - top)
            }))
          },
          []
        )
      `}</pre>
    </>
  )
}

export default Container