import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import CardBrief from './Components/CardBrief';
import logo from './logo.png';
import { ThreeDots } from 'react-loader-spinner'

function App() {

  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  console.log('app')

  useEffect(() => {
    setIsLoading(true)
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
    .then(res => res.json())
    .then(data => {
      setIsLoading(false)
      setCocktails(data.drinks)
    })
    .catch(err => console.log(err))
  }, [])


  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        { isLoading ? <ThreeDots wrapperStyle={{ display: 'block', width: 'fit-content' , margin: 'auto' }} color='#615f68' /> : 
        <div className='cards-container'>
          {cocktails.map(item => {
           return (
           <Link key={item.idDrink} to={`/${item.idDrink}`}>
             <CardBrief id={item.idDrink} />
           </Link>
           )
          })}
        </div>
        }
      </div>
  );
}

export default App;
