import { ProductCardContainer, Footer, ImageStyles,InvertedButton} from './product-card.styles';
import Button, {BUTTON_TYPE_CLASS} from '../button/button-component';
import {useContext} from 'react'
import { getButton } from '../button/button-component';
import { CartContext } from '../../context/cart.context'; 

const ProductCard=({product})=>{
    const {name, price, imageUrl}=product;
    const {addItemToCart}=useContext(CartContext)
    const addProductToCart=()=>{
        addItemToCart(product)
        console.log('Product card', product)
    }

    const CustomButton=getButton(BUTTON_TYPE_CLASS.inverted)
    return(
        <ProductCardContainer>
            <ImageStyles src={imageUrl} alt={`${name}`}/>
            <Footer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </Footer>
            <CustomButton style={{marginTop:20}} onClick={addProductToCart}>Add To Cart</CustomButton>

        </ProductCardContainer>
    )
}

export default ProductCard