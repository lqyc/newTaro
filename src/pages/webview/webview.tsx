import Taro, { Component } from '@tarojs/taro'
// 引入 WebView 组件
import { WebView } from '@tarojs/components'
// import { sceneryImg } from '../../utils/common'

export default class Webview extends Component {
  componentWillMount() {
        // console.log(this.$router.params)    
  }
  onShareAppMessage() {
    return {
      title:'兜兜转转有趣的灵魂终会相遇~',
      // imageUrl: sceneryImg,
      path: '/pages/guide/guide'
    }
  }
  render () {
    return (
      <WebView src={this.$router.params.url}  />
    )
  }
}