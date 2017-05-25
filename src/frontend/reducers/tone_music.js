const tone = (state = 0, action) => {
  switch (action.type) {
    case 'TONE':
      return action.value;
    default:
      return state;
  }
};

export default tone;
