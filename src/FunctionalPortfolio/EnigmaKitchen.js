import './EnigmaKitchen.scss';
import EnigmaKitchenLogo from '../assets/EnigmaKitchen/ek-logo.svg'
import AccountIcon from '../assets/EnigmaKitchen/account.svg'
import CartIcon from '../assets/EnigmaKitchen/cart.svg'
import SearchIcon from '../assets/EnigmaKitchen/search.svg'
import Footer from '../Footer';
import ImageZoom from './ImageZoom';
import { useEffect, useState } from 'react';
import products from './EnigmaProducts';
import ReactStars from "react-rating-stars-component";
import facebook from '../assets/EnigmaKitchen/tg-fb-01.svg'
import instagram from '../assets/EnigmaKitchen/tg-instagram-01.svg'
import youtube from '../assets/EnigmaKitchen/tg-youtube-01.svg'
import tiktok from '../assets/EnigmaKitchen/tg-tik-tok-01.svg'



function EnigmaKitchen() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    // Nav Hide
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const screenWidth = window.innerWidth;

            if (screenWidth > 768) { // Adjust the screen width threshold as needed
                if (currentScrollPos > prevScrollPos && !isScrollingUp) {
                    setIsScrollingUp(true);
                } else if (currentScrollPos < prevScrollPos && isScrollingUp) {
                    setIsScrollingUp(false);
                }
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, isScrollingUp]);


    // Selecting random product

    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [selectedImage, setSelectedImage] = useState(selectedProduct.images[0].src);

    const [price, setPrice] = useState(selectedProduct.price);
    const [totalPrice, setTotalPrice] = useState(null);

    // Handling option change

    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionChange = (event, variantType) => {
        const selectedOption = event.target.value;
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [variantType]: selectedOption,
        }));

        const variant = selectedProduct.variants.find(
            (variant) => variant.type === variantType
        );
        const option = variant.options.find(
            (option) => option.name === selectedOption
        );

        if (option) {
            setPrice((prevPrice) => prevPrice + option.priceAdjustment);
        }
    };

    // Handling quantity

    let [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    // Selecting random products

    const [similarProducts, setSimilarProducts] = useState([]);
    const [alsoBoughtProducts, setAlsoBoughtProducts] = useState([]);

    useEffect(() => {

        const copyOfProducts = [...products];

        const selectedProductIndex = copyOfProducts.findIndex(
            (product) => product.id === selectedProduct.id
        );

        if (selectedProductIndex !== -1) {
            copyOfProducts.splice(selectedProductIndex, 1);
        }

        const randomItems = [];

        while (randomItems.length < 8 && copyOfProducts.length > 0) {
            const randomIndex = Math.floor(Math.random() * copyOfProducts.length);
            const [selectedItem] = copyOfProducts.splice(randomIndex, 1);
            randomItems.push(selectedItem);
        }

        // Split the random items into two arrays
        const halfLength = Math.ceil(randomItems.length / 2);
        const similarProducts = randomItems.slice(0, halfLength);
        const alsoBoughtProducts = randomItems.slice(halfLength);

        setSimilarProducts(similarProducts);
        setAlsoBoughtProducts(alsoBoughtProducts);
    }, [products, selectedProduct]);

    // Stars

    const starReview = {
        size: 30,
        edit: false,
        activeColor: '#27b9ad',
    };

    const tabStarReview = {
        size: 30,
        edit: false,
        activeColor: '#f2fbfb',
    };


    // Tabs

    const [activeTab, setActiveTab] = useState('description')

    // Cart

    const [isCartModalVisible, setCartModalVisible] = useState(false);

    const handleCartClick = () => {
        if (isCartModalVisible) {
            setCartModalVisible(false);
        } else {
            setCartModalVisible(true);
        }
    };

    const [cart, setCart] = useState([]);

    const emptyCart = () => {
        setTotalPrice(null);
        setCart([]);
    }

    const handleAddToCart = () => {

        setTotalPrice(prevTotalPrice => prevTotalPrice + price * quantity);


        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex((item) => item.id === selectedProduct.id);

        if (existingItemIndex !== -1) {
            // Item already exists in the cart, update the quantity
            updatedCart[existingItemIndex].quantity += quantity;
        } else {
            // Item doesn't exist in the cart, add it as a new item
            updatedCart.push({
                id: selectedProduct.id,
                name: selectedProduct.name,
                quantity: quantity,
            });
        }

        setCart(updatedCart);
    };


    return (
        <>
            <div className='ek-wrapper'>
                {/* Cart */}
                {isCartModalVisible && (
                    <div className='cart-modal'>
                        <button className='close-cart-btn' onClick={() => setCartModalVisible(false)}>X</button>
                        {/* Modal content */}
                        {cart.map((item) => (
                            <div className='cart-modal-item' key={item.id}>
                                <h6>{item.name}</h6>
                                <p>x{item.quantity}</p>
                                {/* Add additional item details if needed */}
                            </div>
                        ))}
                        {
                            totalPrice > 0 ?
                                <div className='total-modal-wrapper'>
                                    <p>Total:</p>
                                    <p className='total-cart-modal'>{totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                </div> : ''
                        }
                        <button onClick={() => emptyCart()} className='checkout-btn'>Checkout</button>
                        <button onClick={() => emptyCart()} className='empty-cart'>Empty Cart</button>
                    </div>
                )}
                {/* Nav */}
                <nav className={`ek-nav ${isScrollingUp ? "scroll-up" : ""}`}>
                    <div className='main-nav-wrapper'>
                        <img src={EnigmaKitchenLogo} className='ek-logo' />
                        <div className='search-wrapper mobile-hide'>
                            <input placeholder='Search...' className='ek-search'></input>
                            <button className='search-button'><img src={SearchIcon} /></button>
                        </div>
                        <div className='cart-and-account-wrapper'>
                            <img
                                onClick={() => handleCartClick()} className='ek-cart' src={CartIcon} />
                            <img className='ek-account mobile-hide' src={AccountIcon} />
                        </div>
                    </div>
                    <nav className='sub-nav mobile-hide'>
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
                        <h6 className='breadcrumbs'>
                            <span>Home</span>
                            {selectedProduct.breadcrumbs.map((breadcrumb, index) => (
                                <span key={index + 1}>
                                    {' > '}
                                    {breadcrumb}
                                </span>
                            ))}
                        </h6>
                        <div className='ek-product-images'>
                            <ImageZoom
                                className='main-image'
                                src={selectedImage}
                            />
                            <div className='sub-images'>
                                {selectedProduct.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.src}
                                        alt={image.alt}
                                        onClick={() => {
                                            setSelectedImage(image.src)
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Product Info and Options */}
                    <div className='ek-product-information'>
                        <h1 className='product-title'>{selectedProduct.name}</h1>
                        <ReactStars value={selectedProduct.overallRating} {...starReview} />
                        <p className='product-brief-description'>{selectedProduct.briefDescription}</p>
                        <p>Price:</p>
                        <h4 className='display-price'>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h4>
                        {
                            selectedProduct.variants.map((variant, variantIndex) => (
                                <div className='option' key={`variant-${variantIndex}`}>
                                    <label className='type-label' htmlFor={variant.type}>{variant.type}:</label>
                                    <div>
                                        {variant.options.map((option, optionIndex) => (
                                            <div key={`option-${optionIndex}`}>
                                                <label htmlFor={option.name}>
                                                    <input
                                                        id={option.name}
                                                        type="radio"
                                                        className='radio-btn'
                                                        name={variant.type}
                                                        value={option.name}
                                                        onChange={(event) => handleOptionChange(event, variant.type)}
                                                    />
                                                    {option.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    {/* Quantity and Add to Cart */}
                    <div className='ek-product-add-to-cart'>
                        <div className='cart-wrapper'>
                            <p>Quantity:</p>
                            <div className='quantity-wrapper'>
                                <button onClick={() => {
                                    decreaseQuantity()
                                }}>-</button>
                                <input onChange={(e) => {
                                    setQuantity(Number(e.target.value));
                                }} value={quantity} />
                                <button onClick={() => {
                                    setQuantity(quantity + 1)
                                }}>+</button>
                            </div>
                            <p className='total-price'>Total price: ${price * quantity}</p>
                            <button onClick={() => handleAddToCart()} className='add-to-cart-btn'>Add to Cart</button>
                            <button className='save-for-later-btn'>Save for Later</button>
                        </div>
                    </div>
                </div>
                {/* More Information */}
                <div className='ek-more-information-block'>
                    <div className='tab-wrapper'>
                        <button className={`tab-button ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
                        <button className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                        <button className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => setActiveTab('faq')}>FAQ</button>
                        <button className={`tab-button ${activeTab === 'instructions' ? 'active' : ''}`} onClick={() => setActiveTab('instructions')}>Instructions</button>
                    </div>
                    <div className='ek-more-information-wrapper'>
                        {activeTab === 'description' && (
                            <p>{selectedProduct.description}</p>
                        )}
                        {activeTab === 'reviews' && (
                            <div className='reviews-section'>
                                {selectedProduct.reviews.map((review, index) => (
                                    <div className='review-item' key={index}>
                                        <ReactStars value={review.rating} {...tabStarReview} />
                                        <p className='customer-review'><strong>{review.customer}</strong></p>
                                        <p>{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'faq' && (
                            <div className='faq-section'>
                                {selectedProduct.faq.map((item, index) => (
                                    <div className='faq-item' key={index}>
                                        <h6 className='faq-question'>{item.question}</h6>
                                        <p>{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'instructions' && (
                            <p>{selectedProduct.instructions}</p>
                        )}
                    </div>
                </div>
                {/* Similar Products */}
                <div className='ek-similar-products-block'>
                    <h5 className='ek-block-title'>More Like This</h5>
                    <div className='ek-more-products-wrapper'>
                        {similarProducts.map((item) => (
                            <div className='product' onClick={() => {
                                setSelectedProduct(products[item.id - 1])
                                setSelectedImage(products[item.id - 1].images[0].src)
                                setActiveTab('description');
                                window.scrollTo(0, 0);
                            }} key={item.id}>
                                {/* Render the product details */}
                                <img src={item.images[0].src} />
                                <h6>{item.name}</h6>
                                <p>${item.price}</p>
                                <ReactStars value={item.overallRating} {...starReview} />
                            </div>
                        ))}
                    </div>
                </div>


                {/* Customers also Bought */}
                <div className='ek-also-bought-block'>
                    <h5 className='ek-block-title'>Customers also Bought</h5>
                    <div className='ek-more-products-wrapper'>
                        {alsoBoughtProducts.map((item) => (
                            <div className='product' onClick={() => {
                                setSelectedProduct(products[item.id - 1])
                                setSelectedImage(products[item.id - 1].images[0].src)
                                setActiveTab('description');
                                window.scrollTo(0, 0);
                            }} key={item.id}>
                                {/* Render the product details */}
                                <img src={item.images[0].src} />
                                <h6>{item.name}</h6>
                                <p>${item.price}</p>
                                <ReactStars value={item.overallRating} {...starReview} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className='ek-newsletter-block'>
                    <h3>Join the Enigma Club.</h3>
                    <button> Sign up for Free</button>
                </div>
                <div className='ek-footer-block'>
                    <footer className='ek-footer'>
                        <div className='ek-connect'>
                            <p><strong>Let's Connect</strong></p>
                            <div className='about-social-links enigma'>
                                <img src={youtube} alt='YouTube' />
                                <img src={facebook} alt='Facebook' />
                                <img src={instagram} alt='Instagram' />
                                <img src={tiktok} alt='TikTok' />
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>Menu</li>
                                <li>Specials</li>
                                <li>Events</li>
                                <li>Gift Cards</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Signature Dishes</li>
                                <li>Unique Drinks</li>
                                <li>Enigma Delights</li>
                                <li>Sweet Treats</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                    </footer>
                </div>

                {/* Notices */}
                {/* <div className='ek-notice-block'>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                    <h4>lorem</h4>
                </div> */}
                <Footer />
            </div>
        </>
    )
}

export default EnigmaKitchen;