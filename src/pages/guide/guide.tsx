import Taro , { Component, Config } from '@tarojs/taro';
import { View , Navigator,Image} from '@tarojs/components';
import { guideBg } from '../../utils/common'
import './guide.scss'
// import guideBg from '../../assets/img/Onboarding3.png'

export default class Guide extends Component {

  config: Config = {
    backgroundTextStyle: 'light',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'welcome',
    navigationStyle: 'custom'
  }

  constructor (props) {
    super(props)
  }


  componentWillMount () {}
  componentDidMount () {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="container">
        <Image src={guideBg} className="bgImg" mode='aspectFill'></Image>
        <Navigator url='/pages/index/index' className="nextBtn textCenter" open-type="switchTab" >GO</Navigator>
      </View>
    );
  }
}