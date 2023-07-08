import './EnigmaKitchen.scss';
import EnigmaKitchenLogo from '../assets/EnigmaKitchen/ek-logo.svg'
import AccountIcon from '../assets/EnigmaKitchen/account.svg'
import CartIcon from '../assets/EnigmaKitchen/cart.svg'
import SearchIcon from '../assets/EnigmaKitchen/search.svg'


function EnigmaKitchen() {

    return (
        <>
            <div className='ek-wrapper'>
                <nav className='ek-nav'>
                    <div className='main-nav-wrapper'>
                        <img src={EnigmaKitchenLogo} className='ek-logo' />
                        <div className='search-wrapper'>
                            <input placeholder='Search...' className='ek-search'></input>
                            <button className='search-button'><img src={SearchIcon} /></button>
                        </div>
                        <img className='ek-cart' src={CartIcon} />
                        <img className='ek-account' src={AccountIcon} />
                    </div>
                    <nav className='sub-nav'>
                        <a href=''>All</a>
                        <a href=''>Today's Deals</a>
                        <a href=''>Entrees</a>
                        <a href=''>Treats</a>
                        <a href=''>Drinks</a>
                        <a href=''>Mystery Boxes</a>
                    </nav>
                </nav>
                {/* Product */}
                <div className='ek-product-wrapper'>
                    {/* Product Images */}
                    <div className='ek-product-image-wrapper'>
                        <h6 className='breadcrumbs' >Lorem | Lorem | Lorem | Lorem</h6>
                        <div className='ek-product-images'>
                            <img className='main-image' src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80' />
                            <div className='sub-images'>
                                <img src='https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80' />
                                <img src='https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80' />
                                <img src='https://plus.unsplash.com/premium_photo-1664360228046-a0a7ccf4fb38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
                                <img src='https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=722&q=80' />
                            </div>
                        </div>
                    </div>
                    {/* Product Info and Options */}
                    <div className='ek-product-information'>
                        <h1>Product Title</h1>
                        <p>Lorem Lorem Lorem Lorem LoremLorem Lorem LoremLorem</p>
                        <p>Reviews</p>
                        <p>Price:</p>
                        <h4>$40.00 - $50.00</h4>
                        <div className='product-options'>
                            <label htmlFor="size">Size:</label><br />
                            <input id="size" type="text" /><br />
                            <label htmlFor="flavor">Flavor:</label><br />
                            <input id="flavor" type="text" /><br />
                            <label htmlFor="add-ons">Add Ons:</label><br />
                            <input id="add-ons" type="text" /><br />
                        </div>
                    </div>
                    {/* Quantity and Add to Cart */}
                    <div className='ek-product-add-to-cart'>
                        <div className='cart-wrapper'>
                            <select>

                            </select>
                            <button>Add to Cart</button>
                            <button>Save for Later</button>
                        </div>
                    </div>
                </div>
                {/* More Information */}
                <div className='ek-more-information-block'>
                    <div className='tab-wrapper'>
                        <button>Tab1</button>
                        <button>Tab2</button>
                        <button>Tab3</button>
                        <button>Tab4</button>
                    </div>
                    <div className='ek-more-information-wrapper'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                {/* Similar Products */}
                <div className='ek-similar-products-block'>
                    <h5 className='ek-block-title'>More Like This</h5>
                    <div className='ek-more-products-wrapper'>
                        <button>Left</button>
                        <div className='product'></div>
                        <div className='product'></div>
                        <div className='product'></div>
                        <div className='product'></div>
                        <button>right</button>
                    </div>
                </div>
                {/* Customers also Bought */}
                <div className='ek-also-bought-block'>
                    <h5 className='ek-block-title'>Customers also Bought</h5>
                    <div className='ek-more-products-wrapper'>
                        <button>Left</button>
                        <div className='product'></div>
                        <div className='product'></div>
                        <div className='product'></div>
                        <div className='product'></div>
                        <button>right</button>
                    </div>
                </div>
                {/* Newsletter */}
                <div className='ek-newsletter-block'>
                    <h3>Join the Enigma Club.</h3>
                    <button> Sign up for Free</button>
                </div>
                {/* Footer */}
                <div className='ek-footer-block'>
                    <footer className='ek-footer'>
                        <div className='ek-connect'>
                            <p>Let's Connect</p>
                        </div>
                        <ul>
                            <li>Products</li>
                            <li>Products</li>
                            <li>Products</li>
                            <li>Products</li>
                        </ul>
                        <ul>
                            <li>Collection</li>
                            <li>Collection</li>
                            <li>Collection</li>
                            <li>Collection</li>
                        </ul>
                        <ul>
                            <li>Other</li>
                            <li>Other</li>
                            <li>Other</li>
                            <li>Other</li>
                        </ul>
                    </footer>
                </div>
                {/* Notices */}
                <div className='ek-notice-block'>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                </div>
            </div>
        </>
    )
}

export default EnigmaKitchen;