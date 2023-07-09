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




function EnigmaKitchen() {

    // Selecting random product

    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const [selectedImage, setSelectedImage] = useState(selectedProduct.images[0].src);

    const [price, setPrice] = useState(selectedProduct.price);

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
                        <div className='cart-and-account-wrapper'>
                            <img className='ek-cart' src={CartIcon} />
                            <img className='ek-account' src={AccountIcon} />
                        </div>
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
                        <h6 className='breadcrumbs'>
                            <span>Home</span>
                            {selectedProduct.breadcrumbs.map((breadcrumb, index) => (
                                <span key={index + 1}>
                                    {' | '}
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
                        <p className='product-brief-description'>{selectedProduct.briefDescription}</p>
                        <p>{selectedProduct.overallRating}</p>
                        <p>Price:</p>
                        <h4>{price}</h4>
                        {
                            selectedProduct.variants.map((variant, variantIndex) => (
                                <div className='option' key={`variant-${variantIndex}`}>
                                    <label htmlFor={variant.type}>{variant.type}:</label>
                                    <div>
                                        {variant.options.map((option, optionIndex) => (
                                            <div key={`option-${optionIndex}`}>
                                                <label htmlFor={option.name}>
                                                    <input
                                                        id={option.name}
                                                        type="radio"
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
                                <button onClick={() => decreaseQuantity()}>-</button>
                                <input onChange={(e) => setQuantity(Number(e.target.value))} value={quantity} />
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button className='add-to-cart-btn'>Add to Cart</button>
                            <button className='save-for-later-btn'>Save for Later</button>
                        </div>
                    </div>
                </div>
                {/* More Information */}
                <div className='ek-more-information-block'>
                    <div className='tab-wrapper'>
                        <button>Description</button>
                        <button>Reviews</button>
                        <button>FAQ</button>
                        <button>Instructions</button>
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
                        {similarProducts.map((item) => (
                            <div className='product' onClick={() => {
                                setSelectedProduct(products[item.id - 1])
                                setSelectedImage(products[item.id - 1].images[0].src)
                            }} key={item.id}>
                                {/* Render the product details */}
                                <img src={item.images[0].src} />
                                <h6>{item.name}</h6>
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
                            }} key={item.id}>
                                {/* Render the product details */}
                                <img src={item.images[0].src} />
                                <h6>{item.name}</h6>
                                <p>{item.overallRating}</p>
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
                <Footer />
            </div>
        </>
    )
}

export default EnigmaKitchen;