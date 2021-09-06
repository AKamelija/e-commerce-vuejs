<template>
  <div class="stepper-wrapper">
    <div class="stepper-item" v-for="(step, index) in steps" :key="index">
      <div class="step-counter">{{ step.label }}</div>
      <div class="step-name">{{ step.name }}</div>
    </div>
    <!-- <div class="stepper-item completed">
      <div class="step-counter">1</div>
      <div class="step-name">Phone name</div>
    </div>
    <div class="stepper-item completed">
      <div class="step-counter">2</div>
      <div class="step-name">Phone stats</div>
    </div>
    <div class="stepper-item active">
      <div class="step-counter">3</div>
      <div class="step-name">Preview</div>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/components/_stepper.scss";
</style>

<script>
export default {
  props: ["currentStep"],
  data() {
    return {
      current: this.currentStep,
      steps: [
        { label: "1", name: "Phone name" },
        { label: "2", name: "Phone stats" },
        { label: "3", name: "Preview" },
      ],
    };
  },
  methods: {},
};
</script>
