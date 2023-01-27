function Card({card, allCards, setAllCards}){

    function handleClick(){
        fetch(`http://localhost:9292/card/${card.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res=>res.json())
            .then(()=>{
                setAllCards(
                    allCards.filter((allcard =>{
                        return (allcard.id !== card.id)
                    }))
                )
            })
    }

    return(
        <div class="card">
            <h1>{card.question}</h1>
            <button class="delete-button" onClick={handleClick}> Delete </button>
        </div>
    )
}

export default Card