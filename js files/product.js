let productIdCounter = 1 // Starting ID

function generateProductId() {
    return productIdCounter++
}

const products = [
    {
        id: generateProductId(),
        prodImg:
            'https://www.ikea.com/ext/ingkadam/m/6a45c4b432e561a2/original/PE870630.JPG?f=xl',
        prodName: 'Poäng Armchair',
        category: 'Modern lounge chair',
        price: {
            original: 120,
            discounted: 90,
        },
    },

    {
        id: generateProductId(),
        prodImg:
            'https://www.ikea.com/ext/ingkadam/m/21b08931a33f3a8d/original/CaseStenaFastigheterv1_Static_5x7_HFB003_img4.jpg?f=xs',
        prodName: 'Strandmon Wing Chair',
        category: 'Classic armchair',
        price: {
            original: 150,
            discounted: 120,
        },
    },
    {
        id: generateProductId(),
        prodImg:
            'https://www.ikea.com/ext/ingkadam/m/7eb0b81344246d74/original/PH183253-crop001.jpg?f=xs',
        prodName: 'Ekenäset Armchair',
        category: 'Retro lounge chair',
        price: {
            original: 200,
            discounted: 170,
        },
    },
    {
        id: generateProductId(),
        prodImg:
            'https://www.ikea.com/ext/ingkadam/m/3282a07e25affe57/original/PH194976.jpg?f=xs',
        prodName: 'Vihals Armchair',
        category: 'Contemporary lounge chair',
        price: {
            original: 180,
            discounted: 150,
        },
    },
    {
        id: generateProductId(),
        prodImg:
            'https://www.ikea.com/ext/ingkadam/m/3d3853da3b435134/original/PH195184.jpg?f=xxxs',
        prodName: 'Vapplinge Armchair',
        category: 'Minimalist chair',
        price: {
            original: 140,
            discounted: 110,
        },
    },
    {
        id: generateProductId(),
        prodImg:
            'https://www.ikea.com/fr/fr/images/products/landskrona-canape-3-places-avec-meridienne-grann-bomstad-brun-dore-metal__0602354_pe680288_s5.jpg?f=xs',
        prodName: 'Farjestad Armchair',
        category: 'Scandinavian chair',
        price: {
            original: 160,
            discounted: 130,
        },
    },
    {
        id: generateProductId(),
        prodImg:
            'https://www.ikea.com/fr/fr/images/products/stockholm-canape-3-places-seglora-naturel__0212281_pe339545_s5.jpg?f=xxs',
        prodName: 'Landskrona Armchair',
        category: 'Modern classic chair',
        price: {
            original: 220,
            discounted: 190,
        },
    },
    {
        id: generateProductId(),
        prodImg:
            'https://www.ikea.com/ext/ingkadam/m/18cac20c564a2bb3/original/PE902096-crop001.JPG?f=xxxs',
        prodName: 'Landskrona Armchair',
        category: 'Outdoor lounge chair',
        price: {
            original: 130,
            discounted: 100,
        },
    },
]

let productDisplay = ''
function createAprod() {
    products.forEach((product) => {
        productDisplay += `   <div class="product-item">
                                <div class="product__img">
                                    <img
                                        src="${product.prodImg}"
                                    />
                                    <span>-25%</span>
                                </div>
                                <div class="product__overlay">
                                    <div class="product__overlay-content">
                                     <button class="btn addtoCart" data-product-name="${product.id}">Add to Cart</button>
                                        <div class="prod__overlay--icons">
                                            <p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="icons"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                                    />
                                                </svg>
                                                <span>share</span>
                                            </p>
                                            <p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="icons"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                                                    />
                                                </svg>
                                                <span>Compare</span>
                                            </p>
                                            <p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    class="icons"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                    />
                                                </svg>
                                                <span>like</span>
                                            </p>
                                        </div>
                                    </div>
    
                                    <div class="prod__textbox">
                                        <h2>${product.prodName}</h2>
                                        <p>${product.category}</p>
                                        <div class="prod__price">
                                            <span>$${product.price.original}</span>
                                            <span class="old-price">$${product.price.discounted}</span>
                                        </div>
                                    </div>
                                </div>
                            </div> `
    })

    const productsItems = document.querySelector('.products')
    productsItems.innerHTML = productDisplay
}

createAprod();
const btns = document.querySelectorAll('.addtoCart')

import { cart } from "../js files/cart.js"


// Loop through each button
// Loop through each button
btns.forEach((button) => {
    // Add a click event listener to each button
    button.addEventListener('click', () => {
        // Get the product ID from the button's data attribute
        const productID = button.dataset.productName

        // Check if the product is already in the cart
        let matchProd = cart.find((item) => item.productID === productID)

        // If a matching product was found in the cart, increment its quantity
        if (matchProd) {
            matchProd.qty += 1
        } else {
            // If no matching product was found, add a new item to the cart
            cart.push({
                productID,
                qty: 1,
            })
        }

        // Calculate the total quantity of items in the cart
        let cartQty = 0
        cart.forEach((item) => {
            cartQty += item.qty
        })

        // Get the cart icon element
        const cartIcon = document.querySelector('.cart-icon')

        // Update the inner HTML of the cart icon element to display the total quantity of items in the cart
        cartIcon.innerHTML = cartQty

        // Log the updated cart after each button click
    })
})

