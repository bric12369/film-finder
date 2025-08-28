import { useState, useEffect } from "react"
import FilmCard from "./FilmCard"

const FilmList = ({ searchTerm, apiKey }) => {
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data.results)
                setFilms(data.results)
                setIsLoading(false)
            });
    }, [searchTerm])
    return isLoading ? (<>
        <div className="spinner-container">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    </>) :
        (<>
            {searchTerm !== '' && films.length > 0 && <h2>Search Results: {searchTerm}</h2>}
            {searchTerm !== '' && films.length === 0 && <h2>Sorry... No results for {searchTerm}</h2>}
            <div id='filmCardContainer'>
                {films.map((film) => {
                    return <FilmCard film={film} key={film.id} />
                })}
            </div>
        </>
        )
}

export default FilmList