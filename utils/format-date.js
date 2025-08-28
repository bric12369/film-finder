
const formatDate = (isoDate) => {
    if (!isoDate || !isoDate.length) return ''
    const [year, month, day] = isoDate.split('-')
    if (!year || !month || !day) return ''
    return `${day}/${month}/${year}`
}

export default formatDate