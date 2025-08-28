
const placeholderPoster = '../public/tumbleweed-silence.gif'

const FilmCard = ({ film }) => {
    const poster = film.poster_path === null ? placeholderPoster : `https://image.tmdb.org/t/p/w500${film.poster_path}`
    return (
        <div key={film.id} id='filmCard'>
            <h3>{film.title}</h3>
            <p>{film.release_date}</p>
            <div id='posterContainer'>
                <img src={poster} />
                {poster === placeholderPoster && <figcaption>No poster found...</figcaption>}
            </div>
            <p>{film.overview}</p>
        </div>
    )
}

export default FilmCard