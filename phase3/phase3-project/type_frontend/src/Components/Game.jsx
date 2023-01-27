import Difficulty from "./Difficulty"
import Header from "./Header"
import TypeParent from "./TypeParent"
import { useParams } from "react-router-dom"

function Game({isLoggedIn}){
    
    let {id} = useParams()

    // useEffect (() => {
    //     fetch(`http://localhost:9292/games`, {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify({
    //         user_id: selectedSet.user_id,
    //         cardset_id: selectedSet.id,
    //         difficulty: selectedSet.difficulty,
    //       })
    //     })
    //   }, [])
    //   useEffect (() => {
    //     fetch(`http://localhost:9292/games`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             user_id: selectedSet.user_id,
    //             cardset_id: selectedSet.id,
    //             difficulty: selectedSet.difficulty,
    //         })
    //     }).then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         // do something with the returned data
    //     }).catch(err => {
    //         console.error(err)
    //         // handle the error
    //     })
    // }, [selectedSet.user_id, selectedSet.id, selectedSet.difficulty])
    // useEffect (()=>{
    //     fetch(`http://localhost:9292/id:${id}`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({"difficulty": `${selectedSet.difficulty}`})
    //     }).then(res => res.json())
    //     .catch(err => console.error(err))
    // },[])

    return(
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <Difficulty id={id}/>
            <TypeParent id={id} />
        </div>
    )
}

export default Game