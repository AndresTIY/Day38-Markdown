export default function exampleAsyncAction(text) {
  return function(dispatch) {
    dispatch({
      type: "CLEAR",
      test: text
    });
  };
}
