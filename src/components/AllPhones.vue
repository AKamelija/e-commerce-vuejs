<template>
  <div id="modal-filter"></div>
  <div class="all-phones">
    <app-phone
      v-for="phone in filteredPhones"
      :key="phone.id"
      :phone="phone"
    ></app-phone>
  </div>
</template>

<script>
import Phone from "./Phone.vue";
export default {
  components: {
    AppPhone: Phone,
  },
  computed: {
    filteredPhones() {
      return this.$store.getters.getFilteredPhones;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_allPhones.scss";
</style>
