import * as React from 'react';
import { } from '../../assets/kasia-serbin.jpg';
import './RecipeForm.sass';
import TextField from '@mui/material/TextField';
// import { recipeList } from "../../model/RecipeList";

export default function RecipeForm(props) {

    function close() {
        console.log("Fermer")
    }

    return (
        <>
            <div className="RecipeForm">
                <h1>{props.name}</h1>
                <img src={props.image} alt="" className="imgCard" />
                <div className="ingredientList">
                    {props.ingredients.map((ingredient) => { return (<TextField id={ingredient} label="Outlined" variant="outlined" value={ingredient} />); })}
                </div>
                {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                <div className='sectionButton'>
                    <button className='buttonCancel' onClick={close}>Annuler</button>
                    <button className='buttonValidate'>Valider</button>
                </div>
            </div>
        </>
    );
}