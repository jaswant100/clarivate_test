import { createContext } from 'react'
interface listData {
    data: any;
    setData: Function;
    favdata: any;
    setFavdata: Function;
    isLoading: Boolean;
    setIsLoading: Function;
    error: any;
    setError: Function;
    page: number;
    setPage: Function;
}
const data: listData = {
    data: [],
    setData: () => { },
    favdata: [],
    setFavdata: () => { },
    isLoading: false,
    setIsLoading: () => { },
    error: null,
    setError: () => { },
    page: 1,
    setPage: () => { }
}
export const UserContext = createContext(data)