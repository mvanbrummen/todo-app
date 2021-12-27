import { createStore } from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  state: {
    todos: [],
  },
  mutations,
  getters,
  actions,
  modules: {},
  strict: debug,
});
