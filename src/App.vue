<template>
  <div class="container">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/Header.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Roboto";
  // background: radial-gradient(rgb(137, 160, 137), rgb(241, 240, 240));
  background-color: #eee;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
</style>
