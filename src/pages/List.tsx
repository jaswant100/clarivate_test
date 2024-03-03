import Cards from "./../components/Card"
import { useContext} from 'react'
import { UserContext } from "./../CreateContext"
import InfiniteScroll from "react-infinite-scroll-component";

export const List = () => {
    const { data, setData, setFavdata, page, setPage } = useContext(UserContext);
    const favorite = (id: any) => {
        let index = data.findIndex((x: any) => x.id === id);
        data[index].fav = !data[index].fav
        let Obj = data.filter((el: any) => el.fav === true)
        setFavdata([...Obj])
        setData(data)
    }
    return (

        <InfiniteScroll
            dataLength={data?.length <= 50 ? data.length : 50}
            next={() => setPage(page + 1)}
            hasMore={data?.length < 50}
            loader={<h4>Loading...</h4>}
        >
            <div className="grid-container">
                {data && data.map((l1: any, i: number) => {
                    return (
                        <div className="grid-item" key={i}> <Cards data={l1} fn={favorite} /></div>
                    )
                }
                )
                }
            </div>
        </InfiniteScroll>
    )
}