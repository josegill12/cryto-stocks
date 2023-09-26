import React from 'react'
import { useParams } from "react-router-dom"
import data from "../components/data.json"

const Price = () => {
    const params = useParams()
    const symbol = params.symbol

    const stock = data.find((x) => x.symbol == symbol)

    console.log(stock);
    
    return (
        <div>
             <h1>{stock.name}</h1>
             <h2>Last Price: {stock.lastPrice}</h2>
        </div>
    )
}

export default Price
