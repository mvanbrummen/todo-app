import { createStore } from "vuex";
import { ADD_TODO, REMOVE_TODO } from "./mutation-types";
import { mutations } from "./mutations";
import { getters } from "./getters";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  state: {
    todos: [],
  },
  mutations,
  getters,
  actions: {
    addTodo({ commit }, todoText) {
      commit(ADD_TODO, todoText);
    },
    removeTodo({ commit }, idx) {
      commit(REMOVE_TODO, idx);
    },
  },
  modules: {},
  strict: debug,
});
