
  export    const cart = [
    {
        productID:
            'https://www.ikea.com/ext/ingkadam/m/18cac20c564a2bb3/original/PE902096-crop001.JPG?f=xxxs',
        qty: 3,
    },
]

const cartitems = document.querySelector('.cart');
let cartUpdate = '';
cart.forEach((item) =>{
    cartUpdate += `  <div class="cart-items-tabel">
                        <table class="cart-tabel">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>quantity</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <div>
                                        <td class="tbody  cartimg">
                                            <img  class "cart-img"
                                                src="${item.productID}"
                                                alt=""
                                                srcset=""

                                                
                                            />
                                        </td>
                                        <td class="tbody">
                                            <p>Asgaard Sofa</p>
                                        </td>
                                        <td class="tbody">
                                            <p>$100.00</p>
                                        </td>
                                        <td class="tbody">
                                            <input
                                                class="cart-input"
                                                type="number"
                                                value="1"
                                            />
                                        </td>
                                        <td class="tbody cart-subtotal">
                                            <p>$100.00</p>
                                        </td>
                                        <td class="tbody">
                                            <img
                                                src="assets/images/delete.png"
                                                alt=""
                                            />
                                        </td>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="cart-total">
                        <h2>Cart Totals</h2>
                        <div class="cart-text-items">
                            <li>
                                <h3>Subtotal</h3>
                                <p class="subtotal">$100.00</p>
                            </li>
                            <li>
                                <h3>Total</h3>
                                <p class="total">$16527.00</p>
                            </li>
                        </div>
                        <div class="cart-buttons">
                            <a href="checkout.html" class="cart-buttons__link"
                                >Checkout</a
                            >
                        </div>
                    </div>`
})
cartitems.innerHTML = cartUpdate;
