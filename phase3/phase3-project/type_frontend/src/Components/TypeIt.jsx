import { useState } from "react";
import { useRef } from "react";

function TypeIt({ question, questionArray, setQuestionArray, setQuestionCount, questionCount}){

    //useStates

    const[mistakeCount, setMistakeCount] = useState([])

    const[arrayOfMistakes, setArrayOfMistakes] = useState([])

    const[answer, setAnswer] = useState("")

    const[score, setScore] = useState(0)

    const[isWrong, setIsWrong] = useState(false)

    const[isRightChar, setIsRightChar] = useState(false)

    const maxAttempts = 3

    let key = ""

    const ref = useRef(null);

    //functions

    //when user types
    function handleInput(e){
        if(key !== "enter"){
            setAnswer(e.target.value)
        
            if(key !== "backspace"){
                const userInput = e.target.value
        
                checkLetter(userInput)

                somethingIsWrong(userInput)
    
                if (userInput === question){
                correctAnswer(userInput)
                }
                else{
                    incorrectAnswer(maxAttempts)
                }
            
                if(questionCount+1 === questionArray.length && userInput === question){
                    replaceQuestionArray()
                }
            }
        }
        else{
            setQuestionCount(questionCount+1)
        }
    }

    function handleKeyDown(e){
        if(e.key === "Backspace"){
            key='backspace'
        }
        else if(e.key === "Enter"){
            key="enter"
        }
        else{
            key=""
        }
    }

    function checkLetter(userAnswer){
        const indexNum = userAnswer.length-1
        if(userAnswer[indexNum] === question[indexNum]){
            makeCharGreen(indexNum)
            return true
        }
        else{
            setMistakeCount([...mistakeCount, userAnswer[indexNum]])
            return false
        }
    }

    function correctAnswer(){
        
        setQuestionCount(questionCount+1)
        setAnswer("")
        setScore(score+1)
    }

    function somethingIsWrong(userAnswer){
        if(question.includes(userAnswer)){
            setIsWrong(false)
        }
        else{
            setIsWrong(true)
        }
    }

    function replaceQuestionArray(){
    
        if(arrayOfMistakes.length === 0){
            console.log("Great Job!")
        }
        else{
            setQuestionArray(arrayOfMistakes)
            setQuestionCount(0)
            setArrayOfMistakes([])
            console.log(arrayOfMistakes)
        }
    }

    function incorrectAnswer(maxAttempts){
        if(mistakeCount.length+1 === maxAttempts){
            setArrayOfMistakes([...arrayOfMistakes, question])
            setQuestionCount(questionCount+1)
            setAnswer("")
            setIsWrong(false)
            setMistakeCount([])
        }
    }

    function makeCharGreen(index){
       
    }

    return(
        <div>
             <div>
                <p>
                    {question.split('').map((character, index) =>{
                        return( 
                            <span id={index}>{character}</span>
                        )
                    })}
                </p>
                 <p>{score}</p>
                 {isWrong ?(
                    <p>Something Is Wrong!</p>
                 ):(
                    null
                 )}
             </div>
             <div>
                 <textarea 
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    value={answer}>
                 </textarea>
             </div>
        </div>
    )
}

export default TypeIt