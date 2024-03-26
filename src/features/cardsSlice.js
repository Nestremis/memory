import { createSlice } from '@reduxjs/toolkit';
import '../App.scss';

const initialState = {
    cardsInGame: [],
	actualMatched: [],
};

const _clearActualMatch = (state) => {	
	const actualMatched = state.actualMatched;
	state.actualMatched = [];
	state.cardsInGame = state.cardsInGame.map((card) => {
		if (actualMatched.find(matchedCard => matchedCard.id === card.id)) {
			card.isFlipped = false;
		}

		return card;
	});
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        saveCards: (state, action) => {
            if(state.cardsInGame.length < 24) {
	            _clearActualMatch(state);
                state.cardsInGame.push(action.payload[0]);
                state.cardsInGame.push(action.payload[1]);
                state.cardsInGame.sort(() => .5 - Math.random())
            }
        },

	    flipCardAndMatch: (state, action) => {
        	if (state.actualMatched.length === 2) {
		        _clearActualMatch(state);
	        }

	    	state.cardsInGame = state.cardsInGame.map((card) => {
	    		if (card.id === action.payload.id) {
				    card.isFlipped = action.payload.isFlipped;
				    state.actualMatched.push(card);
			    };
				return card;
		    });
			
		    if (state.actualMatched.length===2 &&
			    state.actualMatched[0].value===state.actualMatched[1].value) {				
				state.actualMatched = [];
				}
		},
			
		clearActualMatch: (state) => {
				_clearActualMatch(state);
	    },

		newGame: (state) => {
			state.cardsInGame = []
		},

		// removeCard: (state) => {	
		// 	state.cardsInGame = state.cardsInGame.map((card) => {
		// 		card = false								
		// })},
		removeCard: (state) => {
			state.cardsInGame = state.cardsInGame.map((card) => {
			  return false;
			});
		  },
		  

		repeatGame: (state) => {
			state.cardsInGame.sort(() => .5 - Math.random());
			state.cardsInGame = state.cardsInGame.map((card) => {	    		
				card.isFlipped = false;		
	    		return card;
		    })
		}
}});

export const { saveCards, flipCardAndMatch, clearActualMatch, newGame, repeatGame, removeCard } = cardsSlice.actions;

export const selectCards = state => state.cards.cardsInGame;

export default cardsSlice.reducer;