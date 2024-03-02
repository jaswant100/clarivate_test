import axios from 'axios'

export const fetchData= async()=>{
    let response=await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10`)
    return response.data
}