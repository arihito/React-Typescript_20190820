import * as React from 'react'

// type Props = {
//   children?: React.ReactNode
// }
// const Child = (props: Props) => (
const Child: React.FC = props => (
      <div>{props.children}</div>
)
// const Parent = (props: Props & { childLabel: string}) => (
const Parent: React.FC<{ childLabel: string }> = props => (
  < Child >s
    {props.childLabel}
  </Child>
)
