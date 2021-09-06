<template>
  <teleport to="#modal-filter">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <div
                class="modal-body--elements"
                v-for="brand in brands"
                :key="brand.id"
                :class="brand.name === clicked ? 'green' : ''"
                @click="convert(brand.name)"
              >
                <p>{{ brand.name }}(5)</p>
              </div>
            </slot>
          </div>
          <div class="reset" @click="clear">
            <p>Clear</p>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                X
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    brands() {
      return this.$store.getters.getBrands;
    },
    clicked() {
      return this.$store.getters.getClicked;
    },
  },
  methods: {
    convert(id) {
      this.clicked = id;
      this.$store.dispatch("clicked", id);
      console.log(this.clicked);
    },
    clear() {
      this.$store.dispatch("clear");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_modal.scss";
</style>
