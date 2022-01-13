<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
        @keypress.enter="addTask"
      />
      <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
      <Task v-for="(task, index) in taskList" :key="index" :task="task"/>
    </div>
  </main>
</template>

<script>
export default {
  name: "TaskBoard",
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    taskList() {
      return this.$store.getters["getTasks"];
    },
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.dispatch("addTask", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>
