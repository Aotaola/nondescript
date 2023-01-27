import { useNavigate } from "react-router-dom"

function Sets({set, setSelectedSet}){
    
    const navigate = useNavigate()
    
    function handleClick(){
        setSelectedSet(set)
        navigate(`/game/${set.id}`)
        
        fetch("http://localhost:9292/game", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: set.id,user_id: set.user_id})})
    
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // do something with the returned data
        console.log(data);
    })
    }
    
    
    return(
        <div class="setcard" onClick={handleClick}>
            <h1>{set.title}</h1>
        </div>
    )
}

export default Sets