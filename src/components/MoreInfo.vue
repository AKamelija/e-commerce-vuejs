<template>
  <div class="wrapper">
    <div class="info-wrapper">
      <div class="info-phone">
        <img
          class="phone-img"
          src="../assets/images/telephone.png"
          alt="phone"
        />
        <div class="info-phone-title">
          <p>{{ selectedPhone.name }}</p>
          <p>${{ selectedPhone.price }}</p>
        </div>
        <p>{{ selectedPhone.desc }}</p>
      </div>
      <div class="details-phone">
        <h1>Phone Details</h1>
        <div class="form-control">
          <p>Brand</p>
          <p>{{ selectedPhone.brand }}</p>
        </div>
        <div class="form-control">
          <p>Size</p>
          <p>{{ selectedPhone.size }}</p>
        </div>
        <div class="form-control">
          <p>Resolution</p>
          <p>{{ selectedPhone.resolution }}</p>
        </div>
        <div class="form-control">
          <p>GPU</p>
          <p>{{ selectedPhone.gpu }}</p>
        </div>
        <div class="form-control">
          <p>CPU</p>
          <p>{{ selectedPhone.cpu }}</p>
        </div>
        <div class="form-control">
          <p>Camera</p>
          <p>{{ selectedPhone.camera }}</p>
        </div>
        <div class="form-control">
          <p>Battery</p>
          <p>{{ selectedPhone.battery }}</p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button class="backBtn">
        <router-link to="/phones">Back to store</router-link>
      </button>
      <button class="addBtn" @click.prevent="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selected() {
      return this.$store.getters.getSelectedPhone;
    },
    phones() {
      return this.$store.getters.getPhones;
    },
    selectedPhone() {
      let result = {};
      this.phones.forEach((el) => {
        console.log(this.selected);
        if (el.id === this.selected) {
          result = {
            id: el.id,
            name: el.name,
            price: el.price,
            desc: el.info,
            brand: el.brand,
            size: el.size,
            resolution: el.resolution,
            gpu: el.gpu,
            cpu: el.cpu,
            camera: el.camera,
            battery: el.battery,
          };
        }
      });
      return result;
    },
  },
  methods: {
    addToCart() {
      this.phones.forEach((el) => {
        if (el.id === this.selected) {
          this.$store.dispatch("add", el);
        }
      });
      console.log(this.selectedPhone);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_moreInfo.scss";
</style>
