import "./checkout-item.styles.scss"
import {useContext} from 'react'
import { CartContext } from '../../context/cart.context' 


const CheckoutItem=({cartItem})=>{
    const {cartItems,addItemToCart,removeItemFromCart,deleteItemFromCart}=useContext(CartContext)
    const deleteItemFromCartHandler=()=>deleteItemFromCart(cartItem)
    const incrementCartItemHandler=()=>addItemToCart(cartItem)
    const decrementCartItemHandler=()=>removeItemFromCart(cartItem)



    const {name, imageUrl,price,quantity}=cartItem
    return(
        <div className="checkout-item-container">
            <div className="image-container">
            <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decrementCartItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={incrementCartItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={deleteItemFromCartHandler} >&#10005;</div>
            
        </div>

    )
}
export default CheckoutItem