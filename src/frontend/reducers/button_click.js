const buttonClick = (state = false, action) => {
  switch (action.type) {
    case 'CLICK':
      return action.value;
    default:
      return state;
  }
};

export default buttonClick;
