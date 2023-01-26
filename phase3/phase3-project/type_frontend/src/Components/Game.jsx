import Difficulty from "./Difficulty"
import Header from "./Header"
import TypeParent from "./TypeParent"
import {useEffect} from 'react'
function Game({ selectedSet }){
    useEffect (() => {
        fetch(`http://localhost:9292/games`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            user_id: selectedSet.user_id,
            cardset_id: selectedSet.id,
            difficulty: selectedSet.difficulty,
          })
        })
      }, [])
    return(
        <div>
            <Header/>
            <Difficulty id={selectedSet.id}/>
            <TypeParent selectedSet={selectedSet} />
        </div>
    )
}

export default Game