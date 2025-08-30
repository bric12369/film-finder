import { useState } from "react"

const SearchBar = ({ setSearchTerm }) => {
    const [input, setInput] = useState('')
    const [searchBarStatus, setSearchBarStatus] = useState('empty')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(input)
        setInput('')
        setSearchBarStatus('empty')
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">
                Search for films:
                <input type="text" id="search" value={input} onChange={(e) => {
                    setSearchBarStatus('not empty')
                    setInput(e.target.value)
                }}/>
            </label>
            <button disabled={searchBarStatus === 'empty'}>Search</button>
        </form>
    )
}

export default SearchBar