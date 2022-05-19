import CartItem from '../CartItem/CartItem';

import './CartList.css';


function CartList(props) {

     const {order, handleCartShow, removeFromBasket, addItemsInCart, deleteItemsInCart} = props;

     const totalPrice = order.reduce((sum, element) => {
          return sum + element.price.regularPrice * element.itemsInCart
     }, 0)

     return (
          <ul className="cartlist">
               <li className='cartlist__label cartlist__title'>Корзина</li>
               {order.length ? order.map(item => (
                    <CartItem key={item.mainId} {...item} removeFromBasket={removeFromBasket} addItemsInCart={addItemsInCart} deleteItemsInCart={deleteItemsInCart} />
               )): <li className='cart__noproducts'>Нет выбранных товаров</li>}
               <li className='cartlist__label cartlist__totalprice'>Общая стоимость: <span className='cartlist__span'>{totalPrice}</span> руб.</li>
               <i className="cartlogo__close fa-solid fa-square-xmark fa-2x" onClick={handleCartShow}></i> 
          </ul>
     )
}

export default CartList;