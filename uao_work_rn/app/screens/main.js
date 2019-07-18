import React, { Component, PureComponent } from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import Colors from '../styles/colors'
import Styles from '../styles/styles'

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text>Item: {this.props.id}</Text>
          <Text style={{color: textColor}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class InterItem extends Component{
  _onPress = () => {
    console.warn(typeof this.props.info)
  };
  render(){
    return(
      <TouchableOpacity style={Styles.list_item} onPress={this._onPress}>
        <View style={Styles.list_text}>
          <Text style={Styles.txt}>{this.props.title}</Text>
          <Text style={Styles.txt_sub}>{this.props.career}</Text>
          <Text style={Styles.txt_sub}>{this.props.address}</Text>
        </View>
        <View style={Styles.list_icon}>
          <Image style={Styles.icon} source={require('../src/icons/1x/baseline_keyboard_arrow_right_black_48dp.png')}/>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class App extends Component {

  state = {
    data: null
  }

  componentWillMount = async () => {
    await fetch('http://192.168.92.1:3000/inter',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json()).then((resJSON) => {
      //console.warn(resJSON);
      this.setState({data:resJSON})
      //console.warn(typeof this.state.data, this.state.data)
    }).catch((err) => console.error(err))
  }

  _renderItem = ({item}) => {
    <InterItem
      title={item.title}
      address={item.address}
    />
  }

  render(){
    return(
      <View>
        <FlatList
          data={this.state.data}
          extraData={this.state}
          keyExtractor={(item,index) => item.id}
          renderItem={({item}) => 
            <InterItem
              title={item.title}
              career={item.career}
              address={item.address}
              info={item}
            />
          }
        />
      </View>
    )
  }
}