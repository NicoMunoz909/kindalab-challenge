import { React, useState, useEffect} from 'react'
import styles from './cardBrief.module.css'

const CardBrief = ({ id }) => {

  const [cocktail, setCocktail] = useState({})
  console.log('card', id)

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => setCocktail(data.drinks[0]))
    .catch(err => console.log(err))
  }, [])

  let i = 2;

  while (cocktail[`strIngredient${i}`]) {
    i += 1;
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>{cocktail ? cocktail.strDrink : 'asd'}</h2>
        <ul>
          <li>{cocktail.strIngredient1}</li>
          <li>{cocktail.strIngredient2}</li>
        </ul>
        {(i-3) ? <p>and {i-3} ingredients more</p> : null }
      </div>
      <img src={cocktail ? cocktail.strDrinkThumb : ''} alt="" />
    </div>
  )
}

export default CardBrief