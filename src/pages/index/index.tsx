import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import ContentBox from '../../components/ContentBox'
import ArticleBox from '../../components/ArticleBox'
import ShareBox from '../../components/ShareBox'
import SubTitle from '../../components/SubTitle'
import SwiperBanner from '../../components/SwiperBanner'
import { cameraIcon, sceneryImg,sceneryImg1,sceneryImg2,sceneryImg3 } from '../../utils/common'
import { connect } from '@tarojs/redux'
import { essayType } from '../../constants/commonType'
import PopBox from '../../components/PopBox'
import './index.scss'

type Props = {
  essayData: essayType
}
interface State {
  ifShowShare: boolean,
  showShareBox: boolean,
  openSetting: boolean
}
@connect(({ essayData }) => ({
  essayData
}))
export default class Index extends Component<Props,State> {

  config: Config = {}

  constructor (props) {
    super(props)
  }
  state:State ={
    ifShowShare: true,
    showShareBox: false,
    openSetting: false
  }
  componentWillMount () { }

  componentDidMount () {
    Taro.showLoading({
      title: '加载中'
    })
    setTimeout(function () {
      Taro.hideLoading()
    }, 2000)    
  }

  componentDidHide () {
    this.setState({
      showShareBox: false
    })
  } 

  componentDidShow () { 
   
  }
  toForecast() {
    // Taro.showToast({
    //   title: '天气预报功能暂不支持哟~',
    //   duration: 1500,
    //   icon: 'none'
    // })
    Taro.navigateTo({
      url: '/pages/forecast/forecast'
    })
  }
  shareImg() {
    this.setState({
      showShareBox: true
    })
  }
  closeShareBox() {
    this.setState({
      showShareBox: false
    })
  }
  toOpenSetting() {
    this.setState({
      openSetting: true
    },()=>{
      this.closeShareBox && this.closeShareBox()
    })
  }
  onShareAppMessage() {
    return {
      title: '兜兜转转有趣的灵魂终会相遇~',
      imageUrl: sceneryImg,
      path: '/pages/guide/guide'
    }
  }
  render () {
    let { ifShowShare,showShareBox,openSetting } = this.state
    const { essayData } = this.props
    const tipInfo:object = {
      timeInfo:'2019.07.23',
      summary: '泡面炸鸡没关系，朋友散场无所谓，<br>拥有热气腾腾的灵魂，日子总归不会太差。<br>我的感情很冷清，<br>像一杯白开水，无味却干净。'
    }
    const bannerList:Array<string> = [sceneryImg,sceneryImg1,sceneryImg2,sceneryImg3]
    const SubTitleName:Array<string> = ['热推图文','精选图文']
    return (
      <View className='container'>
        <View className="headBox">
          <Image src={cameraIcon} className="headIcon"/>          
          <Text className="headTip colorBlack">我是个记性差的人,需要文字来提醒。</Text>
        </View>
        <ContentBox tipInfo={tipInfo}/>
        <View className="forecastBox flexBetween" onClick={this.toForecast}>
          <Text className="forecastTip colorBlack">How are you feeling today?</Text>
          <Text className="weatherBtn activeBtn">天气贴士</Text>
        </View>
        <SubTitle titleName={SubTitleName[0]}>
         {essayData.collected>0  && <View className="countedCollect colorGray">您有 {essayData.collected} 篇喜欢的文章哟~</View>}
        </SubTitle>
        {essayData.articleList[0] && <ArticleBox articleList={essayData.articleList[0]} />}
        <SwiperBanner bannerList={bannerList}></SwiperBanner>
        
        <SubTitle titleName={SubTitleName[1]}/>
        <View className="articleWrap">
          {essayData.articleList.map((item,index) => {
            return  (index >0 && <ArticleBox articleList={item}  key={item.date}/> )
          })
          }
        </View>
        {ifShowShare && process.env.TARO_ENV === 'weapp' &&
          <Button className="shareBtn activeBtn" onClick={this.shareImg.bind(this)}>分享</Button> 
        }
        <PopBox position="bottom" animation="slideDown" 
                showPop={showShareBox} 
                closePopBox={this.closeShareBox.bind(this)}>
            { process.env.TARO_ENV === 'weapp' && 
              <ShareBox closeShareBox={this.closeShareBox.bind(this)} openSetting={openSetting} toOpenSetting={this.toOpenSetting.bind(this)}>
              </ShareBox>
             }
        </PopBox>
      </View>
    )
  }
}
