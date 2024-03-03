import axios from 'axios';

export const fetchData=async(page:number)=>{
        let response =await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`)
        return response.data
}