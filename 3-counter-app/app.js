const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    //return value
    getNumberCounter() {
      //   console.log("counter 1");
      return this.counter > 10 ? "Big number" : "Small Number";
    },
    getNumberCounter2() {
      //   console.log("counter 2");
      return this.counter2 > 10 ? "Big number" : "Small Number";
    },
  },
  watch: {
    //dont return a value(see value)
    counter(newValue, oldValue) {
      console.log(oldValue, "=>", newValue);
    },
  },
  //   methods: {
  //     inc() {
  //       this.counter++;
  //     },
  //     dec() {
  //       this.counter--;
  //     },
  //   },
}).mount("#app");
