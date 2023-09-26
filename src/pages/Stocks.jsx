import { Link } from "react-router-dom";
import data from "../components/data.json"
import React from 'react'

const Stocks = () => {
  return (
    <div>
        {data.map((stock) => {
        const { name, symbol } = stock;

        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  )
}

export default Stocks