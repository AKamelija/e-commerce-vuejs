<template>
  <div class="cart-wrapper">
    <h1 v-if="show">The cart is empty!</h1>
    <div class="inventory" v-else v-for="item in cartItem" :key="item.id">
      <div class="inventory-item">
        <p class="inventory-item--name">{{ item.name }}</p>
        <p class="inventory-item--qty">{{ item.quantity }}</p>
        <p class="inventory-item--price">${{ item.price }}</p>
      </div>
      <div class="remove-item">
        <button @click="remove(item.id)" class="removeBtn">X</button>
      </div>
    </div>
    <hr />
    <div class="underLine">
      <div class="inventory-total" v-if="!show">
        <p>Total:</p>
        <p>${{ totalPrize }}</p>
      </div>
      <div class="cart-payment" v-if="!show">
        <button class="buyCart">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItem() {
      return this.$store.getters.getCartItems;
    },
    totalPrize() {
      return this.$store.getters.total;
    },
    show() {
      return this.cartItem.length === 0;
    },
  },
  methods: {
    remove(item) {
      console.log(this.cartItem);
      this.$store.dispatch("remove", item);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_cart.scss";
</style>
