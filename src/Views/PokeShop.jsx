import { useContext, useEffect, useState } from "react"
import { Context } from "../Context/AppContext"

import Catalog from "../data/marketCatalog.json"

export default function PokeShop() {

    const stateContext = useContext(Context);
    const [basket, setBasket] = useState([]);
    const [counts, setCounts] = useState({});
    const tempArray = [] // provisory solution

    const addItem = (newItem) => {
        setBasket(prevBasket => [...prevBasket, newItem]);
    }

    useEffect(() => {
        const count = {};
        basket.forEach((item) => {
            count[item] = (count[item] || 0) + 1;
            setCounts(count);
        });

    }, [basket]);

    return (

        <>
            <h1>Pokeshop</h1>
            <button onClick={() => addItem(Catalog[0].productName)}>add item</button>
            <button onClick={() => addItem(Catalog[1].productName)}>add item</button>
            <div>
                <ul>
                    {basket.map((item, i) => {
                        if (tempArray.includes(item)) {
                        } else {
                            tempArray.push(item)
                            return <li key={i}>{item} x{counts[item]}</li>
                        }
                    })}
                </ul>
            </div>
        </>
    )
}