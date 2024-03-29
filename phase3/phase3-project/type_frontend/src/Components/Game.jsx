import Difficulty from "./Difficulty"
import Header from "./Header"
import TypeParent from "./TypeParent"
import { useParams } from "react-router-dom"

function Game({isLoggedIn}){
    
    let {id} = useParams()

    fetch("http://localhost:9292/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({cardset_id: id})
    })

    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Do something with the returned data
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
    
    return(
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <Difficulty id={id}/>
            <TypeParent id={id} />
        </div>
    )
}

export default Game