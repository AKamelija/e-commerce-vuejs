<template>
  <div class="wrapper">
    <div class="container">
      <div class="stepper-wrapper">
        <div
          class="stepper-item"
          v-for="(step, index) in steps"
          :key="index"
          :class="stepClasses(index)"
        >
          <div class="step-counter">
            {{ step.label }}
          </div>
          <div class="step-name">{{ step.name }}</div>
        </div>
      </div>

      <form action="#">
        <div class="first" v-if="currentStep === 0">
          <div class="title1">Phone Name and Description</div>
          <div class="form-control" :class="{ invalid: !brand.isValid }">
            <input
              type="text"
              id="brand"
              placeholder="Phone brand*"
              v-model="brand.val"
              @blur="clearValidation('brand')"
            />
          </div>
          <p v-if="!brand.isValid" class="invalid-msg">
            Brand must not be empty.
          </p>
          <div class="form-control form-control2" :class="invalidStyle">
            <input
              type="text"
              id="name"
              placeholder="Phone name*"
              v-model="name.val"
              @blur="clearValidation('name')"
            />
            <input
              type="number"
              id="price"
              placeholder="Phone price*"
              v-model="price.val"
              @blur="clearValidation('price')"
            />
          </div>
          <p v-if="!name.isValid && !price.isValid" class="invalid-msg">
            Name & Price must not be empty.
          </p>
          <div class="form-control" :class="{ invalid: !desc.isValid }">
            <textarea
              id="desc"
              cols="22"
              rows="7"
              placeholder="Phone description*"
              v-model="desc.val"
              @blur="clearValidation('desc')"
            ></textarea>
          </div>
          <p v-if="!desc.isValid" class="invalid-msg">
            Description must not be empty.
          </p>
          <button class="next-btn" @click.prevent="next">
            Next
          </button>
        </div>
        <div class="second" v-if="currentStep === 1">
          <div class="title2">Phone Stats and Size</div>
          <div
            class="form-control form-control2"
            :class="{
              invalid:
                (!size.isValid && !camera.isValid) ||
                size.val === '' ||
                camera.val === '',
            }"
          >
            <input
              type="number"
              id="size"
              placeholder="Phone size*"
              v-model="size.val"
              @blur="clearValidation('size')"
            />
            <input
              type="number"
              id="camera"
              placeholder="Phone camera*"
              v-model="camera.val"
              @blur="clearValidation('camera')"
            />
          </div>
          <p v-if="!size.isValid && !camera.isValid" class="invalid-msg">
            Size and Camera must be greater than 0.
          </p>
          <div class="form-control" :class="{ invalid: !resolution.isValid }">
            <input
              type="number"
              id="resolution"
              placeholder="Phone resolution*"
              v-model="resolution.val"
              @blur="clearValidation('resolution')"
            />
          </div>
          <p v-if="!resolution.isValid" class="invalid-msg">
            Resolution must be greater than 0.
          </p>
          <div class="form-control" :class="{ invalid: !cpu.isValid }">
            <input
              type="number"
              id="cpu"
              placeholder="Phone CPU*"
              v-model="cpu.val"
              @blur="clearValidation('cpu')"
            />
          </div>
          <p v-if="!cpu.isValid" class="invalid-msg">
            CPU must must be greater than 0.
          </p>
          <div
            class="form-control form-control2"
            :class="{ invalid: !gpu.isValid && !battery.isValid }"
          >
            <input
              type="number"
              id="gpu"
              placeholder="Phone GPU*"
              v-model="gpu.val"
              @blur="clearValidation('gpu')"
            />
            <input
              type="number"
              id="battery"
              placeholder="Phone battery*"
              v-model="battery.val"
              @blur="clearValidation('battery')"
            />
          </div>
          <p v-if="!gpu.isValid && !battery.isValid" class="invalid-msg">
            GPU and Battery must be greater than 0.
          </p>
          <div class="buttons">
            <button class="prev-btn" @click="back">Prev</button>
            <button class="next-btn" @click.prevent="next">Next</button>
          </div>
        </div>
        <div class="third" v-if="currentStep === 2">
          <div class="title3">Review your phone</div>
          <div class="preview-info">
            <div class="name-desc">
              <img
                class="phone-img"
                src="../assets/images/telephone.png"
                alt="phone"
              />
              <div class="brand">
                <p>{{ brand.val }}</p>
                <p>{{ name.val }}</p>
              </div>
              <p>${{ price.val }}</p>
              <p>{{ desc.val }}</p>
            </div>
            <div class="stats-size">
              <p class="stat-title">SIZE</p>
              <p>{{ size.val }}</p>
              <p class="stat-title">CAMERA</p>
              <p>{{ camera.val }}</p>
              <p class="stat-title">RESOLUTION</p>
              <p>{{ resolution.val }}</p>
              <p class="stat-title">CPU</p>
              <p>{{ cpu.val }}</p>
              <p class="stat-title">GPU</p>
              <p>{{ gpu.val }}</p>
              <p class="stat-title">BATTERY</p>
              <p>{{ battery.val }}</p>
            </div>
          </div>

          <div class="buttons">
            <button class="prev-btn" @click="back">Prev</button>
            <button class="submit-btn" @click.prevent="submited">
              Submit Phone
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 0,
      steps: [
        { label: "1", name: "Phone name" },
        { label: "2", name: "Phone stats" },
        { label: "3", name: "Preview" },
      ],
      brand: {
        val: "",
        isValid: true,
      },
      name: {
        val: "",
        isValid: true,
      },
      price: {
        val: null,
        isValid: true,
      },
      desc: {
        val: "",
        isValid: true,
      },
      size: {
        val: null,
        isValid: true,
      },
      camera: {
        val: null,
        isValid: true,
      },
      resolution: {
        val: null,
        isValid: true,
      },
      cpu: {
        val: null,
        isValid: true,
      },
      gpu: {
        val: null,
        isValid: true,
      },
      battery: {
        val: null,
        isValid: true,
      },
      isFormValid: true,
    };
  },
  computed: {
    invalidStyle() {
      return {
        invalid:
          (!this.name.isValid && !this.price.isValid) || this.price.val === "",
      };
    },
  },
  methods: {
    stepClasses(id) {
      let result = "";
      if (this.currentStep === id) {
        result = "active";
      }
      if (id < this.currentStep) {
        result = "completed";
      }
      return result;
    },
    next() {
      this.validation();

      if (!this.isFormValid) {
        return;
      }

      this.currentStep++;
    },
    back() {
      this.currentStep--;
    },
    clearValidation(input) {
      if (this[input].val !== "") {
        this[input].isValid = true;
      }
    },
    validation() {
      this.isFormValid = true;

      if (this.currentStep === 0) {
        if (this.brand.val === "") {
          this.isFormValid = false;
          this.brand.isValid = false;
        }
        if (this.name.val === "") {
          this.isFormValid = false;
          this.name.isValid = false;
        }
        if (this.price.val === null || this.price.val === "") {
          this.isFormValid = false;
          this.price.isValid = false;
        }
        if (this.desc.val === "") {
          this.isFormValid = false;
          this.desc.isValid = false;
        }
      } else if (this.currentStep === 1) {
        if (this.size.val === null || this.size.val === "") {
          this.isFormValid = false;
          this.size.isValid = false;
        }
        if (this.camera.val === null || this.camera.val === "") {
          this.isFormValid = false;
          this.camera.isValid = false;
        }
        if (this.resolution.val === null || this.resolution.val === "") {
          this.isFormValid = false;
          this.resolution.isValid = false;
        }
        if (this.cpu.val === null || this.cpu.val === "") {
          this.isFormValid = false;
          this.cpu.isValid = false;
        }
        if (this.gpu.val === null || this.gpu.val === "") {
          this.isFormValid = false;
          this.gpu.isValid = false;
        }
        if (this.battery.val === null || this.battery.val === "") {
          this.isFormValid = false;
          this.battery.isValid = false;
        }
      }
    },
    submited() {
      alert("Submited!");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/components/_addPhone.scss";
</style>
