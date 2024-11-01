import { baseUrl } from "./baseUrl"

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`

export const fetchMarsPhotos = async (page: number, sol: number) => {
    try{
        const response = await fetch(`${url}?sol=${sol}&page=${page}&api_key=${process.env.REACT_APP_API_KEY}`)
        const result = await response.json()
        return result
    }catch (err)  {
        console.log(err)
    }
}

export const fetchPageCount = async (sol: number) => {
    try{
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${process.env.REACT_APP_API_KEY}`)
        const result = await response.json()
        return result
    }catch (err) {
        console.log(err)
    }
}


