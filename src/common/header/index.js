import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Btn,
  SearchWrapper
} from './style'

class Header extends Component {
  constructor(props) {
    super()
  }
  render() {
    const { focused } = this.props
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className='left active test'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              className={focused ? 'focused' : ''}
              placeholder='搜索'
              onFocus={this.props.handleFocus.bind(this)}
              onBlur={this.props.handleBlur.bind(this)}
            ></NavSearch>
            <i className='wangyi-icon-sousuo iconfont'></i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Btn className='login'>注册</Btn>
          <Btn className='write'><i className='iconfont'>&#xe615;</i>写文章</Btn>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
    list: state.header.list
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleFocus() {
      console.dir(this.props.list)
      if (!this.props.list && !this.props.list.length) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)