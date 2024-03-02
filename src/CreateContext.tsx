import {createContext} from 'react'
interface listData{
    data: any;
    setData: Function;
    favdata:any;
    setFavdata:Function;
}
const data:listData={
    data:[],
    setData:() => {},
    favdata:[],
    setFavdata:() => {}
}
export const UserContext=createContext(data)