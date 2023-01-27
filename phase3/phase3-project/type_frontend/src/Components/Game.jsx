import Difficulty from "./Difficulty"
import Header from "./Header"
import TypeParent from "./TypeParent"
import { useParams } from "react-router-dom"
import {useEffect} from 'react'

function Game(){
    
    let {id} = useParams()

    return(
        <div>
            <Header/>
            <Difficulty id={id}/>
            <TypeParent id={id} />
        </div>
    )
}

export default Game