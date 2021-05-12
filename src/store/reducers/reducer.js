
const initialState = {
      highlightButtonPositions:{},
      keyboardVisible: { display: "none" }
}

const reducer = (state = initialState, action) => {
     switch (action.type){
          case 'NEXT_SYMBOL_ENTERED':
               return {
                    highlightButtonPositions: action.payload
               }

          case 'SHOW_HIDE_KEYBOARD':
               return {
                    keyboardVisible: (state.keyboardVisible.display === "none")
                        ? { display: "block" } : { display: "none" }
               }

          default:
               return state;
     }
};

export default reducer;
