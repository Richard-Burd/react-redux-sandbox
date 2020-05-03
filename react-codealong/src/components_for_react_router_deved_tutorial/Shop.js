import React, { useState, useEffect } from 'react';
import './router.css'
import { Link }from 'react-router-dom';

function Shop() {

  useEffect(() => {
      fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://anapioficeandfire.com/api/houses'
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
    //console.log(data);
  }

  return (
    <div>
      {items.map(item => (
        <h3 key={item.url}>
          <Link to={`./shop/${item.name}`}>
            {item.name}
          </Link>
        </h3>
      ))}
    </div>
  );
}

export default Shop
