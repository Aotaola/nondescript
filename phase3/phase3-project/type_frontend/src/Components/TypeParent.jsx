import TypeIt from "./TypeIt"
import { useState } from "react"

function TypeParent({ selectedSet }){
    
    //Array of questions
    const[questionArray, setQuestionArray] = useState(["Seb","Tuck","Ale","Soph","Olive"])

    //index of the question array
    const[questionCount, setQuestionCount] = useState(0)
    
    return(
        <TypeIt setQuestionArray={setQuestionArray} setQuestionCount={setQuestionCount} questionCount={questionCount} question={questionArray[questionCount]} questionArray={questionArray}/>
    )
}

export default TypeParent