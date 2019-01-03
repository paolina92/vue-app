import Vue from "vue";
import App from "./app.vue";

fetch("/api/getUser")
  .then(res => res.json())
  .then(user => console.log(user));

new Vue({
  el: "#app",
  render: h => h(App)
});
