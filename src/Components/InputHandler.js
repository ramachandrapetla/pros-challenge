import { useState } from "react";
import axios from "axios";
import Searchresults from "./SearchResults";
import './InputHandler.css'
const InputHandler = () => {
    
    const[productName, setProductName] = useState("");
    const[results, setResults] = useState([])
    
    
    const handleChange = (event) => {
        setProductName(event.target.value);
    }

    const getProductresults = async () => {
        const response = await axios.get('https://real-time-product-search.p.rapidapi.com/search', 
        {
            params: {
                q: productName,
                country: "us",
                language: "en"
            },
            headers: {
                "X-RapidAPI-Key": "c7d321533bmshd236a6d27794f76p12e903jsnc6435a149f34",
                "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com"
            }
        });

        setResults(response.data.data);

        console.log(results)
    }
    

    return (
        <div>
            <div className="input-container">
                <input className="input-field"
                        type = "text" 
                        placeholder="enter the product name"
                        onChange={handleChange}  
                        value={productName}
                />
                <button className="search-btn" onClick={getProductresults}>Search</button> 
            </div>
            <Searchresults data = {results}/>
        </div>
    )
}

export default InputHandler;