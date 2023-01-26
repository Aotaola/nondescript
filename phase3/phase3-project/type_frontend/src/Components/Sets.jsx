import { useNavigate } from "react-router-dom"

function Sets({set, setSelectedSet}){
    
    const navigate = useNavigate()
    
    function handleClick(){
        setSelectedSet(set)
        navigate("/game")
        
        // fetch("http://localhost:9292/",{
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({id: set.id })
        //     })
    }
    
    
    return(
        <div onClick={handleClick}>
            <h1>{set.title}</h1>
            <p>test</p>
            {/* <p>{set.length - 10}</p> */}
            <img/>
        </div>
    )
}

export default Sets