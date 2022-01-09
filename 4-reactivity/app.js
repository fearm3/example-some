const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: ["apple", "pineapple", "cherry"],
      //   filteredList: [],
    };
  },
  methods: {
    searchList() {
      //   const filteredList = this.itemList.filter((i) => i.includes(this.search));
      //   console.log(filteredList);
    },
  },
  computed: {
    filteredList() {
        return this.itemList.filter((i) => i.includes(this.search));
    },
  },
}).mount("#app");
