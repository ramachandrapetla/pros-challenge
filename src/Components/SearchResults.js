import React from "react";
import ResultItem from "./ResultItem";
import './ResultItem.css'

const Searchresults = ({data}) => {
    
    
    
    return (
        <div className="search-results-container">
        {
            data.map(search => {
                return(<ResultItem data={search}/>)
            })
        }
        </div>
    )
}

export default Searchresults;