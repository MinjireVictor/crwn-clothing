import './product-card.styles.scss'
import Button from '../../button/button-component';
import {useContext} from 'react'
import { CartContext } from '../../context/cart.context'; 


const ProductCard=({product})=>{
    const {name, price, imageUrl}=product;
    const {addItemToCart}=useContext(CartContext)
    const addProductToCart=()=>{
        addItemToCart(product)
        console.log('Product card', product)
    }
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add To Cart</Button>

        </div>
    )
}

export default ProductCard