import React, { useEffect, useState, useContext } from 'react';
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { NoPage } from "./pages/Nopage";
import { UserContext } from "./CreateContext"
import { fetchData } from "./api"

function App() {
  const [data, setData] = useState(null)
  const [favdata, setFavdata] = useState(null)
  const values = { data, setData,favdata,setFavdata };
  useEffect(() => {
    let loadData = fetchData()
    loadData.then((data: any) => {
      let list: any = []
      let fav: any = []
      data.forEach((element: any) => {
        element = { ...element, fav: Object.hasOwn(element, 'prop') }
        if (element.fav) {
          fav.push(element)
        } 
        list.push(element)

      });
      setData(list)
      setFavdata(fav)
    }).catch((error) => console.log(error))
  }, [])
  return (
    <BrowserRouter>
      <UserContext.Provider value={values}>
        <Routes>
          <Route path="/" Component={Layout}>
            <Route index Component={Home} />
            <Route path="list" Component={List} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
