import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { actionCreators } from './store'

class FindMusic extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <span>
        findMusic
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    // handleBlur() {
    //   dispatch(actionCreators.searchBlur())
    // }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(FindMusic)