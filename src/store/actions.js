import { ADD_TODO, REMOVE_TODO } from "@/store/mutation-types.js";

export const actions = {
  addTodo({ commit }, todoText) {
    commit(ADD_TODO, todoText);
  },
  removeTodo({ commit }, idx) {
    commit(REMOVE_TODO, idx);
  },
};
