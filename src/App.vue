<template>
  <div id="app">
    <nav-bar />
    <career />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Career from "./components/Career.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Career,
  },
};
</script>
