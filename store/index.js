export default {
  state: {
    tasks: [],
  },

  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },

  mutations: {
    addTask(state, task) {
      state.tasks = [{ content: task, done: false }, ...state.tasks];
    },
    removeTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    toggleTask(state, task) {
      task.done = !task.done;
    },
  },

  actions: {
    addTask({ commit }, payload) {
      commit("addTask", payload);
    },
    removeTask({ commit }, payload) {
      commit("removeTask", payload);
    },
    toggleTask({ commit }, payload) {
      commit("toggleTask", payload);
    },
  },
};
