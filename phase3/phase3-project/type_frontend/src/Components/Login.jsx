import { useState } from "react"

function Login(){
    
    const[postEmail, setPostEmail] = useState("")
    const[postPassword, setPostPassword] = useState("")

    const user = {
        email: postEmail,
        password: postPassword
    }

    function handleSubmit(){
        
    }
    
    return(
        <div>
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