export const convertedDate = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const correctMonth =  month < 10 ? '0' + month  : month
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

    return(`${year}-${correctMonth}-${day}`)
}