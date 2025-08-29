
const addItem = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key) => {
    const item = window.localStorage.getItem(key)
    return JSON.parse(item) || []
}

export default { addItem, getItem }