import './cart-checkout.styles.scss'
import {useContext} from 'react'
import { CartContext } from '../../context/cart.context' 
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CartCheckout=()=>{
    const {cartItems,cartTotal}=useContext(CartContext)

    return (
        <div className="checkout-container">
            <div className='checkout-header'>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>

        
            <div>
            {
                cartItems.map((cartItem)=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            }
            <span className="total">Total:KES {cartTotal}</span>


        </div>
        </div>
    )
}

export default CartCheckout