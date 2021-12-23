<template>
  <li :key="key">
    {{ text }}

    <button @click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    text: String,
    key: String,
  },
  emits: ["remove"],
};
</script>

<style scoped>
li {
  margin: 0 10px;
}
</style>