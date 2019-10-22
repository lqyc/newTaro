import Taro , { Component } from '@tarojs/taro';
import { View, RichText} from '@tarojs/components';
import './index.scss'



export default class ContentBox extends Component<Props> {

  constructor (props) {
      super(props)
  }
  static defaultProps = {
    contentPropsClass: ''
  }
  state={}
  componentWillMount () {}s
  componentDidMount () {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    const { tipInfo } = this.props
    const summaryClass: string = `summaryBox ${this.props.contentPropsClass}`
    return (
      <View className={summaryClass}>
        <RichText className="summaryInfo" nodes={tipInfo.summary}/>
        <View className="summaryTime">{tipInfo.timeInfo}</View>
      </View>
    );
  }
}
