import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import CardBrief from './Components/CardBrief';
import logo from './logo.png';
import { ThreeDots } from 'react-loader-spinner'

function App() {
  
  const getCocktails = async () => {
    const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")
    const json = await data.json()
    return json.drinks
  }

  const getCocktailDetails = async (id) => {
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const json = await data.json()
    return json.drinks[0]
  }

  const fetchData = async () => {
    const cocktails = await getCocktails();
    const cocktailsDetails = await Promise.all(cocktails.map(async (item) => {
      const fetched = await getCocktailDetails(item.idDrink)
      return fetched
    }))
    return cocktailsDetails
  }

  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await fetchData();
      setCocktails(data);
      setIsLoading(false);
    })();
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
        <Link key={item.idDrink} to={`/${item.idDrink}`} state={{cocktail: item}}>
          <CardBrief cocktail={item} />
        </Link>
        )
      })}
      </div>
    }
    </div>
    );
  }
  
  export default App;
  