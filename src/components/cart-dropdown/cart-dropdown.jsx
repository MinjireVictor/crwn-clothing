import './cart-dropdown.styles.scss'
import Button from '../../button/button-component'
import CartItem from '../cart-item/cart-item.component'
import {useContext} from 'react'
import { CartContext } from '../../context/cart.context'



const CartDropdown =()=>{
    const {cartItems}=useContext(CartContext)
    console.log('CartDropDown',cartItems)
    cartItems.forEach((item)=>{
        console.log('item id= ',item.id)
    })
    return(
        
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((cartItem)=>(
                    
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                   
                        
                        ))}
     
            <Button> Go to Checkout</Button>
            </div>
        </div>

    )
}

export default CartDropdown