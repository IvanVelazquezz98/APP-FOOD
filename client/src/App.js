
import { BrowserRouter, Routes , Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipes'
import RecipesDetail from './components/RecipesDetail'
import About from './components/About'


function App() {
  return (
    <BrowserRouter>
      
        <Route exact path="/"  component={LandingPage}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/CreateRecipe" component={CreateRecipe} />
        <Route exact path="/recipe/:id" component={RecipesDetail} />
        <Route exact path="/About" component={About} />
      
    </BrowserRouter>
  );
}

export default App;