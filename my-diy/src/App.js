import './App.sass';
import RecipeCard from './Components/RecipeCard/RecipeCard';
import { } from '../src/assets/kasia-serbin.jpg';
import { recipeList } from '../src/model/recipe.list';
function App() {
  return (
    <div className="App">
      {recipeList.map((recipe) => (<RecipeCard image={recipe.image} name={recipe.name} ingredients={recipe.ingredients} />
      ))}</div>
  );
}

export default App;
