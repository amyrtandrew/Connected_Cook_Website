import React, { Component } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import ExploreHeader from '../Components/Profile/Explore/Header/ExploreHeader';
import RecipeGrid from '../Components/Profile/MyRecipes/RecipeGrid';

class MyRecipes extends Component {
  render() {
    return (
      <div>
        <NavBar />
        
         <RecipeGrid />
         <p>This is  a p tag</p>
        
      </div>
    );
  }
}

export default MyRecipes;