import Sets from "./Sets"

function Home({ setSelectedSet, cardSet }){
    
    return(
        <div>
            {cardSet.map(set=>{
                <Sets set={set} setSelectedSet={setSelectedSet}/>
            })}
        </div>
    )
}

export default Home