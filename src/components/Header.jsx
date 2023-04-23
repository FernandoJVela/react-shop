import React from 'react';
import { Menu } from './Menu';
import { MyOrder } from '../containers/MyOrder';
import { AppContext } from '../context/AppContext';

import '../styles/Header.scss';

const Header = () => {
  const {state} = React.useContext(AppContext);
  const [toggle, setToggle] = React.useState(false);
  const [toggleOrders, setToggleOrders] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

    return (
        <nav>
        <div className="navbar-left">
          <img src={"./icons/icon_menu.svg"} alt="menu" className="menu" />
      
          <div className="navbar-left">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
      
            <ul>
              <li>
                <a href="/">All</a>
              </li>
              <li>
                <a href="/">Clothes</a>
              </li>
              <li>
                <a href="/">Electronics</a>
              </li>
              <li>
                <a href="/">Furnitures</a>
              </li>
              <li>
                <a href="/">Toys</a>
              </li>
              <li>
                <a href="/">Others</a>
              </li>
            </ul>
          </div>
        </div>
    
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
            <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
              <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
              {!!state.cart.length && <div>{state.cart.length}</div>}
            </li>
          </ul>
        </div>
        {!!toggle && <Menu />}
        {!!toggleOrders && <MyOrder />}
      </nav>
    );
};

export {Header};