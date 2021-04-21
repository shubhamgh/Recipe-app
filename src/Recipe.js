import React from "react";
import style from './recipe.module.css'
//import './App.css';

const Recipe = ({title,calories,img,ingredients}) => {
        return(
            <div className={style.recipe}>
                <h1>{title}</h1>
                <p>No. of Calories= {calories}</p>
                <img src={img} alt=""/>
                <div className={style.incredients}>Incredients:</div>
                <ol>
                    {ingredients.map(ingredient =>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
            </div>
        );
};

export default Recipe;