const intialState = {
  userId: "hello"
};
function Reducer(state = intialState, action) {
  switch (action.type) {
    case "SAVEUSERID":
      return { userId: action.payload };
    case "DELETEUSERID":
      return { userId: intialState.userId };
    default:
      return state;
  }
}
export default Reducer;
