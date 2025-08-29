import formatDate from "../../utils/format-date"


const placeholderPoster = '/tumbleweed-silence.gif'

const FilmCard = ({ film, setWatchList, showButton }) => {
    const poster = film.poster_path === null ? placeholderPoster : `https://image.tmdb.org/t/p/w500${film.poster_path}`
    const releaseDate = formatDate(film.release_date)

    const handleAddToWatchList = () => {
        setWatchList((curr) => {
            if (!curr.some(item => film.id === item.id)) {
                return [...curr, film]
            }
            return curr
        })
    }

    return (
        <div key={film.id} id='filmCard'>
            <div id='filmTextContainer'>
                <h3>{film.title}</h3>
                {releaseDate !== '' ? <p>Released: {releaseDate}</p> : <p>Release date could not be found</p>}
            </div>
            <div id='posterContainer'>
                <img src={poster} />
                {poster === placeholderPoster && <figcaption>No poster found...</figcaption>}
            </div>
            <p>{film.overview}</p>
            {showButton && <button onClick={handleAddToWatchList}>Add to watchlist</button>}
        </div>
    )
}

export default FilmCard