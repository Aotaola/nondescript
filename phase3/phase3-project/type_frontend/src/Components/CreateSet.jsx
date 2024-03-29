import CreateSetSets from "./createsetsets"
import { useState } from "react"
import Header from "./Header"

function CreateSet({cardSet, setCardSet, setSelectedSet, isLoggedIn}){
    
    const [isClicked, setIsClicked] = useState(false)
    const [userInput, setUserInput] = useState("")

    function handleSubmit(){
            fetch("http://localhost:9292/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: userInput})
        })
        .then(res=>res.json())
        .then(newPost=>setCardSet([... cardSet, newPost ]))
    }

    function handleChange(e){
        setUserInput(e.target.value)
    }

    return (
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <button class="setButtons" onClick={()=>setIsClicked(!isClicked)}> Make A Set </button>
                {isClicked ? (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name of set:
                                <input onChange={handleChange} type="text" name="email" value={userInput}/>
                            </label>
                        <br />
                             <button type="submit"> Create Set </button>
                        </form>
                    </div>
                ):(
                    null
                )}
            {cardSet.map(set =>{
                return (
                    <CreateSetSets setSelectedSet={setSelectedSet} cardSet={cardSet} setCardSet={setCardSet} set={set}/>
                )
            })}
        </div>
    )
}

export default CreateSet