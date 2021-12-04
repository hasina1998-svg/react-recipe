import React, { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./components/Recipes";

const App = () => {
  const APP_ID = "464c208f";
  const API_KEY = "cb8536559246859decc7a65c632085e5";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");
  useEffect(async () => {
    getRecipes();
    console.log("fuck");
  }, [query]);
  const getRecipes = async () => {
    const response =
      await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}
          `);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="card">
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="card-left">
          {recipes.map((recipe) => (
            <Recipes
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              ingredientLines={recipe.recipe.ingredientLines}
              url={recipe.recipe.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
