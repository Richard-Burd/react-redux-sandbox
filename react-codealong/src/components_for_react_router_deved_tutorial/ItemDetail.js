import React, { useState, useEffect } from 'react';
import './router.css'

// NOTE: never got 'match' to work properly because the fortnite api is down &
// this uses a game of thrones api which doesn't have the same id structure as what
// Edwin shows in his codealong on 30:00 / 33:09 of https://www.youtube.com/watch?v=Law7wfdg_ls

// Fortnite API is here: https://fortniteapi.com/home
function ItemDetail({match}) {

  useEffect(() => {
    fetchItem();
    console.log(match);
  },[]);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://anapioficeandfire.com/api/houses/1`)
    const item = await fetchItem.json();
  }

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default ItemDetail
