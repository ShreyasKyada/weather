import React from 'react'

const Search = (props) => {

    const [city, setCity] = React.useState("")

    const sendCityName = () => {
        props.getSeachData(city);
    }

    return (
        <div className="search-container">
            <input type="search" placeholder="search by city name...." onChange={(e) => setCity(e.target.value)} />
            <button onClick={() => sendCityName()}>Search</button>
        </div>
    )
}

export default Search
