import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import Carousel from '../../common/carousel'
import Title from '../../common/title'
import Cards from '../../common/cards'
import style from './style.less'
import http from '../../config/http'
const TabPane = Tabs.TabPane

class FindMusic extends Component {
  constructor(props) {
    super()
    this.state = {
      banners: [],
      personalized: []
    }
  }
  render() {
    return (
      <div className={style.findMusic}>
        <Tabs defaultActiveKey="tuijian" animated={false}>
          <TabPane tab="推荐" key="tuijian">
            <div className='content'>
              {
                this.state.banners.length ? <Carousel list={this.state.banners}/> : ''
              }
              <Title title='热门精选' />
              {
                this.state.personalized.length ? <Cards data={this.state.personalized}></Cards> :
                'loading'
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
  async componentDidMount() {
    const banners = await http.get('/banner')
    const personalized = await http.get('/personalized')
    console.dir(personalized)
    this.setState({
      banners: banners.banners,
      personalized: personalized.result
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