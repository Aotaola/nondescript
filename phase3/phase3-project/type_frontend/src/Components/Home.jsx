import Sets from "./Sets"
import Header from "./Header"

function Home({ setSelectedSet, cardSet, isLoggedIn }){
    
    return(
        <div>
            <Header isLoggedIn={isLoggedIn} />
            {cardSet.map(set=>{
                return(
                    <Sets key={set.id} set={set} setSelectedSet={setSelectedSet}/>
                )
            })}
        </div>
    )
}

export default Home