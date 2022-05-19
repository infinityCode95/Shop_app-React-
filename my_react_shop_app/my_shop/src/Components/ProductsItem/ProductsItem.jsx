import './ProductsItem.css'; 


function ProductsItem(props) {

     const {
          mainId,
          displayName,
          displayType,
          price: {
               regularPrice,
          },
          displayAssets: [{
               background
          }],
          addToBasket
     } = props;

     return (
          <div className="products__item">

               <div className="item__logo">
                    <img className='logo' src={background}  alt="image"/>     
               </div>

               <ul className="list">

                    <li className="item__title list__item">
                         {displayName}     
                    </li>
                    
                    <li className="item__price list__item">
                         Цена : <span className='item__span'>{regularPrice}</span> руб.
                    </li>

                    <li className="item__type list__item">
                         Тип : <span className='item__span'>{displayType}</span>
                    </li>

                    <div onClick={() => addToBasket({
                    mainId,
                    displayName,
                    price: {
                         regularPrice,
                    }
                    })} className="item__btn">
                              Купить
                    </div>

               </ul>
              
          </div>   
     )
}

export default ProductsItem;