import './App.sass';
import RecipeCard from './Components/RecipeCard/RecipeCard';
import { } from '../src/assets/kasia-serbin.jpg';
import { recipeList } from './model/RecipeList';
import { AppBar } from './Components/AppBar/AppBar';
import React, { useState } from 'react';


export const RecipeContext = React.createContext();
function App() {

  const [recipes, setRecipes] = useState(recipeList);

  const handleSearch = (criteria) => {
    if (criteria === '') {
      setRecipes(recipeList);
    } else {
      setRecipes(recipeList.filter((recipe) =>
        recipe.name.toLowerCase().includes(criteria.toLowerCase()))
      );
    }
  };


  return (
    <RecipeContext.Provider value={[recipeList, setRecipes]}>
      <AppBar filter={handleSearch} />
      <main className="App">
        {recipes.map((recipe) => (<RecipeCard image={recipe.image} name={recipe.name} ingredients={recipe.ingredients} />
        ))}
      </main>
    </RecipeContext.Provider >
  );
}

export default App;
