import { React } from 'react'
import styles from './cardBrief.module.css'

const CardBrief = ({ cocktail }) => {

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