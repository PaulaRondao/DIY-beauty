import React from 'react';
import '../AppBar/AppBar.sass';

export function AppBar(props) {
    return (
        <>
            <header>
                <div className='beforeHeader'>
                    <h1>DIY Recettes</h1>
                </div>
                <div className='navbar'>
                    <div className='wrapper'>
                        <input className="inputBar" name="search" type="search" placeholder='Rechercher une recette...' onChange={(event) => { props.filter(event.target.value) }} aria-label="Search a recipe" />
                    </div>
                </div>
            </header>
        </>
    )
}