import './Cart.css';

function Cart(props) {
     
     const {itemsInCart, handleCartShow} = props;

     return (
          <div className="cart" onClick={handleCartShow}>
               <i className="fa-solid fa-cart-shopping fa-lg"></i>
               {itemsInCart ? <span className="cart__items">{itemsInCart}</span> : null}
          </div>          
     )
}

export default Cart;