<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">
      {{ task.content }}
    </div>
    <div class="buttons">
      <button @click="toggleDone">{{ task.done ? "Undo" : "Done" }}</button>
      <button class="delete" @click="removeTask">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
      toggleDone() {
          this.$store.dispatch('toggleTask', this.task)
      },
      removeTask() {
        this.$store.dispatch('removeTask', this.task)
      }
  },
};
</script>

<style>
</style>