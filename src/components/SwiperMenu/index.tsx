import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import './index.scss'

interface IState {}
export default class SwiperMenu extends Component<IProps,IState> {
    constructor (props) {
        super(props)
    }
    // state:IState = {
    //     currentIndex: 0
    // }
    static defaultProps = {
        currentIndex :0
      } as IProps;
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  changeMenu(index: number) {
    this.props.changeMenu && this.props.changeMenu(index);
  }
  render() {
    const multipleItem:number =3;
    const SwiperList:Array<any> = [{name:'全部',id:0},{name:'快门',id:1},{name:'旅游',id:2},{name:'碎碎念',id:3}]
    const { currentIndex } =this.props;
  return (
    <View>
      <Swiper
        className="SwiperBox"
        previous-margin="10px"
        next-margin="20px"
        display-multiple-items={multipleItem}
      >
       {SwiperList.length && SwiperList.map((item,index)=>{
           return  <SwiperItem className="swiperItem" key={item.id} onClick={() => { this.changeMenu(index)}}>
                     <View className={`${currentIndex === index ?'activeSwiper':'defaultSwiper'} swiperView`}>{item.name}</View>
                    </SwiperItem>
       })}
      </Swiper>
    </View>
    );
  }
}
