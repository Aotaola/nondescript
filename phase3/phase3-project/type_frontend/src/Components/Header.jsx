import Create from "./Create"
import Menu from "./Menu"
import UserLoginBtn from "./UserLoginBtn"
import { useNavigate } from "react-router-dom"

function Header({isLoggedIn}){

    const navigate = useNavigate()

    function handleClick(){
        navigate("/login")
    }

    return(
        <div class="header">
            <Create isLoggedIn={isLoggedIn} />
            <Menu />

            {isLoggedIn ? (
                <button class="button" onClick={handleClick}>Sign Out</button>
            ):(
                <UserLoginBtn />
            )}
        </div>
    )
}

export default Header

