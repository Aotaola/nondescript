import { useState } from "react"

function AddCards({set}){
    
    const [userInput, setUserInput] = useState("")

    function handleChange(e){
        setUserInput(e.target.value)
    }
    
    return(
        <div>
            <form >
                <label>
                    Name of set:
                    <input onChange={handleChange} type="email" name="email" value={userInput}/>
                </label>
            <br />
                <button type="submit"> Create Set </button>
            </form>
        </div>
    )
}

export default AddCards