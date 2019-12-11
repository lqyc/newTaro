import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image,Button } from '@tarojs/components'
import ContentBox from '../../components/ContentBox'
import { colorWavy,avatar,sceneryImg } from '../../utils/common'

import './about.scss'

interface Props {}
interface State {}
export default class About extends Component<Props,State> {
  config: Config = {
    navigationBarTitleText: 'ABOUT QYC',
    navigationStyle: 'custom'
  }

  constructor (props) {
    super(props)
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onShareAppMessage() {
    return {
      title: '兜兜转转有趣的灵魂终会相遇。',
      imageUrl: sceneryImg,
      path: '/pages/guide/guide'
    }
  }
  render () {
    const tipInfo:object = {
      timeInfo:'2019.07.23',
      summary: '一个爱摄影爱旅游爱写作的程序媛.<br>愿你出走半生，归来仍是少年。<br>慌张就是青春，你不慌张了，青春就没了。'
    }
    const otherTip:object = {
      timeInfo:'2019.08.13',
      summary: '一个人如果一点野心也没有，他的人生一定很难发生改变。烦闷乏味的上班生活，纷繁复杂的社交网络，我迫不及待想遇见活得很有趣的人。兜兜转转，有趣的灵魂终会相遇。'
    }
    const contentPropsClass:string = "content-Class"
    return (
      <View className='container'>
       <View className="profileBox">
       <View className="profileHeadBox flexBetween">
       <Text className="headLeftTip">Profile</Text>
      </View>
        <View className="proAvatar textCenter"><Image src={avatar} className="imgRadius50"/> </View>      
         <View className="proUserName textCenter">Q小予</View>
         <View className="proWavy"></View>
       </View>
        <View className="proInfoBox">
          <View className="proInfo">摄影师</View>
          <View className="proInfo"> 程序媛<View className="tips">3年+</View></View>
          <View className="proInfo">旅行者</View>
        </View>
        <ContentBox tipInfo={tipInfo} contentPropsClass = {contentPropsClass}/>
        <Image src={colorWavy} className="colorWavy"/>
        <ContentBox tipInfo={otherTip} contentPropsClass = {contentPropsClass}/>
        {process.env.TARO_ENV === 'weapp' && <Button className="activeBtn contactBtn textCenter" open-type="contact">嘀嘀咕咕</Button>}
      </View>
    )
  }
}
