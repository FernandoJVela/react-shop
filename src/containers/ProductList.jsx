import React from 'react';
import { ProductItem } from '../components/ProductItem';
import { useGetProducts } from '../hooks/useGetProducts';

import '../styles/ProductList.scss'

const ProductList = () => {

	const products = useGetProducts();

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem key={product.id} product={product}/>
				))}
			</div>
		</section>
	);
}

export { ProductList };
