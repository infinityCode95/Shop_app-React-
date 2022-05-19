import ProductsItem from "../ProductsItem/ProductsItem";

import './ProductsList.css';


function ProductsList(props) {

     const {products, addToBasket} = props;

     if (!products.length) {
          return <h3>Ничего не найдено</h3>
     }

     return (
          <div className="products">
               <div className="products__wrapper">
                    <div className="products__flex">
                         {products.map(product => (
                              <ProductsItem key={product.mainId} {...product} addToBasket={addToBasket}/>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default ProductsList; 