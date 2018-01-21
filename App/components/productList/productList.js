import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class ProductList extends Component {
  static navigationOptions = {
    title: 'Products List'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Product List component
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

export default ProductList;
