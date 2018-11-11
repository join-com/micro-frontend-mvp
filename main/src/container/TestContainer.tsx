import * as React from 'react'
import { connect } from 'react-redux'

import { incrementCount, decrementCount } from 'store'

const TestContainer = (props) => {
  return (
    <>
      <div>{props.count}</div>
      <button onClick={props.incrementCount}>incrementCount</button>
      <button onClick={props.decrementCount}>decrementCount</button>
    </>
  )
}

const mapStateToProps = ({ count }) => ({
  count,
})

export default connect(
  mapStateToProps,
  { incrementCount, decrementCount },
)(TestContainer)
