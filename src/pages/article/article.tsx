import Taro , { Component } from '@tarojs/taro';
import { View, Button,OfficialAccount} from '@tarojs/components';
import ArticleBox from '../../components/ArticleBox'
import SwiperMenu from '../../components/SwiperMenu'
import ShareBox from '../../components/ShareBox'
import { sceneryImg } from '../../utils/common'
import { essayType } from '../../constants/commonType'
import { connect } from '@tarojs/redux'
import PopBox from '../../components/PopBox'
import './article.scss'
interface State {
  currentIndex: number,
  articles: any,
  ifShowShare: boolean,
  showShareBox: boolean,
  openSetting: boolean
}
type Props = {
  essayData: essayType
}
@connect(({ essayData }) => ({
  essayData
}))
export default class Article extends Component<Props,State> {

  config: Config = {
    navigationBarTitleText: '碎碎念'
  }

  constructor (props) {
    super(props)
  }

   state: State = {
    currentIndex: 0,
    articles: this.props.essayData.articleList,
    ifShowShare: true,
    showShareBox: false,
    openSetting: false
  }

  componentWillMount () {
    Taro.showLoading({
      title: '加载中'
    })
    setTimeout(function () {
      Taro.hideLoading()
    }, 2000)    
  }
  componentDidMount () { } 
  componentWillUnmount () {} 
  componentDidShow () {
  } 
  componentDidHide () {
    this.setState({
      showShareBox: false
    })
  } 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  changeMenu(index: number) {
    let essayList = this.props.essayData.articleList
    let _articles:any  =[]
  //  全部：all 旅游:travel 快门：photography 碎碎念：other
    if (index ===1) {
      _articles = essayList.filter(i => i.type==='photography');
    } else if (index ===2) {
      _articles = essayList.filter(i => i.type==='travel');
    }else if (index ===3) {
      _articles = essayList.filter(i => i.type==='other');
    } else {
      _articles = essayList;
    }
    this.setState({
      currentIndex: index,
      articles: _articles
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
  render() {
    let {currentIndex,articles,ifShowShare, showShareBox,openSetting} =this.state
    return (
      <View className="container">        
        {process.env.TARO_ENV === 'weapp' && <OfficialAccount>office articles</OfficialAccount>}

        <SwiperMenu currentIndex={currentIndex} changeMenu={this.changeMenu.bind(this)}></SwiperMenu>
        <View className="articleWrap">
          {articles.map((item) => {
            return  <ArticleBox articleList={item} key={item.date}/>
          })
          }
        </View>
        { ifShowShare && process.env.TARO_ENV === 'weapp' &&
          <Button className="shareBtn activeBtn" hoverClass="none" onClick={this.shareImg.bind(this)}>分享</Button> 
        }
        <View className="flexBetween btnGroup">
          {process.env.TARO_ENV === 'weapp' && 
            <Button  className="activeBtn textCenter contactBtn" open-type="contact">聊一聊？</Button>
          }
        </View>
        <PopBox position="bottom" animation="slideDown" 
              showPop={showShareBox} 
              closePopBox={this.closeShareBox.bind(this)}>
          { process.env.TARO_ENV === 'weapp' && 
           <ShareBox closeShareBox={this.closeShareBox.bind(this)} openSetting={openSetting} toOpenSetting={this.toOpenSetting.bind(this)}/>            
          }
        </PopBox>
      </View>
    );
  }
}