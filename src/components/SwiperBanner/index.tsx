import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem,Image } from "@tarojs/components";
import { sceneryImg,sceneryImg1,sceneryImg2,sceneryImg3 } from '../../utils/common'
import './index.scss'

interface IState {}
export default class SwiperBanner extends Component<IProps,IState> {
    constructor (props) {
        super(props)
    }
    static defaultProps = {
      bannerList:[sceneryImg,sceneryImg1,sceneryImg2,sceneryImg3]
    }

  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  previewImage(index:number) {
   Taro.previewImage({
    current: this.props.bannerList[index],
    urls: this.props.bannerList,
   })
  }
  render() {
    const { bannerList } =this.props;
    const durationTime:number=3000
  return (
    <View>
      <Swiper
        className="SwiperBox"
        autoplay
        circular
        interval={durationTime}
      >
       {bannerList.length && bannerList.map((item,index)=>{
           return  <SwiperItem className="swiperItem" key={item}>
                       <Image src={item} className='swiperBanner' mode='aspectFill' onClick={()=>this.previewImage(index)}/>
                    </SwiperItem>
       })}
      </Swiper>
    </View>
    );
  }
}
