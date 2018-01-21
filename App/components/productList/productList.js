import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

class ProductList extends Component {

  static navigationOptions = {
    title: 'Products List'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>
          Product List component
        </Text>
        <Button
          onPress={() => { navigate('productDetail', { "product": 'product 1' }) }}
          title="Go to Detail"
        />
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
