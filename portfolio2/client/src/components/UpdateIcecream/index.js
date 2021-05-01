import Axios from 'axios';
import {useState} from 'react';

function UpdateIcecream() {

const[rank, setRank] = useState("");   
const[flavor, setFlavor] = useState("");    
const[brand, setBrand] = useState("");
const[rating, setRating] = useState("");

    const patchIcecream = async() => {
        const response = await Axios.patch("http://localhost:45040/flavors/" + rank, {
            flavor:  flavor,
            brand: brand,
            rating: rating
        });
        console.log(response.data);
    }
    return (
        <div className="update"><h3>Update your favorite Icecream Flavor</h3>
            
            <input 
            type = "text" 
            placeholder="rank" 
            value={rank} 
            onChange={(event) => setRank(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Icecream Flavor" 
            value={flavor} 
            onChange={(event) => setIcecream(event.target.value)}
            />
            <input 
            type = "text" 
            placeholder="Brand" 
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
            <button onClick = {() => {patchIcecream()}}>Update Icecream Flavor</button>
            {
            <p> Updated: {rank} {flavor} {brand} {rating}</p>
        }
        </div>
    );
}
export default UpdateIcecream;