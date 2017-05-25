const akkords = (state = [], action) => {
  switch (action.type) {
    case 'ADD_AKKORDS':
      return action.akkord;
    default:
      return state;
  }
};

export default akkords;
