import { useState } from "react"

function TypeIt({question}){


    function handleChange(e){
        setAnswer(e.target.value)
        console.log(e.target.value)
        
        for(let i =0; i < question.length; i++){
            if(question[i] === answer[i]){
                return answer[i]
            }
            else return false
        }
    }

    const[answer, setAnswer] = useState("")

    return(
        <>
        <div>
            <div>
                <p>{question}</p>
            </div>
            <div>
            <textarea class="input_area"
                    placeholder={question}
                    onChange={handleChange}
                    value={answer}>
                </textarea>
            </div>
        </div>
        </>
    )
}

export default TypeIt