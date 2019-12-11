import Taro , { Component } from '@tarojs/taro';
import { View, Text, Image,Navigator} from '@tarojs/components';
import { collectIcon,collectIconGray } from '../../utils/common'
import { connect } from '@tarojs/redux'
import { essayCollect, cancelCollect } from '../../actions/articleAction'
import './index.scss'

@connect(({ essayData }) => ({
  essayData
}), (dispatch) => ({
  essayCollect(object) {
    dispatch(essayCollect(object))
  },
  cancelCollect(object) {
    dispatch(cancelCollect(object))
  }
}))
export default class ArticleBox extends Component<IProps> {

  constructor (props) {
      super(props)
  }
  state={}
  componentWillMount () {}
  componentDidMount () {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  toCollect(ifCollect:boolean,id:number) {
    const {collected} = this.props.essayData
    let toast:string = !ifCollect?`您有${collected+1}篇喜欢的文章了哟~`:'为什么不喜欢了呢？'
    Taro.showToast({
      title: toast,
      duration: 1800,
      icon: 'none'
    })
    if (ifCollect && collected>0) {
      this.props.cancelCollect(id);
    } else if (!ifCollect){
       this.props.essayCollect(id)
    }
  }
  toComment(webUrl:string) {
    Taro.showToast({
      title: '关注微信公众号【Q予辰】查看更多评论吧~',
      duration: 2300,
      icon: 'none'
    })
    console.log(webUrl);
    // Taro.navigateTo({
    //   url: `/pages/webview/webview?url=${webUrl}`
    // })
  }

  render() {
    const { articleList } = this.props
    
    return (
      <View className="articleBox">
        <View className="articleHeadBox flexBetween">
         <Text className="title textOverflow1">{articleList.title}</Text>
         <Text className="time">{articleList.date}</Text>
        </View>
        <Navigator url={'/pages/webview/webview?url='+articleList.webView} hoverClass="none">
        <View className="articleInfo textOverflow3">{articleList.summary}</View>
        <View className="imgListBox">
          <Image src={articleList.imgList[0]} className="imgInfo"/>
          <Image src={articleList.imgList[1]} className="imgInfo secondImg"/>
          <View className="imgInfo imgTip">去阅读>></View>
        </View>
        </Navigator>
        <View className="socialBox">
          <View className="IconBox"  onClick={() => { this.toCollect(articleList.collect,articleList.id)}}>
             <Image src={articleList.collect ?collectIcon:collectIconGray} 
                 className="iconInfo"/>
          </View>
           {/* <View  className="socialInfo IconBox" onClick={()=>this.toComment(articleList.webView)}>
             <Image src={CombinedIcon} className="iconInfo"/> 
             <Text className="number">{articleList.comment}</Text>
           </View> */}
        </View>
      </View>
    );
  }
}
