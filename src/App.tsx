import React, { useEffect, useState} from 'react';
import "./App.scss";
import { Routes, Route,useLocation } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { NoPage } from "./pages/Nopage";
import { UserContext } from "./CreateContext"
import  {fetchData} from "./api"
import { usePrevious } from './previous';

export const LocationDisplay = () => {
  const location = useLocation()

  return (<div data-testid="location-display">{location.pathname}</div>)
}
function App() {
  const [data, setData] = useState<any[] | null>([])
  const [favdata, setFavdata] = useState(null)
  const [isLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(null)
  const [page,setPage]=useState(1)
  const values = { data, setData,favdata,setFavdata,isLoading,setIsLoading,error,setError,page,setPage };
   const usePrevData:any=usePrevious(data);
  useEffect(() => {
    let loadData = fetchData(page)
    setIsLoading(true);
    setError(null);
     loadData.then((data: any) => {
      let list: any = []
      data.forEach((element: any) => {
        element = { ...element, fav: Object.hasOwn(element, 'prop') }
        list.push(element)

      });
      setData([...usePrevData,...list])
    }).catch((error) => setError(error)).finally(()=>setIsLoading(false))
  }, [page,usePrevData])
  return (
      <UserContext.Provider value={values}>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route index Component={Home} />
            <Route path="list" Component={List} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
  );
}

export default App;
