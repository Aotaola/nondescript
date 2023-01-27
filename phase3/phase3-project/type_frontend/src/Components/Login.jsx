import { useState } from "react"
import Header from "./Header"
import { useNavigate } from "react-router-dom"

function Login({setIsLoggedIn}){
    
    const[postEmail, setPostEmail] = useState("")
    const[postPassword, setPostPassword] = useState("")

    const navigate = useNavigate()

    function handleSubmit(){
        alert("You logged in!")
        setIsLoggedIn(true)
        navigate("/")
        console.log(postEmail, postPassword)
    }
    
    return(
        <div>
          <Header />
            <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" onChange={(e)=>setPostEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="email" onChange={(e)=>setPostPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
        </div>
    )
}

export default Login