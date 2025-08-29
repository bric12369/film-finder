import FilmCard from "./FilmCard"

const WatchList = ({ watchList, setWatchList }) => {
    return (
        <>
            {watchList.length > 0 && (
                <>
                    <h2>Watchlist:</h2>
                    <div className='filmCardContainer'>
                    {watchList.map((film) => {
                        return <FilmCard film={film} key={film.id} showAddButton={false} showRemoveButton={true} setWatchList={setWatchList} />
                    })}
                    </div>
                </>
            )}
        </>
    )
}

export default WatchList