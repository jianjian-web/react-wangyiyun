import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import AppStyle from './App.less'
import logo from './static/img/logo.jpg'
import Menu from './common/menu'
import FindMusic from './pages/findMusic'
const { Header, Footer, Sider, Content } = Layout
/* 此App当layout */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Header className={AppStyle.headerWrapper}>
              <img src={logo} alt="" className={AppStyle.logo} />
            </Header>
            <Layout className={AppStyle.contentHeight}>
              <Sider className={AppStyle.layoutSider}>
                <Menu></Menu>
              </Sider>
              <Content className={AppStyle.mainContent}>
                <Route path='/' exact component={FindMusic}></Route>
              </Content>
            </Layout>
            <Footer className={AppStyle.layoutFooter}>Footer</Footer>
          </Layout>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App