import { Fragment } from "react/jsx-runtime"
import Cards from "./../components/Card"
import { useContext, useState } from 'react'
import { UserContext } from "./../CreateContext"

export const List = () => {
    const { data, setData, favdata, setFavdata } = useContext(UserContext);
    const favorite = (id: any) => {
        let index = data.findIndex((x: any) => x.id === id);
        data[index].fav = !data[index].fav
        let Obj = data.filter((el: any) => el.fav === true)
        console.log([...Obj])
        setFavdata([...Obj])
        setData(data)
    }
    return (
        <div className="grid-container">
            {data && data.map((l1: any, i: number) => {
                return (
                    <div className="grid-item" key={i}> <Cards data={l1} fn={favorite} /></div>
                )
            }
            )
            }
        </div>

    )
}