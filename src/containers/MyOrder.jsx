import React from 'react';
import OrderItem from '../components/OrderItem';
import { AppContext } from '../context/AppContext';
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const {state} = React.useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => (accumulator + currentValue.price);
		const sum  = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src="./icons/flechita.svg" alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem product={product} key={`orderItem-${index}`} indexValue={index}/>
				))}				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal() ?? 0}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export {MyOrder};
