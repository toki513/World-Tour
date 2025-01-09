import { useEffect, useState } from "react"
import Country from "../Country/Country"

const Countries = () => {

  const[countries,setCountries] = useState([])

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])

  return (
    <div>
      
        <h3>Total Country : {countries.length} </h3>

        {
          countries.map(count =><Country country = {count}> </Country> )
        }
      
      </div>
  )
}

export default Countries