import React from "react";

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((item, index) => index !== indexValue),
        });
    };

    return {
        state,
        addToCart,
        removeFromCart,
    };
};

export {useInitialState};