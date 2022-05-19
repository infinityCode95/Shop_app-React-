
import './CartItem.css';

function CartItem(props) {

     const {
          mainId,
          displayName,
          price: {
               regularPrice,
          },
          itemsInCart,
          removeFromBasket,
          addItemsInCart,
          deleteItemsInCart
     } = props;

     return (
          <div className="cartitem__wrapper">
               <li className='cartitem'>
                    <div className="cartitem__title">
                         {displayName}
                         (<i className="adddelete__items fa-solid fa-angle-up" onClick={() => addItemsInCart(mainId)}></i> 
                         <span className='cartitem__price'>{itemsInCart}</span> 
                         <i className="adddelete__items fa-solid fa-angle-down" onClick={() => deleteItemsInCart(mainId)}></i> шт) = 
                         <span className='cartitem__price'>{regularPrice * itemsInCart}</span> рублей
                    </div>
                    
                    <i className="cartitem__logo fa-solid fa-xmark" onClick={() => removeFromBasket(mainId)}></i>
               </li>
          </div> 
     )
}

export default CartItem; 