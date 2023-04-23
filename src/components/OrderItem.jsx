import React from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/OrderItem.scss';

const OrderItem = ({product, indexValue}) => {
	const {removeFromCart} = React.useContext(AppContext);

	const handleRemove = (index) => {
		removeFromCart(index);
	};

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src="./icons/icon_close.png" alt="close" onClick={() => handleRemove(indexValue)}/>
		</div>
	);
}

export default OrderItem;
