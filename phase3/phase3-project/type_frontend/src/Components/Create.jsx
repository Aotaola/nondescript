import { useNavigate } from "react-router-dom"

function Create({isLoggedIn}) {
    
    const navigate = useNavigate()

    function handleClick(){
        if (isLoggedIn === true){
            navigate("/createset")
        }
        else{
            navigate("/Login")
        }
    }
    
    return (
        <button class="button" onClick={handleClick}>Create Set</button>
    )
}

export default Create;