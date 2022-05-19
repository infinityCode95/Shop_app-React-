import './Header.css';

function Header() {
     return (
          <div className="header__wrapper">
               <div className="header__container">
                    <div className="header__flex">
                         <div className="header__logo">
                              <i className="fa-brands fa-shopify fa-2x"></i>
                         </div>
                         <div className="header__title">
                              Shop                         
                         </div>
                         <nav className="header__menu">
                              <ul className='menu__items'>
                                   <li className='menu__item'>Войти</li>
                                   <li className='menu__item'>Заказы</li>
                                   <li className='menu__item'>Избранное</li>
                              </ul>
                         </nav>  
                    </div>    
               </div>
          </div>
     )
}

export default Header; 