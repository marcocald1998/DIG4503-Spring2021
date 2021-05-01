import Axios from 'axios';
import {useState} from 'react';

function CreateIcecream() {
const[rank, setRank] = useState("");   
const[flavor, setFlavor] = useState("");    
const[brand, setBrand] = useState("");
const[rating, setRating] = useState("");

    const putFlavor = async() => {
        const response = await Axios.put("http://localhost:45040/flavors/" + rank, {
            flavor:  flavor,
            brand: brand,
            rating: rating
        });
        console.log(response.data);
    }
    return (
        <div className="insert"><h3>Enter your favorite Icecream flavor</h3>
            <input 
            
            type = "text" 
            placeholder="Rank" 
            value={rank} 
            onChange={(event) => setRank(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Icecream Flavor" 
            value={flavor} 
            onChange={(event) => setFlavor(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Icecream Brand" 
            value={brand} 
            onChange={(event) => setBrand(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Rating " 
            value={rating} 
            onChange={(event) => setRating(event.target.value)}
            />
            <br></br>
            <button onClick = {() => {putIcecream()}}>Insert Icecream Flavor</button>
        {
            <p> Created: {rank} {flavor} {brand} {rating}</p>
        }  
       </div> 
    );
}
export default CreateIcecream;