import { Fragment } from "react/jsx-runtime"
import Cards from "./../components/Card"
import { useContext, useState } from 'react'
import { UserContext } from "./../CreateContext"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Home = () => {
      const { data, setData,favdata,setFavdata } = useContext(UserContext)
    const favorite = (id: any) => {
        let index = data.findIndex((x: any) => x.id === id);
        data[index].fav = !data[index].fav
        let Obj = data.filter((el: any) => el.fav === true)
        setFavdata([...Obj])

    }
    return (
        <Fragment>
            <Row><Col>Favorates</Col></Row>
            <Row><div className="grid-container">
                {favdata && favdata.map((l1: any, i: number) => {
                    return (
                        <div className="grid-item" key={i}> <Cards data={l1} fn={favorite} /></div>
                    )
                }
                )
                }
            </div></Row>
        </Fragment>
    )
}