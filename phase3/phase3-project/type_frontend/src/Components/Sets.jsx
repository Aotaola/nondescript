import { useNavigate } from "react-router-dom"

function Sets({set, setSelectedSet}){
    
    const navigate = useNavigate()
    
    function handleClick(){
        setSelectedSet(set)
        navigate("/game")
    }
    
    
    return(
        <div onClick={handleClick}>
            <h1>{set.title}</h1>
            // card lengths
            <p>{set.length - 10}</p>
            <img/>
        </div>
    )
}

export default Sets