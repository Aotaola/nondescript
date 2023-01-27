import {useState, useEffect} from 'react'

function Difficulty({id}){

const [difficulty, setDifficulty] = useState('easy')



useEffect (()=>{
    fetch(`http://localhost:9292/games/4234234/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            difficulty: `${difficulty}`
        })
    })
},[])


return (
        <div id="difficulty">
            <div class="difficulty" onClick = {(e) => setDifficulty('easy')}>
            <h1>Easy</h1>
            </div>
            <div class="difficulty" onClick = {(e) => console.log("yes") }>
            <h1>Medium</h1>
            </div>
            <div class="difficulty" onClick = {(e) => setDifficulty('hard')}>
            <h1>Difficult</h1>
            </div>
            <div class="difficulty" onClick = {(e) => setDifficulty('superhard')}>
            <h1>Insanity</h1>
            </div>
        </div>
    )
}

export default Difficulty