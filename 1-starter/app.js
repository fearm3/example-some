const app = Vue.createApp({
  data() {
    return {
      title: "VueJs start",
      content: "lorem ipsum",
      eduflow: {
        title: "VeuJs Examples",
        target: "_blank",
        url: "https://v3.vuejs.org/",
        alt: "Awesome Vue.js",
      },
      owner: "from App to Some thing else",
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(pTitle) {
      //   alert();
      //   this.title = "This will be changed!";
      this.title = pTitle;
    },
    updateCoords(message, event) {
      //   console.log(event.x, event.y);
      //   console.log(message, event.x, event.y);
      //   this.coords.x = event.x;
      //   this.coords.y = event.y;
      this.changeTitle(`${event.x}, ${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
