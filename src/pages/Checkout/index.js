import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../provider/cart";

export default function Checkout() {
  const { cart, resetCart } = useContext(CartContext);
  const [totalCartValue, setTotalCartValue] = useState(0);

  useEffect(()=>{

    let total = 0;
    cart.items.forEach(i=>{
      total += i.q * i.price;
    });

    setTotalCartValue(total)

  },[])

  return (
    <div>
      <ul>
        {cart.items.map((i) => {
          return (
            <div>
              <div>{i.item}</div>
              <div>({i.price})</div>
              <div>{i.q}</div>
              <div>Total: {i.q * i.price}</div>
            </div>
          );
        })}
      </ul>


      <div>Total Cart Value: {totalCartValue}</div>


      <button onClick={()=>{
        resetCart();
        alert("Payment done")
      }}>Pay now</button>
    </div>
  );
}
