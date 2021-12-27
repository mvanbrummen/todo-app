import { ADD_TODO, REMOVE_TODO } from "@/store/mutation-types.js";

export const mutations = {
  [ADD_TODO](state, todoText) {
    state.todos.push({
      text: todoText,
    });
  },
  [REMOVE_TODO](state, idx) {
    state.todos.splice(idx, 1);
  },
};
