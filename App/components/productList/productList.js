//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
//react native components
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
//redux actions
import { shoppingCartActions } from '../../actions/shoppingCartActions';

class ProductList extends Component {

  static navigationOptions = {
    title: 'Products List'
  }

  componentDidMount() {
    this.props.fetchProducts();
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

export default connect(
  //map props
  state => ({ shoppingCart: state.shoppingCart }),
  //map actions
  {
    fetchProducts: shoppingCartActions.fetchProducts
  }
)(ProductList);
