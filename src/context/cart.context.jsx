import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext({
    cartItems:[],
    isCartOpen:()=>{},
    cartCount:0
})

const addCartItem=(cartItems,productToAdd)=>{
    const existingItem=cartItems.find((cartItem)=>cartItem.id===productToAdd.id)
    console.log('addCartItem ',existingItem)
    if(existingItem){
        return cartItems.map((cartItem)=>
            cartItem.id===productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1}:cartItem
        )

    }else{
        return [...cartItems,{...productToAdd,quantity:1}]
    }
}

export const CartProvider=({children})=>{
    const [cartItems, setCartItems]=useState([])
    const [isCartOpen, setIsCartOpen]=useState(false)
    const [cartCount, setCartCount]=useState(0)
    useEffect(()=>{
        const newCartCount=cartItems.reduce((acc,cartItem)=>{
            return acc+cartItem.quantity
        },0)
        setCartCount(newCartCount)
    },[cartItems])



    const addItemToCart=(productToAdd)=>{
        console.log('addItemToCart', productToAdd)
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const value={
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



