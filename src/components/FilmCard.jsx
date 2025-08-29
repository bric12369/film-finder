import formatDate from "../../utils/format-date"


const placeholderPoster = '/tumbleweed-silence.gif'

const FilmCard = ({ film, setWatchList, showAddButton, showRemoveButton }) => {
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

    const handleRemoveFromWatchList = () => {
        setWatchList((curr) => {
            return curr.filter((item) => item.id !== film.id)
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
            {showAddButton && <button onClick={handleAddToWatchList}>Add to watchlist</button>}
            {showRemoveButton && <button onClick={handleRemoveFromWatchList}>Remove from watchlist</button>}
        </div>
    )
}

export default FilmCard