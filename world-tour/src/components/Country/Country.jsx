
import { useState } from 'react'
import './cstyle.css'

const Country = ({country}) => {

  const[visited,setVisited] = useState(false)

    const {name,official,flags} = country

    const handleVisited = () =>{
      setVisited(!visited)
    }

  return (
    <div className={`country ${visited ? 'visited' : 'non-visited' }`}>

            <h3 style={{color:visited ? 
                'green' : 'red'
            }}>Name : {name?.common} </h3>
            <h4>Official : {name.official}</h4>
            <img src={flags.png} alt="" />
            <button onClick={handleVisited} className='visited-button'>{visited ? 'Visited' : "Going"}  </button>
            {visited ? 'I have visited this country' : 'I want to Goooo'}
    </div>
  )
}

export default Country