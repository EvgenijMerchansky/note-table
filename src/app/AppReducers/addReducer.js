const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {

    case 'ADD':
      if(action.payload != ''){
        return [...state, action.payload];
      }else{
        return state
      }
    }

  return state
}
