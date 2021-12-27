import { getters } from "../../../src/store/getters";

describe("getters", () => {
  it("getTodoCount", () => {
    const state = {
      todos: [
        {
          text: "test",
        },
        {
          text: "test2",
        },
      ],
    };

    const result = getters.getTodoCount(state);

    expect(result).toBe(2);
  });

  it("getTodos", () => {
    const state = {
      todos: [
        {
          text: "Learn vuejs",
        },
      ],
    };

    const result = getters.getTodos(state);

    expect(result.length).toBe(1);
  });
});
