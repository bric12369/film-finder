import { useState, useEffect } from "react"

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
            <ul>
                {films.map((film) => {
                    const poster = film.poster_path === null ? '../public/tumbleweed-silence.gif' : `https://image.tmdb.org/t/p/w500${film.poster_path}`
                    return (
                        <li key={film.id}>
                            <h3>{film.title}</h3>
                            <p>{film.release_date}</p>
                            <img src={poster} />
                            <p>{film.overview}</p>
                        </li>
                    )
                })}
            </ul>
        </>
        )
}

export default FilmList