const buttonClick = (state = false, action) => {
  switch (action.type) {
    case 'CLICK':
      return true;
    default:
      return state;
  }
};

export default buttonClick;
