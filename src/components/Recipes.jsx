import React from "react";

const Recipes = ({
  title,
  calories,
  url,
  image,
  ingredients,
  ingredientLines,
}) => {
  return (
    <div>
      <h1> {title} </h1>
      <ul>
        {/* {ingredients.map((ingredient) => {
          <li>{ingredient.text} </li>;
        })} */}
        {ingredientLines}

        {url}
      </ul>

      <p>{calories} </p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipes;
