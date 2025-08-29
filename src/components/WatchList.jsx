import FilmCard from "./FilmCard"

const WatchList = ({ watchList }) => {
    console.log(watchList)
    return (
        <>
            {watchList.length > 0 && (
                <>
                    <h2>Watchlist:</h2>
                    {watchList.map((film) => {
                        return <FilmCard film={film} key={film.id} showButton={false} />
                    })}
                </>
            )}
        </>
    )
}

export default WatchList