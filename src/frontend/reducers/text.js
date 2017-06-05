const addText = (state = '', action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return action.text;
    default:
      return state;
  }
};

export default addText;
