import TypeIt from "./TypeIt"
import { useState } from "react"
import { useEffect } from "react"

function TypeParent(){
    
    const[question, setQuestion] = useState("")

    useEffect(()=>{
        setQuestion("console.log()")
    },[])
    
    return(
        <TypeIt question={question}/>
    )
}

export default TypeParent