import React, { useEffect } from "react";
import ResultItem from "./ResultItem";
import './ResultItem.css'

const Searchresults = ({data}) => {
    
    useEffect(()=> {
        data.sort((a, b) => a.offer.price > b.offer.price);
    }, [])
    
    return (
        <div className="search-results-container">
        {
            data.map((search, i) => {
                return(<ResultItem key={i} data={search}/>)
            })
        }
        </div>
    )
}

export default Searchresults;