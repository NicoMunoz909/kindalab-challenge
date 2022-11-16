import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import styles from './cardDetailed.module.css'
import logo from '../../logo.png'
import { ThreeDots } from 'react-loader-spinner'

const Detail = () => {

  const params = useParams();
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    .then(res => res.json())
    .then(data => {
      setIsLoading(false)
      setCocktail(data.drinks[0])
    })
    .catch(err => console.log(err))
  }, [])

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
      {isLoading ? <ThreeDots wrapperStyle={{ display: 'block', width: 'fit-content' , margin: 'auto' }} color='#615f68' /> :
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
      }
    </div>
  )
}

export default Detail