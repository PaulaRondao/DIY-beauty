import React, { useState } from "react";
import './RecipeCard.sass';
import { } from '../../assets/kasia-serbin.jpg';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import RecipeForm from "../RecipeForm/RecipeForm";

// import { RecipeContext } from '../../App';

function RecipeCard(props) {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // const recipes = useContext(RecipeContext);

    return (
        <div className="RecipeCard">
            <img src={props.image} alt="" className="imgCard" />
            <h2>{props.name}</h2>
            <div className="separator"></div>
            <ul className="ingredientList">
                {props.ingredients.map((ingredient) => (<li>{ingredient}</li>))}
            </ul>
            <div className="divButton">
                <button className='buttonChange' onClick={onOpenModal}>Modifier</button>
                <button className='buttonDelete'>Supprimer</button>
            </div>
            <Modal open={open} onClose={onCloseModal}>
                <RecipeForm name={props.name} image={props.image} ingredients={props.ingredients} closeModal={setOpen} />
            </Modal>
        </div>
    );
}

export default RecipeCard

