export const addUserAction = (formData, moveforwardData) => {
    return (dispatch) => {
      dispatch({ type: "ADD_USER", payload: formData });
      moveforwardData();
    };
  };