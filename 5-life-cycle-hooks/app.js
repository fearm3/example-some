const app = Vue.createApp({
  data() {
    return {
      title: "Test title",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate working...");
  },
  created() {
    console.log("created working...");
    setTimeout(() => {
      this.itemList = [1, 2, 3, 4, 5, 6, 7, 9];
    }, 2000);
  },
  beforeMount() {
    console.log("beforeMount working...");
  },
  mounted() {
    console.log("mounted working...");
  },
  beforeUpdate() {
    console.log("beforeUpdate working...");
  },
  updated() {
    console.log("updated working...");
  },
});
app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 5000);
