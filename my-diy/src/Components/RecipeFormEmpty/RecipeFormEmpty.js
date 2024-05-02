import * as React from 'react';
import TextField from '@mui/material/TextField';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './RecipeFormEmpty.sass';
import { } from '../../assets/kasia-serbin.jpg';
import { useState } from 'react';


const PlusIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
);

export default function RecipeFormEmpty(props) {

    const [ingredients, setIngredients] = useState(['']);

    const addIngredient = () => {
        const newIngredients = [...ingredients, ''];
        setIngredients(newIngredients);
    }

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    }

    const deleteIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index);
        setIngredients(newIngredients);
    }


    return (
        <>
            <div className="RecipeForm">
                <img src={props.image} alt="" className="imgCard" />
                <h2><TextField required
                    id="outlined-required"
                    label="Titre"
                    type="title" /></h2>
                <div className="separator"></div>
                {ingredients.map((ingredient, index) => (
                    <div key={index} className='ingredientWrapper'>
                        <TextField
                            className="ingredient"
                            style={{ marginTop: "10px" }}
                            label="Ingrédient"
                            variant="outlined"
                            value={ingredient}
                            onChange={(e) => handleIngredientChange(index, e.target.value)}
                        />
                        <button className='buttonDelete' onClick={deleteIngredient}><DeleteOutlineIcon /></button>
                    </div>
                ))}
                <div className='sectionButton'>
                    <button className='buttonValidate'>Valider</button>
                    <button className='buttonAdd' onClick={addIngredient}>{PlusIcon}</button>
                </div>
            </div>
        </>
    );
}