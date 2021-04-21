import React, { useEffect, useState } from "react"
import Recipe from "./Recipe";
import './App.css';
import cook from './cooking.png';
require('dotenv').config()

const App = () => {

  /* const APP_ID = process.env.APP_ID;
   const APP_KEY = process.env.APP_KEY;*/
  const APP_ID = 'ca8a78aa';
  const APP_KEY = 'e2ec83e40ef5696f575ed21c83a14431';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(req);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };


  const updateSearch = e => {
    setSearch(e.target.value)
    //  console.log(search);
  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="header">
        <img className="profile-small" src={cook}
          alt='Shubham Mishra DP' />
        <h1>
          Chef Shubham's Kitchen
        </h1>
      </div>

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button
          className="search-button"
          type="submit">
          Submit
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))};
      </div>

    </div>
  );
};

export default App;
