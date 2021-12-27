import { mutations } from "../../../src/store/mutations";

const { ADD_TODO, REMOVE_TODO } = mutations;

describe("mutations", () => {
  it("ADD_TODO", () => {
    const state = { todos: [] };

    ADD_TODO(state, "test123");
    ADD_TODO(state, "test456");
    ADD_TODO(state, "test789");

    expect(state.todos.length).toBe(3);
  });
  it("REMOVE_TODO", () => {
    const state = {
      todos: [
        {
          text: "Learn vuejs",
        },
      ],
    };

    REMOVE_TODO(state, 0);

    expect(state.todos.length).toBe(0);
  });
});
