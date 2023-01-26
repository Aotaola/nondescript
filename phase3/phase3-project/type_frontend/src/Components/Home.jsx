import Sets from "./Sets"

function Home({ setSelectedSet, cardSet }){
    
    return(
        <div>
            {cardSet.map(set=>{
                return(
                    <Sets key={set.id} set={set} setSelectedSet={setSelectedSet}/>
                )
            })}
        </div>
    )
}

export default Home