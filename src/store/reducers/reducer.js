
const initialState = {
      highlightButtonPositions:{}
}

const reducer = (state = initialState, action) => {
     switch (action.type){
          case 'NEXT_SYMBOL_ENTERED':
               return {
                    highlightButtonPositions: action.payload
               }

          default:
               return state;
     }
};

export default reducer;
