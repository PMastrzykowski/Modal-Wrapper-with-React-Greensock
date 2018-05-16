export const toggleModal = () => {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL'});
    };
  };
  
export const nextBox = () => {
    return function(dispatch) {
        dispatch({type: 'NEXT_BOX'});
    };
  };