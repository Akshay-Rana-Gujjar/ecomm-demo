import React, { useEffect, useState } from "react";
import Restaurant from "../../components/Restaurant";
import data from "../../constants/data";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [restaurantList, setRestaurantList] = useState([]);

  const [fliteredRest, setFliteredRest] = useState([]);

  const [query, setQuery] = useState("");

  console.log(data, { fliteredRest });

  useEffect(() => {
    setRestaurantList(data.restaurants);
    setFliteredRest(data.restaurants);
  }, []);


  useEffect(() => {
console.log({query})
    if(!query || query == ""){
        setFliteredRest(data.restaurants);
        return;
    }

    console.log("flitering")


    setFliteredRest(restaurantList.filter(res=>{
        const isTagInc = res.tags.filter(t=> t.includes(query)).length > 0;
        if(isTagInc) return isTagInc;

        return res.name.includes(query);
       
    }));


    
    
  }, [query]);
  

  return (
    <div>
      <input
        type="search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <div className="rest-list">
        {fliteredRest.map((rest) => {
          return (
            <Link to={`/restaurant/${rest.id}`}>
              <Restaurant key={rest.id} {...rest} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
