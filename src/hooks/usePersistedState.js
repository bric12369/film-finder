import { useState, useEffect } from "react"
import localStorage from '../../utils/local-storage'


const usePersistedState = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || initialValue
    })

    useEffect(() => {
        return localStorage.addItem(key, value)
    }, [value])

    return [value, setValue]
}

export default usePersistedState