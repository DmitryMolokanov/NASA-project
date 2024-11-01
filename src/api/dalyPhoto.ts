import { convertedDate } from "../components/utils/strings/convertedDate"

export const dalyPhoto = async (date:Date) => {
    const dateApi = convertedDate(date)
    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${dateApi}&api_key=${process.env.REACT_APP_API_KEY}`)
    const result = await response.json()
    return result
} 