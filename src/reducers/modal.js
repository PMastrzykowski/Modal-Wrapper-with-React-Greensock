export default (state = initialSettings, action) => {
    switch (action.type) {
      case 'TOGGLE_MODAL':
        return {...state, isOpen: !state.isOpen};
      case 'NEXT_BOX':
        return {...state, boxIndex: state.boxIndex === 4? 0 : state.boxIndex + 1};
      default:
        return state;
    }
  };
  
  const initialSettings = {
   isOpen: false,
   boxIndex: 0
}