import formatDate from "../../utils/format-date"


const placeholderPoster = '/tumbleweed-silence.gif'

const FilmCard = ({ film }) => {
    const poster = film.poster_path === null ? placeholderPoster : `https://image.tmdb.org/t/p/w500${film.poster_path}`
    const releaseDate = formatDate(film.release_date)
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
        </div>
    )
}

export default FilmCard