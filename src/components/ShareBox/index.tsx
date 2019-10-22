import Taro , { Component } from '@tarojs/taro';
import { View, Image , Button} from '@tarojs/components';
import { weixinIcon, friendsIcon, closeIcon,shareCard,shareCard1} from '../../utils/common'
import './index.scss'
 
type IState={
    imageTempPath: string
}
export default class ShareBox extends Component<IProps,IState> {
   constructor (props) {
        super(props)
   }
   config = {
       navigationBarTitleText: ''
  }

  state={
    imageTempPath: ''
  }

  componentWillMount () {}
  componentDidMount () {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  closeShareBox() {
    this.props.closeShareBox && this.props.closeShareBox();
  }
  getImg() {
    Taro.showLoading({title:'加载中~'});
    Taro.getImageInfo({
      src:this.props.cardType == 'weather'?shareCard1:shareCard
    }).then(res => {
            Taro.hideLoading();
            this.setState({
                imageTempPath: res.path
            },()=>{
                this.saveImg()
            })
        })
  }
  bindOpenSetting(e:any) {
      console.log('openSettingBtn',e);
      this.getImg()
    // Taro.openSetting({
    //     success: (res) => {
    //      console.log(res);
    //     }
    // })
  }
  saveImg() {
      // 查看是否授权
    Taro.getSetting({  complete(){
      }}).then(res=>{
      if (res.authSetting['scope.writePhotosAlbum']) {
        Taro.saveImageToPhotosAlbum({
          filePath:this.state.imageTempPath
        }).then(()=>{
          Taro.showToast({
            title: "图片已保存到相册,快去朋友圈分享吧~",
            icon: "none",
            duration: 2000
          })
          this.props.closeShareBox && this.props.closeShareBox()
        })
      }else {
        Taro.authorize({
            scope: 'scope.writePhotosAlbum',
          }).then(()=>{
            Taro.saveImageToPhotosAlbum({
              filePath:this.state.imageTempPath
            }).then(res=>{
              console.log(res)
              Taro.showToast({ title: "图片已保存到相册,快去朋友圈分享吧~", icon: "none", duration: 2000 })
              this.props.closeShareBox && this.props.closeShareBox()
            })
        })
        .catch(r=> {
            console.log('then',r);
          Taro.showToast({ title: "拒绝授权将不能正常保存图片，请再次授权~", icon: "none", duration: 2000 })
          this.props.toOpenSetting && this.props.toOpenSetting()            
        })
      }
    }).catch((e)=>{
      console.log(e)
      Taro.showToast({ title: "图片保存失败", icon: "none", duration: 1000 })
   })
 }

  render() {
      
    return (
      <View className="shareBox">
        <View className="shareTitle" onClick={() => { this.closeShareBox()}}> 分享一下 
          <Image className="closeBtn" src={closeIcon}/>
        </View>
        <View className="shareWay flexBetween">
          <View  className="IconBox">
            {!this.props.openSetting && <Image src={friendsIcon} mode="aspectFill" className="icon" onClick={this.getImg.bind(this)}/>}
            {this.props.openSetting && 
             <Button  className="IconFriendBox icon"  hoverClass="none" 
                      openType='openSetting' onOpenSetting={this.bindOpenSetting}>
               <Image src={friendsIcon} mode="aspectFill" className="icon"/>
              </Button>
            }
            <View className="shareTip" style="margin-top:2px">分享卡</View>
          </View>
          <Button open-type="share"  className="IconBox" hoverClass="none">
            <Image src={weixinIcon} mode="aspectFill" className="icon"/>
            <View className="shareTip weixinTip">微信</View>
          </Button>
        </View>
        {/* <View className="shareBottomTip">分享朋友圈将随机生成精美卡片哟~</View> */}
      </View>
    );
  }
}