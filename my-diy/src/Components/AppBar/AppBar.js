import React, { useState } from 'react';
import '../AppBar/AppBar.sass';
import { Modal } from "react-responsive-modal";
import RecipeFormEmpty from '../RecipeFormEmpty/RecipeFormEmpty';

export function AppBar(props) {

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    return (
        <>
            <header>
                <div className='beforeHeader'>
                    <h1>DIY Recettes</h1>
                </div>
                <div className='navbar'>
                    <div className='wrapper'>
                        <input className="inputBar" name="search" type="search" placeholder='Rechercher une recette...' onChange={(event) => { props.filter(event.target.value) }} aria-label="Search a recipe" />
                        <button onClick={onOpenModal}>Créer</button>
                    </div>
                </div>
                <Modal open={open} onClose={onCloseModal}>
                    {/* <RecipeForm name={props.name} image={props.image} ingredients={props.ingredients} closeModal={setOpen} /> */}
                    <RecipeFormEmpty />
                </Modal>
            </header>
        </>
    )
}