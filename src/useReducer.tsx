import React, { useReducer } from 'react'
import { reducer, initialState } from './reducer'

const Component: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h2>useReducer</h2>
      <p>状態の一括管理であるフローアーキテクチャをReact単体で扱うことができる</p>
      <p>回数： <strong>{state.count}</strong>{state.unit}</p>
      <button onClick={() => dispatch({ type: 'increment'})}>+</button>
      <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
      <pre>{`
      type State = {
        count: number
        unit: string
      }
      export const initialState: State = {
        count: 0,
        unit: '回'
      }
      export function reducer(state: State, action: any): State {
        switch (action.type) {
          case 'increment':
            return { ...state, count: state.count + 1 }
          case 'decrement':
            return { ...state, count: state.count - 1 }
          default:
            throw new Error()
        }
      }
      const Component: React.FC = () => {
        const [state, dispatch] = useReducer(reducer, initialState)
        return (
          <>
            <p>回数： <strong>{state.count}</strong>{state.unit}</p>
          </>
        )
      }
      `}</pre>
    </>
  )
}

export default Component