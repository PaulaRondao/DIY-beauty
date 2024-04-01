import React, { useContext } from "react";
import './RecipeCard.sass';
import { } from '../../assets/kasia-serbin.jpg';
import { RecipeContext } from '../../App';

function RecipeCard(props) {

    function click(e) {
        e.preventDefault();
        console.log(props.name)
    };

    const recipes = useContext(RecipeContext);

    return (
        <div className="RecipeCard">
            <img src={props.image} alt="" className="imgCard" />
            <h2>{props.name}</h2>
            <div className="separator"></div>
            <ul className="ingredientList">
                {props.ingredients.map((ingredient) => (<li>{ingredient}</li>))}
            </ul>
            <button onClick={click}>Click-me</button>
        </div>
    );
}

export default RecipeCard

