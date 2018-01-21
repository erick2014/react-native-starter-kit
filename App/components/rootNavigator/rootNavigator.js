import { StackNavigator } from 'react-navigation';

import ProductList from '../productList/productList';
import ProductDetail from '../productDetail/productDetail';

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