import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

class ProductDetail extends Component {

  static navigationOptions = {
    title: 'Products Detail'
  }

  render() {
    const { state: { params } } = this.props.navigation;
    return (
      <View>
        <Text>
          Product Detail - {params.product}
        </Text>
      </View>
    );
  }
}

export default ProductDetail;
