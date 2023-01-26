import Difficulty from "./Difficulty"
import Header from "./Header"
import TypeParent from "./TypeParent"

function Game({ selectedSet }){
    return(
        <div>
            <Header/>
            <Difficulty />
            <TypeParent selectedSet={selectedSet} />
        </div>
    )
}

export default Game