
import './cstyle.css'

const Country = ({country}) => {

    const {name,official} = country

  return (
    <div className="country">

            <h3>Name : {name?.common} </h3>
            <h4>Official : {name.official}</h4>

    </div>
  )
}

export default Country