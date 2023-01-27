import { useParams } from "react-router-dom"
import Header from "./Header"

function Score ({isLoggedIn}){

    let {score} = useParams()

    return (
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <p>Your Final Score is: {score}</p>
        </div>
    )
}

export default Score