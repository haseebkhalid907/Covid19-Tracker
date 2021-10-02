
import './App.css';
import Cards from './components/Cards';
import CountryPicker from './components/CountryPicker';
import Chart from './components/Chart';
import React , {useEffect, useState} from 'react'

// import Styles from '../src/App.modules.css'
import {fetchDataCards} from './Api'



function App(props) {

  // fetchDataCards();
  const [data, setData] = useState({});
  const [country, setCountry] = useState()


 useEffect(() => {
    const modifiedData= async ()=>{
      let modi = await  fetchDataCards()
      setData(modi);
    }
    modifiedData()
 }, [])


// const handleCountryChange = async (country) => {
//   console.log(country);
//   const fetchDataCards = await fetchDataCards(country);
//   console.log(fetchDataCards);
//   //fetch data
//   // set state
// }

// useEffect(() => {

// }, [])
// handleCountryChange();


const handleCountryChange =  (country) => {
  let takeDataFromApi =  fetchDataCards(country);
  takeDataFromApi.then((data)=>{
    setCountry(country);
    setData(data);
  }) 
  console.log(takeDataFromApi);  // confirmed rec dea lasup,poplate
}


return (
    <div className="App container">
     <Cards
      data={data}
     />
     <CountryPicker handleCountryChange={handleCountryChange} />
     <Chart  
      data={data}  country={country}
      />
    </div>
  );
}

export default App;
