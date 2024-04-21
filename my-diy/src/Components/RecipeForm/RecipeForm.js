import * as React from 'react';
import { } from '../../assets/kasia-serbin.jpg';
import './RecipeForm.sass';
import TextField from '@mui/material/TextField';
// import { recipeList } from "../../model/RecipeList";
import { RecipeContext } from '../../App';
import { useContext } from 'react';
import { useState } from 'react';

export default function RecipeForm(props) {

    const [recipes, setRecipes] = useContext(RecipeContext);
    // console.log("Fermer")
    const [ingredients, setIngredients] = useState(props.ingredients);

    const changeIngredients = (ingredient, index) => {
        const newIngredient = [...ingredients];
        newIngredient[index] = ingredient;
        setIngredients(newIngredient);
    };

    const validateRecipe = () => {
        const newRecipe = [...recipes];
        let ingredientIndex = 0;
        const ingredientToChange = recipes.find((ingredient, index) => {
            ingredientIndex = index
            return ingredient.ingredients = props.ingredients
        });
        ingredientToChange.ingredients = ingredients;
        newRecipe[ingredientIndex] = ingredientToChange;
        setRecipes(newRecipe)
        props.closeModal(false)
    };

    return (
        <>
            <div className="RecipeForm">
                <h1>{props.name}</h1>
                <img src={props.image} alt="" className="imgCard" />
                <div className="ingredientList">
                    {props.ingredients.map((ingredient, index) => { return (<TextField style={{ marginTop: "10px" }} id={ingredient} key={ingredient} label="Outlined" variant="outlined" value={ingredients[index]} onChange={(event) => changeIngredients(event.target.value, index)} />); })}
                </div>
                <div className='sectionButton'>
                    <button className='buttonCancel' onClick={() => props.closeModal(false)} >Annuler</button>
                    <button className='buttonValidate' onClick={() => validateRecipe()}>Valider</button>
                </div>
            </div>
        </>
    );
}