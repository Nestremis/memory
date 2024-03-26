import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Input from './components/Input';
import Card from './components/Card';
import { ReactComponent as Repeat } from './repeat.svg';
import { ReactComponent as Thrash } from './trash.svg';
import { clearActualMatch, flipCardAndMatch, selectCards, newGame, repeatGame, removeCard } from './features/cardsSlice';

function App() {
   const words = useSelector(selectCards);
	const [timeoutHandler, setTimeoutHandler] = useState(null);
   const dispatch = useDispatch();

   const handleClick = useCallback((cardId) => {
		if (timeoutHandler) {
			clearTimeout(timeoutHandler)
		};

		dispatch(flipCardAndMatch({
			id: cardId,
			isFlipped: true,
		}));

		const handler = setTimeout(()=> {
			dispatch(clearActualMatch())
		}, 500);

		setTimeoutHandler(handler);

	}, [timeoutHandler, dispatch]);


   const reset = () => {
      dispatch( newGame (
         { type: 'reset' }
      ))
   }

   const handleDoubleClick = () => {
      dispatch( removeCard (
         {  
            type: 'removeCard',
            id: Card,
            // id: cardId,
         }
      ))
   }

   const repeat = () => {
      dispatch( repeatGame (
         { type: 'repeat'}
      ))
   }

	return (
    <>
      <div className='wrapper'>

          <div className= 'header'>

            <h1 className='logo'>  memory </h1>

            <Input />

            <div className='buttonsContainer'>
               <button onClick={repeat} className='btn btn1'> {<Repeat className="btnLabel" />} </button>
               <button onClick={reset} className='btn btn2'> {<Thrash className="btnLabel" />} </button>
            </div>
          </div>

          <div className='cards-table'>

            {words.map( word =>
               <Card
                  key={word.id}
                  content={word.content}
                  id={word.id}
                  isFlipped={word.isFlipped}
                  handleClick={handleClick}
                  value={word.value}
                  handleDoubleClick={handleDoubleClick}
               />
              )}
          </div>
      </div>
   </>
  )
};

export default App;
