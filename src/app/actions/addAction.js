export const add = (noteValue) => {
  console.log(noteValue, '<- ny value');
    const ID = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
    };
    const noteData = {
      value: noteValue,
      id: ID()
    };
    return {
      type: 'ADD',
      payload: noteData
    }
}

export const del = (id) => {
  return {
    type: 'REMOVE',
    payload: id
  }
}
