import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext({
    cartItems:[],
    isCartOpen:()=>{},
    cartCount:0,
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    deleteItemFromCart:()=>{},
    cartTotal:0
})

const deleteCartItem=(cartItems, productToDelete)=>{
    return cartItems.filter((cartItems)=>cartItems.id!==productToDelete.id)
}

const removeCartItem=(productToRemove, cartItems)=>{
   const existingItem = cartItems.find((cartItem)=>cartItem.id==productToRemove.id)
   if(existingItem.quantity>1){
    return cartItems.map((cartItem)=>cartItem.id==existingItem.id? {...cartItem,quantity:cartItem.quantity-1} : cartItem)
   }
   else{
    return cartItems.filter((cartItem)=>cartItem.id!==existingItem.id)
   }
}


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
    const [cartTotal, setCartTotal]=useState(0)
    useEffect(()=>{
        const newCartCount=cartItems.reduce((acc,cartItem)=>{
            return acc+cartItem.quantity
        },0)
        setCartCount(newCartCount)
    },[cartItems])

    useEffect(()=>{
        const newCartTotal=cartItems.reduce((acc,cartItem)=>acc+cartItem.quantity*cartItem.price,0)
        setCartTotal(newCartTotal)
    },[cartItems])



    const addItemToCart=(productToAdd)=>{
        console.log('addItemToCart', productToAdd)
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart=(productToRemove)=>{
        setCartItems(removeCartItem(productToRemove,cartItems))
    }

    const deleteItemFromCart =(productToDelete)=>{
        setCartItems(deleteCartItem(cartItems,productToDelete))
    }

    const value={
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        cartCount,
        removeItemFromCart,
        deleteItemFromCart,
        cartTotal
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}



