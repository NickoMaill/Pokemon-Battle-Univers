import { useContext, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import { Context } from "../Context/AppContext"

import Catalog from "../data/marketCatalog.json"

export default function PokeShop() {

    const stateContext = useContext(Context);
    const [basket, setBasket] = useState([]);
    const [counts, setCounts] = useState({});
    const [total, setTotal] = useState(0)
    const tempArray = [] // provisory solution

    const addItem = (newItem) => {
        setBasket(prevBasket => [...prevBasket, newItem]);
    }

    const pay = () => {
        if (total > stateContext.pokeDollard) {
            toast.error("Vous n'avez pas assez de pokeDollard")
        } else {
            console.log(counts[1]);
            stateContext.setPokeballStock(stateContext.pokeballStock + parseInt(counts[1]))
            stateContext.setPokeDollard(stateContext.pokeDollard - total)
            toast.success("achat éfféctué")
            setTotal(0)
            setBasket([])
        }
    }

    useEffect(() => {
        const count = {};
        basket.forEach((item) => {
            count[item] = (count[item] || 0) + 1;
            setCounts(count);
            setTotal(Catalog[item].price + total);
        });

    }, [basket]);


    return (

        <>
            <ToastContainer />
            <h1>Pokeshop</h1>
            <button onClick={() => addItem(Catalog[0].id)}>add item</button>
            <button onClick={() => addItem(Catalog[1].id)}>add item</button>
            <div>
                <ul>
                    {basket.map((item, i) => {

                        if (tempArray.includes(item)) {
                            return

                        } else {
                            tempArray.push(item)
                            return <li key={i}>{Catalog[item].productName} x{counts[item]}</li>

                        }
                    })}
                </ul>
                <p>Total : {total} ₽</p>
                <button onClick={() => pay()}>Pay</button>
            </div>
        </>
    )
}