import React from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/ProductItem.scss';

const ProductItem = ({ product }) => {

	const {addToCart} = React.useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.description} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src="./icons/bt_add_to_cart.svg" alt="" />
				</figure>
			</div>
		</div>
	);
}

export { ProductItem };
