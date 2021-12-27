import { actions } from "../../../src/store/actions";
import { ADD_TODO, REMOVE_TODO } from "@/store/mutation-types.js";

describe("actions", () => {
  it("addTodo", (done) => {
    testAction(
      actions.addTodo,
      "Test todo",
      {},
      [{ type: ADD_TODO, payload: "Test todo" }],
      done
    );
  });

  it("removeTodo", (done) => {
    testAction(
      actions.removeTodo,
      0,
      {},
      [{ type: REMOVE_TODO, payload: 0 }],
      done
    );
  });
});

// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0;

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count];

    try {
      expect(type).toBe(mutation.type);
      expect(payload).toBe(mutation.payload);
    } catch (error) {
      done(error);
    }

    count++;
    if (count >= expectedMutations.length) {
      done();
    }
  };

  // call the action with mocked store and arguments
  action({ commit, state }, payload);

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0);
    done();
  }
};
