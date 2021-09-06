<template>
  <header>
    <nav>
      <h1><router-link to="/">Phone E-commerce</router-link></h1>
      <ul>
        <li><router-link to="/phones">All phones</router-link></li>
        <li><router-link to="/add-phone">Add phone</router-link></li>
        <li>
          <router-link to="/cart">Cart({{ cartSize }})</router-link>
        </li>
      </ul>
    </nav>
    <p class="filters" @click="isVisible = true">Filters</p>
    <div class="search">
      <filter-modal v-if="isVisible" @close="isVisible = false"></filter-modal>
      <input @input="test" type="text" placeholder="Search..." />
    </div>
  </header>
</template>

<script>
import FilterModal from "./FilterModal.vue";
export default {
  components: {
    FilterModal,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    cartSize() {
      return this.$store.getters.getCartItems.length;
    },
  },
  methods: {
    test(e) {
      this.$store.dispatch("search", e.target.value);
      console.log(e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_header.scss";
</style>
