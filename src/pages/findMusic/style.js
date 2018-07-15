/**
 * 体验使用styled-components
 * 体会：不是很认同这种方案，语法可以很类似于less，但是要自己定义标签
 * 当然可以像使用less的习惯一样，在外层嵌套一个类，然后所有样式全写在这下面
 * 用js写css总感觉不是很优雅，代码不全也不是很好用
 * 没有体会到这样有什么好处
 * 所以我决定接下来使用less，css modules的习惯。
 */

import styled from 'styled-components'
import logo from '../../static/img/logo.png'
export const HeaderWrapper = styled.div`
  height:56px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({href:'/'})`
  float:left;
  display: block;
  width:100px;
  height:56px;
  background: url(${logo});
  background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  height: 100%;
  margin: 0 auto;
  line-height: 56px;
`

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  color: #333;
  font-size:17px;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color: #969696;
  }
  &.active{
    color:#ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  display:inline-block;
  position: relative;
  .iconfont{
    position: absolute;
    right:0px;
    top:11px;
    width: 38px;
    text-align: center;
    height: 38px;
    line-height:38px;
    border-radius: 19px;
  }
  .focused_i{
    background: #ddd;
  }
`

export const NavSearch = styled.input`
  vertical-align:middle;
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  margin-left:20px;
  border-radius: 19px;
  padding: 0 20px;
  padding-right: 30px;
  background:#eee;
  border: none;
  outline: none;
  transition: all 0.35s ease;
  &.focused{
    width: 240px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right:0;
  height: 56px;
  top:0;
  line-height: 56px;
`

export const Btn = styled.button`
  display:inline-block;
  margin: 0 15px;
  border: 1px solid #ec6149;
  height:38px;
  border-radius: 19px;
  outline:none;
  &.login{
    width:80px;
    color: #ea6f5a;
    &:hover{
      color:#ec6149;
      background-color:rgba(236,97,73,.05);
    }
  }
  &.write{
    width:100px;
    background:#ea6e59;
    color: #fff;
  }
`