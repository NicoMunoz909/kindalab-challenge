import React from 'react'
import { useNavigate, useLocation } from 'react-router'
import styles from './cardDetailed.module.css'
import logo from '../../logo.png'

const Detail = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const cocktail = location.state?.cocktail

  let i = 1;
  const ingredients = []

  while (cocktail[`strIngredient${i}`]) {
    ingredients.push([i, cocktail[`strMeasure${i}`], cocktail[`strIngredient${i}`]])
    i += 1;
  }

  return (
    <div>
      <header className="App-header">
        <img onClick={() => navigate('/')} src={logo} className="App-logo" alt="logo" />
      </header>
      <div className={styles.container}>
        <h2>{cocktail.strDrink}</h2>
        <img src={cocktail.strDrinkThumb} alt="" />
        <div className={styles.ingredients}>
          {ingredients.map(ingredient => {
            return (<p key={ingredient[0]}>{ingredient[1]} - {ingredient[2]}</p>)
          })}
        </div>
        <li>How to Prepare</li>
        <p>{cocktail.strInstructions}</p>
      </div>
    </div>
  )
}

export default Detail