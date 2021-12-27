export const getters = {
  getTodos: (state) => {
    return state.todos;
  },
  getTodoCount: (state) => {
    return state.todos.length;
  },
};
