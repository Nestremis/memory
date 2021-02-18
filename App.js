import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App () {     
  const [words, setWords] = useState([]); 
  
  const addNewCards = (e) =>  {
    const input = document.querySelector('input');
    if (e.key === 'Enter' && input.value !== '' && words.length < 24 ) {            
          setWords([...words.sort(() => .5 - Math.random()),
            {
              id: words.length,
              key: input.value.slice(0, input.value.indexOf('=')),
            },
            {
              id: words.length,
              key: input.value.slice(input.value.indexOf('=') +1), 
            }
          ]); 
    input.value = '';
    }
  };

        
  const [pairOfCards, setPairOfCards] = useState([]); 
  
  function checkIfCardsMatch ({activeCardsId, isFlipped, setIsFlipped, setActiveCardsId}) { 

    // let item = activeCardsId[0];

    setPairOfCards ( [...pairOfCards, activeCardsId ] ); //PRZEKAZANIE ID do stanu globalnego - tu jest błąd
       
       if ( pairOfCards.length >=2 && pairOfCards[0]===pairOfCards[1]) {
        setIsFlipped(!isFlipped); 
        setTimeout(()=>{setActiveCardsId([])}, 2000);
        setTimeout(()=>{setPairOfCards([])}, 2000);
      } else {    
        setTimeout(()=>{setIsFlipped(isFlipped)}, 2000);
        setTimeout(()=>{setActiveCardsId([])}, 2000);
        setTimeout(()=> {setPairOfCards([])}, 2000);
    } 
  }; 
    
        
  return (
  <>
    <div className='wrapper'>
        <div className = 'header'>    
          <h1 className ='logo'>   dynamic memory </h1>
          <input 
            type='text'     
            placeholder = 'word=translation'
            onKeyPress = {addNewCards}
          />
        </div>
        
        <div className = 'cards-table'> 
          {words.map( word =>
            <> 
                <Card 
                    key={word.key} 
                    content={word.key} 
                    id={word.id} 
                    check={checkIfCardsMatch}                    
                />             
            </>
          )}
        </div>
    </div>        
  </> 
  )
};

export default App;
