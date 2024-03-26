import React from 'react';
import './Card.scss';
import ReactCardFlip from 'react-card-flip';
import Tilt from 'react-parallax-tilt';
// import { completed } from '../features/cardsSlice';

const Card = ( { handleClick, content, id, isFlipped, value, handleDoubleClick } ) => {
    
    // const handleClick = () => {       
        // setTimeout(() => {
        //     return <div className={'card-translation-inactive'}></div>
        // }, 1000);
    // }

    // state.completed.style={{ setTimeout(() => {
    //     { backgroundColor: 'grey'}
    //   }, 1500) }} 

    // let cardColor = {
    //     backgroundColor:'red'
    // }

    // if (isFlipped && completed.filter(id) ) {
    //     style=({backgroundColor: 'blue'})
    // }
    
    
    return (
        <Tilt>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' >

                <div
                    className='card'
                    id={id} 
                    onClick={() => handleClick(id)}
                    value={value}
                    // flipSpeedBackToFront={0.2}
                >
                </div>

                <div
                    className='card-translation'
                    // className={`session-sign-${sessionOn && !breakIsOn ? 'active':'inactive'}`}
                    // className={`card-translation${completed ? '-inactive':''}`}
                    // style={{
                    //     visibility: completed ? "card-translation-inactive" : "card-translation"
                    //   }}
                    // style={{ setTimeout(() => 
                    //     backgroundColor: 'grey'
                    //   , 1500) }
                    id={id}
                    onDoubleClick={() => handleDoubleClick(id)}
                    value={value}
                    // flipSpeedBackToBack={0.2}
                >    
                    {content}
                </div>

            </ReactCardFlip>
        </Tilt>
    );
};

export default Card;
