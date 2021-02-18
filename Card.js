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
    };        
                    
         
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
                    check={props.check}
                >                  
                    {props.content}
                </div>         

            </ReactCardFlip>            
        </Tilt>
    )
};

export default Card;
