import React, { Component } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import ExploreHeader from '../Components/Profile/Explore/Header/ExploreHeader';
import RecipeGrid from '../Components/Profile/MyRecipes/RecipeGrid';

class Explore extends Component {
  render() {
    return (
      <div>
        <NavBar />
         <ExploreHeader />
         <RecipeGrid />
      </div>
    );
  }
}

export default Explore;