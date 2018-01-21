import { StackNavigator } from 'react-navigation';

import ProductList from '../components/productList/productList';
import ProductDetail from '../components/productDetail/productDetail';

const RootNavigator = StackNavigator(
  {
    products: {
      screen: ProductList
    },
    productDetail: {
      screen: ProductDetail
    },
  }
)

export default RootNavigator;
