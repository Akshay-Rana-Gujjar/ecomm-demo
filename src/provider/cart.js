import React, { useState } from 'react';



export const CartContext = React.createContext();

export default function CartProvider({children}) {

    const [cart, setCart] = useState({
        restid: -1,
        items: [],
        totalItems: 0
    });



    const addTocart = (item)=>{
        setCart(prev=>{
            const cartItems = [...prev.items];
            const newCartItems = cartItems.map(i=>{
                const newItem = {...i}
                return newItem;
            });

            newCartItems.push({...item, q: 1});

            return {...prev, items: newCartItems};
        });

    }

    const incCartItem = (itemId)=>{
        console.log({itemId})
        setCart(prev=>{
            const cartItems = [...prev.items];
            const newCartItems = cartItems.map(i=>{
                const newItem = {...i, q: i.id === itemId ? i.q + 1 : i.q  }
                return newItem;
            });

            return {...prev, items: newCartItems};
        });


    }

    const dcrCartItem = (itemId)=>{

        setCart(prev=>{
            const cartItems = [...prev.items];
            const newCartItems = [];
            cartItems.forEach(i=>{
                    const newItem = {...i, q: i.id === itemId ? i.q - 1 : i.q  }
                    if(newItem.q !== 0){
                        newCartItems.push(newItem);
                    }
            });

            return {...prev, items: newCartItems};
        });
        
    };


    const resetCart = ()=>{
        setCart({
            restid: -1,
            items: [],
            totalItems: 0
        })
    }

    



  return (
    <CartContext.Provider value={{
        dcrCartItem,
        incCartItem,
        addTocart,
        cart,
        resetCart

    }}>
        {children}
    </CartContext.Provider>
  )
}
