
export const actions = {
  ADD_TODO: 'ADD_TODO',
  SET_CHECK: 'SET_CHECK',
}

export const actionCreators = {
  addTodo: (description) => {
    return {
      type: actions.ADD_TODO,
      payload: { description }
    };
  },
  setCheck: (id) => {
    return {
      type: actions.SET_CHECK,
      payload: { id }
    };
  }
}