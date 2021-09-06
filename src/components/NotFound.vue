<template>
  <section class="notFound">
      <h2>Page not found</h2>
      <p>
        Page could not be found - maybe check out all our
        <router-link to="/phones">phones</router-link>
      </p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import '../assets/scss/components/_notFound.scss';
</style>