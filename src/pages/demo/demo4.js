import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import NavBar from '@components/navbar_lxy';
import withComponent from './mixin';
import './index.scss';

@withComponent
export default class Index extends Component {
  config = {
    navigationBarTextStyle: 'white',
    navigationStyle: 'custom',
    backgroundColor: '#f8f8f8',
    backgroundColorTop: '#00000',
    backgroundColorBottom: '#f8f8f8'
  };

  state = {};
  handlerGobackClick() {
    const pages = Taro.getCurrentPages();
    if (pages.length >= 2) {
      Taro.navigateBack({
        delta: 1
      });
    } else {
      Taro.navigateTo({
        url: '/pages/index/index'
      });
    }
  }
  render() {
    return (
      <View className='main-wraper'>
        <NavBar
          title='深色背景详情页'
          background='#000000'
          color='#fff'
          iconTheme='white'
          back
          onBack={this.handlerGobackClick}
        />
        <View className='main'>
          <View className='p'>深色背景详情页</View>
        </View>
      </View>
    );
  }
}
