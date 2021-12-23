<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Learn Vue.js"
      />
      <button>Add</button>
    </form>

    <ul>
      <li v-for="(todo, idx) in todos" :key="idx">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      newTodoText: "",
      todos: [],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        text: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
