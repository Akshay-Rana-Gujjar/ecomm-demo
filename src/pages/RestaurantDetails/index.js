import React, { useContext, useEffect, useState } from "react";
import data from "../../constants/data";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import { CartContext } from "../../provider/cart";

export default function RestaurantDetails() {
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const { cart, dcrCartItem, incCartItem, addTocart } = useContext(CartContext);

  const { id } = useParams();

  console.log({ cart });

  useEffect(() => {
    setRestaurantDetails(
      data.restaurants.filter((r) => r.id === parseInt(id))[0]
    );
  }, []);

  const MenuItem = ({ menuId, item, price, image }) => {

    const filtereditem = cart.items.filter(i=> i.id === menuId);
    console.log(filtereditem)
    const showAddTocart = cart &&  filtereditem.length === 0;

    console.log({showAddTocart})

    return (
      <>
        <div className="rest-menu-item">
          <div>
            <img src={image} alt={item} />
            <h3>{item}</h3>
            <div>Pice: {price}</div>
          </div>
          { showAddTocart ? <div onClick={()=>{
            addTocart({item, price, image, id: menuId})
          }} >
            Add to cart
            {/* add plus and minus later*/}
          </div>
          :
          <div>
            <button  onClick={()=>dcrCartItem(menuId)} >-</button>
            <span>{filtereditem[0].q}</span>
            <button  onClick={()=>incCartItem(menuId)}>+</button>
          </div>
        }
        </div>
      </>
    );
  };

  return (
    <div>
      <img src={restaurantDetails.image} alt={restaurantDetails.name} />

      <h2>{restaurantDetails.name}</h2>
      <p>{restaurantDetails.description}</p>

      <ul>
        {restaurantDetails.tags?.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>

      <div className="rest-menu">
        {restaurantDetails.menu?.map((m) => (
          <MenuItem key={m.menuId} {...m} />
        ))}
      </div>

      {cart.items.length > 0 && <div>
        <Link to="/checkout" >Go to cart</Link>
      </div>}
    </div>
  );
}
