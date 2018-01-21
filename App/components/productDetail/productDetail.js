import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class ProductDetail extends Component {

  static navigationOptions = {
    title: 'Products Detail'
  }

  render() {
    const { state: { params } } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>
          Product Detail - {params.product}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default ProductDetail;
