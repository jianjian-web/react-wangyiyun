import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import Carousel from '../../common/carousel'
import style from './style.less'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:4000'
const TabPane = Tabs.TabPane

class FindMusic extends Component {
  constructor(props) {
    super()
    this.state = {
      banners: []
    }
  }
  render() {
    return (
      <div className={style.findMusic}>
        <Tabs defaultActiveKey="tuijian">
          <TabPane tab="推荐" key="tuijian">
            <div className='content'>
              {
                this.state.banners.length ? <Carousel list={this.state.banners}></Carousel> : ''
              }
            </div>
          </TabPane>
          <TabPane tab="排行榜" key="paihang">Content of Tab Pane 2</TabPane>
          <TabPane tab="歌单" key="gedan">Content of Tab Pane 3</TabPane>
          <TabPane tab="主播电台" key="diantai">Content of Tab Pane 4</TabPane>
          <TabPane tab="最新音乐" key="yinyue">Content of Tab Pane 5</TabPane>
        </Tabs>
      </div>
    )
  }
  componentDidMount() {
    axios.get('/banner').then(res => {
      console.dir(res)
      console.dir(this)
      if (res.data.code === 200) {
        // this.banners = res.data.banners
        this.setState({
          banners: res.data.banners
        })
      }
      console.dir(this.state.banners)
    })
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