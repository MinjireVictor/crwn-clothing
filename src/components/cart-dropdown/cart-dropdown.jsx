import { CartDropDownContainer,EmptyMessage, CartItems } from './cart-dropdown.styles'
import Button from '../button/button-component'
import CartItem from '../cart-item/cart-item.component'
import {useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import {useNavigate} from 'react-router-dom'



const CartDropdown =()=>{
    const {cartItems}=useContext(CartContext)
    const navigate=useNavigate()

    const goToCheckoutHandler=()=>{
        navigate('/checkout')
    }
  
    cartItems.forEach((item)=>{
        console.log('item id= ',item.id)
    })
    return(
        
        <CartDropDownContainer>
            <CartItems>
                {cartItems? (cartItems.map((cartItem)=>(
                    
                        <CartItem key={cartItem.id} cartItem={cartItem}/>))):
                        <EmptyMessage> Your cart is empty</EmptyMessage>}
            <div>
            
            <Button onClick={goToCheckoutHandler}> Go to Checkout</Button>
            </div>
            </CartItems>
        </CartDropDownContainer>

    )
}

export default CartDropdown