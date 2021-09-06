<template>
  <div class="phone">
    <img class="phone-img" src="../assets/images/telephone.png" alt="phone" />
    <div class="phone-np">
      <p class="same phone-name">{{ phone.name }}</p>
      <p class="same phone-price">${{ phone.price }}</p>
    </div>
    <p class="same phone-info">{{ phone.info }}</p>
    <div class="buttons">
      <button class="addBtn" @click.prevent="addToCart">Add</button>
      <button class="more-info-btn" @click="selected(phone.id)">
        <router-link to="/moreInfo">More</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["phone"],
  computed: {
    selectedPhone() {
      return this.$store.getters.getSelectedPhone;
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("add", this.phone);
    },
    selected(id) {
      this.$store.dispatch("selected", id);
      console.log(this.selectedPhone);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_phone.scss";
</style>
