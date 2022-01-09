const app = Vue.createApp({
  data() {
    return {
      fullname: "Ahmet",
    };
  },
  methods: {
    updateValue(event) {
      console.log(event.target.value);
      this.fullname = event.target.value;
    },
  },
}).mount("#app");
