import {useState, useEffect} from 'react'



function Difficulty(){

const [difficulty, setDifficulty] = useState('easy')

useEffect (()=>{
    // ${id}
    fetch(`http://localhost:9292/id:1`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({difficulty: `${difficulty}`})
    })
    
},[])


return (
        <div id="difficulty">
            <div onClick = {(e) => setDifficulty('easy')}>
            <h1>Easy</h1>
            </div>
            <div onClick = {(e) => setDifficulty('medium')}>
            <h1>Medium</h1>
            </div>
            <div onClick = {(e) => setDifficulty('hard')}>
            <h1>Difficult</h1>
            </div>
            <div onClick = {(e) => setDifficulty('superhard')}>
            <h1>Insanity</h1>
            </div>
        </div>
    )
}

export default Difficulty