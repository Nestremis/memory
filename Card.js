import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Tilt from 'react-parallax-tilt';

const Card = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const [activeCardsId, setActiveCardsId] = useState([]); 
      
    const handleClick = () => {
        setActiveCardsId([...activeCardsId, props.id]); 
        
        setIsFlipped(!isFlipped); 

        props.check({activeCardsId, setActiveCardsId, isFlipped, setIsFlipped});

        // if(activeCardsId.length===2 && activeCardsId[0]===activeCardsId[1]) {
        //     setIsFlipped(!isFlipped)
        //     setTimeout(()=> {setActiveCardsId(activeCardsId)}, 2000)
        // } else {
        //     setTimeout(() => {setIsFlipped(isFlipped)}, 2000);
        //     setTimeout(()=> {setActiveCardsId(activeCardsId)}, 2000)
        // };  
        
    };            
        
        // if(!isFlipped && openedCard.length === 2 && openedCard[0]=== openedCard[1]) {
        //     setIsFlipped(!isFlipped)
        // };
        // setTimeout(openedCard.pop(), 2000);  //z 3s opóźnieniem oczyść tablicę
        // setFirstCard([...firstCard, props.id ]); //wrzuć do niej id
        // if (Tilt.isFlipped && {props.id === props.id}) {
        //     setIsFlipped(isFlipped)
        // }
        
        // if (secondCard[props.id] === firstCard[props.id] ) { //jesli ta sama zawartość id
        //     setIsFlipped(isFlipped);                
        // } else {
        //     setTimeout(setIsFlipped, 1500);
        // }
        
        // if (Array.isArray(firstCard) && firstCard.length > 1) {firstCard.length = 1}; 
        // if (Array.isArray(secondCard) && secondCard.length > 1) {secondCard.length = 1}; 
    // };   
        
       
         
    return (
        <Tilt>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'  >   
            
                <div 
                    className='card'
                    onClick={handleClick}
                    key={props.key}
                    id={props.id}
                >   
                </div>  
                
                <div 
                    className='card-translation' 
                    key={props.key} 
                    id={props.id}
                    check={props.checkIfCardsMatch}
                >                  
                    {props.content}
                </div>         

            </ReactCardFlip>            
        </Tilt>
    )
};

export default Card;
