import React, { Component } from 'react'
import { connect } from 'react-redux'
import Style from './style.less'
import Group from './menuGroup'
// import { actionCreators } from './store'

class Menu extends Component {
  constructor(props) {
    super()
    this.state = {
      recommend: [
        {
          name: '发现音乐',
          icon: 'wangyi-icon-yinyue',
          url: '/'
        },
        {
          name: '私人FM',
          icon: 'wangyi-icon-guangbodiantai',
          url: '/fm'
        },
        {
          name: 'MV',
          icon: 'wangyi-icon-mv1',
          url: '/mv'
        },
        {
          name: '朋友',
          icon: 'wangyi-icon-pengyou',
          url: '/friend'
        }
      ],
      myMusic:[
        {
          name: 'iTunes音乐',
          icon: 'wangyi-icon-bendiyinle',
          url: '/itunes'
        },
        {
          name: '下载的音乐',
          icon: 'wangyi-icon-download-copy',
          url: '/downloadMusic'
        },
        {
          name: '我的歌手',
          icon: 'wangyi-icon-pengyou',
          url: '/mySinger'
        },
        {
          name: '我的MV',
          icon: 'wangyi-icon-mv1',
          url: '/myMv'
        }
      ]
    }
  }
  render() {
    return (
      <div className={Style.menuWrapper}>
        <Group title='推荐' list={this.state.recommend}></Group>
        <Group title='我的音乐' list={this.state.myMusic}></Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispathToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Menu)