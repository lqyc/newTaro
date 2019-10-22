import Taro, { Component, Config } from '@tarojs/taro'
import Guide from './pages/guide/guide'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import '@tarojs/async-await';

import './app.scss'

const store = configStore()

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config: Config = {
    pages: [
      'pages/guide/guide',
      'pages/index/index',
      'pages/article/article',
      'pages/about/about',
      'pages/webview/webview',
      'pages/forecast/forecast'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#97DFEA',
      navigationBarTextStyle: 'white',
      backgroundColorTop: '#97DFEA',
      navigationBarTitleText: 'Q小予'
    },
    tabBar: {
      color: '#97DFEA',
      selectedColor: '#F485B5',
      backgroundColor: '#ffffff',
      list: [
        {
          text: '首页',
          pagePath: 'pages/index/index',
          iconPath: './assets/img/bar_1.png',
          selectedIconPath: './assets/img/SelectedHome.png'
        },
        {
          text: '文章',
          pagePath: 'pages/article/article',
          iconPath: './assets/img/bar_2.png',
          selectedIconPath: './assets/img/selectedCenter.png'
        },
        {
          text: '我的',
          pagePath: 'pages/about/about',
          iconPath: './assets/img/bar_3.png',
          selectedIconPath: './assets/img/selectUser.png'
        }
      ]
    },
    "permission": {
      "scope.userLocation": {
        "desc": "允许Q小予访问您当前的地理位置信息？"
      }
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Guide/>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
