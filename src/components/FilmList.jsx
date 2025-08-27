import { useState, useEffect } from "react"

const FilmList = ({ searchTerm, apiKey }) => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setFilms(data.results)});
    }, [searchTerm])
    return (
        <>
        {searchTerm !== '' && <h2>Search Results: {searchTerm}</h2>}
        <ul>
            {films.map((film) => {
                return(
                    <li key={film.id}>
                        <h3>{film.title}</h3>
                        <p>{film.release_date}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} />
                        <p>{film.overview}</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default FilmList