import Taro , { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss'

export default class SubTitle extends Component<Props>  {

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
  render() {
      const {titleName} = this.props;
    return (
      <View className="subTitleWrap flexBetween">
        <View  className="subTitle">
            <Text className="subTitleIcon"></Text>
            <Text className="subTitleName">{titleName}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}