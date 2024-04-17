// import { useState } from 'react';
import * as React from 'react';
import { } from '../../assets/kasia-serbin.jpg';
import './RecipeForm.sass';
import TextField from '@mui/material/TextField';
// import { recipeList } from "../../model/RecipeList";

export default function RecipeForm(props) {


    // console.log("Fermer")


    return (
        <>
            <div className="RecipeForm">
                <h1>{props.name}</h1>
                <img src={props.image} alt="" className="imgCard" />
                <div className="ingredientList">
                    {props.ingredients.map((ingredient) => { return (<TextField style={{ marginTop: "10px" }} id={ingredient} key={ingredient} label="Outlined" variant="outlined" value={ingredient} />); })}
                </div>
                <div className='sectionButton'>
                    <button className='buttonCancel' onClick={() => props.closeModal(false)} >Annuler</button>
                    <button className='buttonValidate'>Valider</button>
                </div>
            </div>
        </>
    );
}