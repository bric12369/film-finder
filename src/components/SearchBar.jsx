import { useState } from "react"

const SearchBar = ({ setSearchTerm }) => {
    const [input, setInput] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(input)
        setInput('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">
                Search for films:
                <input type="text" id="search" value={input} onChange={(e) => {
                    setInput(e.target.value)
                }}/>
            </label>
            <button>Search</button>
        </form>
    )
}

export default SearchBar