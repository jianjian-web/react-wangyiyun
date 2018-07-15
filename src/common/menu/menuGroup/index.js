import React, { Component } from 'react'
import { connect } from 'react-redux'
import Style from './style.less'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'

class MenuGroup extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className={Style.groupWrapper}>
        <p className={Style.title}>
          <span>{this.props.title}</span>
        </p>
        <ul>
          {
            this.props.list.map(item => (
              <li key={item.name}
                  className={`${Style.item} ${this.props.url === item.url ? Style.active:''}`}
                  onClick={this.props.setUrl.bind(this, item.url)}
                  >
                  <Link to={item.url}>
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.side.url
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    setUrl(url) {
      dispatch(actionCreators.setUrl(url))
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(MenuGroup)