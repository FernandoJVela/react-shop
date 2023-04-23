import React from "react";

import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const useGetProducts = () => {
    const [products, setProducts] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
		  const response = await axios(API);
		  setProducts(response.data);
		};
		fetchData();
	  }, []);

    return products;
}

export { useGetProducts };