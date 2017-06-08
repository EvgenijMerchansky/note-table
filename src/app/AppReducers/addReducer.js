const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {

    case 'ADD':
    if((action.payload.value != '') && (action.payload.value != ' ')){
        return [...state, action.payload]; // в этом варианте так же можно записывать обьекты которые будут внутри массива , и мы сможем спокойно их итерировать map()'ом или filter()'ом (смотри addAction) - просто в action.payload приходит обьект который мы помещаем в массив в нашем редюсере, и обьекты будут записыватся рядом возле друг друга как записи в TODOLIST'e ;
    }

    case 'REMOVE':
      const removeItem = state.filter((elem,index) => {
        return elem.id != action.payload;
      })
      return removeItem;

    }

  return state
}
