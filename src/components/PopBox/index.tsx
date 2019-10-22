import Taro , { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss'

interface IProps  {
    showPop: boolean,
    animation: string,
    position: string,
    zIndex: number,
    closePopBox: any
}
type IState = {
  animatecls: Array<string>,
  visible: boolean
}
export default class PopBox extends Component<IProps,IState> {

  constructor (props) {
        super(props)
   }
  state:IState = {
    animatecls: ['animate__slideDown_in','animate__fade_in'],
    visible: false
  }
  static defaultProps = {
    showPop: false,
    zIndex: 100,
    animation: 'fade', // fade slideDown slideUp slideLeft slideRight
    position: 'bottom'
  } as IProps;

  componentWillMount () {}
  componentDidMount () {
  } 
  componentWillReceiveProps (nextProps,nextContext) {
    console.log('ReceiveProps',nextProps,nextContext);
    let {showPop, animation} = nextProps
    if (showPop) {
      this.showPop(animation)
    } else this.hidePop(animation)
  } 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  clickCloseBackdro() {
    // e.stopPropagation() // 阻止事件冒泡/
    this.props.closePopBox && this.props.closePopBox();
  }
  showPop(animation) {
    const className :Array<string>  = [`animate__${animation}_in`, 'animate__fade_in']
    this.setState({
      animatecls: className,
      visible: true
    })
    
  }
  hidePop(animation) {
    const className :Array<string>  = [`animate__${animation}_out`, 'animate__fade_out']
    this.setState({
      animatecls: className,
      visible: false
    })
  }
  noop() {}
  render() {
      const { position,zIndex } = this.props
      let {animatecls,visible} = this.state
    return (
      <View className={`w-popup popup--${position}`} hidden={ !visible } style={`z-index: ${zIndex}`}
            onClick={() => { this.clickCloseBackdro()}}>
         <View className={`popup-backdrop ${animatecls[1]}`}
               hidden={ !visible }>
            <View className={`popup-conten ${animatecls[0]}`}>
              {this.props.children}
            </View>
         </View>
      </View>
    );
  }
}
