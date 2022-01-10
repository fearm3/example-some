const app = Vue.createApp({
  data() {
    return {
      showBorder: false,
      boxClass: "border red",
      redBG: false,
      bgColor: "green",
    };
  },
  computed: {
    boxClasses() {
      return { border: this.showBorder, red: this.redBG };
    },
  },
}).mount("#app");
