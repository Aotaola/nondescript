import TypeIt from "./TypeIt"
import { useState } from "react"
import { useEffect } from "react";

function TypeParent({ id }){

    useEffect(() => {
        fetch(`http://localhost:9292/cardsets/${id}`)
          .then((r) => r.json())
          .then((cards) => {


                const newArray = cards.map(card =>{
            
                    return {question: card.question, 
                            description: card.description, 
                            hint:card.hint, 
                            answer: card.answer}
                })

                setQuestionArray(newArray)
          });
      }, []);

      

    //Array of questions
    const[questionArray, setQuestionArray] = useState(["Seb","Tuck","Ale","Soph","Olive"])

    //index of the question array
    const[questionCount, setQuestionCount] = useState(0)
    
    return(
        <TypeIt key="1" setQuestionArray={setQuestionArray} setQuestionCount={setQuestionCount} questionCount={questionCount} question={questionArray[questionCount]} questionArray={questionArray}/>
    )
}

export default TypeParent