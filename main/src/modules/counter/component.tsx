import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button<{ count: number }>`
  background-color: ${({ count }) => {
    switch (count) {
      case 0:
        return 'gray'
      case 1:
        return 'yellow'
      case 2:
        return 'blue'
      case 3:
        return 'orange'
      default:
        return 'pink'
    }
  }};
`

const { useState } = React as any

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <Button
      count={count}
      onClick={() => {
        setCount(count + 1)
      }}
    >
      Counter ({count})
    </Button>
  )
}

export default Counter
