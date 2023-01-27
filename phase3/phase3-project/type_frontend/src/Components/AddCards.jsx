import { useState } from "react"
import Header from "./Header"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "./Card"

function AddCards({isLoggedIn}){
    
    const [userInput, setUserInput] = useState("")

    const [allCards, setAllCards] = useState([])

    let {id} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:9292/games/423423/${id}`)
        .then(res=>res.json())
        .then(req=>{
            setAllCards(req)
        })
    },[])

    function handleChange(e){
        setUserInput(e.target.value)
    }

    function handleSubmit(){
        fetch(`http://localhost:9292/card`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: userInput,
                cardset_id: id
            })
        })
        .then(res=>res.json())
        .then(newPost=>{
            setAllCards([...allCards, newPost])
        })
    }
    
    return(
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <form onSubmit={handleSubmit}>
                <label>
                    Type A Question:
                    <br />
                    <input onChange={handleChange} type="text" name="createSet" value={userInput}/>
                </label>
            <br />
                <button type="submit"> Add Card </button>
            </form>
            <div id="containerOfCard">
            {allCards.map(card=>{
                return (
                    <Card allCards={allCards} setAllCards={setAllCards} card={card}/>
                )
            })}
            </div>
        </div>
    )
}

export default AddCards