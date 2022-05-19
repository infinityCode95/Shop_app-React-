import React, {useState, useEffect} from 'react';

import ProductsList from '../ProductsList/ProductsList';
import Cart from '../Cart/Cart';
import CartList from '../CartList/CartList';

import './Main.css';

function Main() {

     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(true);
     const [order, setOrder] = useState([]);
     const [cartShow, setCartShow] = useState(false);

     const addToBasket = (product) => {

          const productIndex = order.findIndex(orderItem => orderItem.mainId === product.mainId);

          if (productIndex < 0) {

               const newProduct = {
                    ...product,
                    itemsInCart: 1,
               }
     
               setOrder([...order, newProduct]);

          } else {

               const newOrder = order.map((orderItem, index) => {
                    if (index === productIndex) {
                         return {
                              ...orderItem,
                              itemsInCart: orderItem.itemsInCart + 1
                         }
                    } else {
                         return orderItem;
                    }
               })

               setOrder(newOrder); 
          }

          
     };

     const removeFromBasket = (maindId) => {
          const newOrder = order.filter(orderItem => orderItem.mainId !== maindId);
          setOrder(newOrder);
     }

     const addItemsInCart = (maindId) => {
          const newOrder = order.map(orderItem => {

               if (orderItem.mainId === maindId) {
                    const newItemsInCart = orderItem.itemsInCart + 1;
                    return {
                         ...orderItem,
                         itemsInCart: newItemsInCart  
                    } 
               } else {
                    return orderItem;  
               }
          });
          
          setOrder(newOrder);
     }

     const deleteItemsInCart = (maindId) => {
          const newOrder = order.map(orderItem => {

               if (orderItem.mainId === maindId) {
                    const newItemsInCart = orderItem.itemsInCart - 1;
                    return {
                         ...orderItem,
                         itemsInCart: newItemsInCart >= 0 ? newItemsInCart : 0,  
                    }; 
               } else {
                    return orderItem;  
               }
          });

          setOrder(newOrder);
     }

     const handleCartShow = () => {
          setCartShow(!cartShow);
     }

     useEffect(function getProducts() {
          fetch('https://fortniteapi.io/v2/shop?lang=ru', {
               headers: {
                    'Authorization': '2ea592e4-28a1c874-7f5141dc-f1df7503',
               }
          }).then(response => response.json()).then(data => {
               setProducts(data.shop)});
               setLoading(false);
     }, [])

     return (
          <div className="main">
               <div className="main__wrapper">
                    <Cart itemsInCart={order.length} handleCartShow={handleCartShow}/>
                    {loading ? 'Loading...' : <ProductsList products={products} addToBasket={addToBasket}/>}
                    {cartShow && <CartList order={order} handleCartShow={handleCartShow} removeFromBasket={removeFromBasket} addItemsInCart={addItemsInCart} deleteItemsInCart={deleteItemsInCart}/>}
               </div>
          </div>          
     )
}

export default Main;