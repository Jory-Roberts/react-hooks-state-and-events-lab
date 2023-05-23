import React, { useState } from 'react';

function Item({ name, category }) {
	const [inCart, setInCart] = useState('');
	// const addToCart = inCart ? 'in-cart' : '';

	function handleAddToCart() {
		setInCart((addToCart) => !addToCart);
	}

	return (
		<li className={inCart ? 'in-cart' : ''}>
			<span>{name}</span>
			<span className='category'>{category}</span>
			<button
				className='add'
				onClick={handleAddToCart}
			>
				{inCart ? 'Remove From Cart' : 'Add to Cart'}
			</button>
		</li>
	);
}

export default Item;
