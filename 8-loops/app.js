const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Vue-1", completed: false },
        { id: 2, text: "Vue-2", completed: false },
        { id: 3, text: "Vue-3", completed: true },
        { id: 4, text: "Vue-4", completed: false },
        { id: 5, text: "Vue-5", completed: false },
        { id: 6, text: "Vue-6", completed: false },
        { id: 7, text: "Vue-7", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
    },
    removeItem(todoItem) {
      //   this.todoList = this.todoList.filter((item) => item.id !== todoItem.id);
      this.todoList = this.todoList.filter((todo) => todo !== todoItem);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
}).mount("#app");
