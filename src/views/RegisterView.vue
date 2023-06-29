<template>
  <div class="register">
    <div class="left">
      <img :src="require(`../assets/images/step-${stepNumber}.png`)" alt="" />
    </div>
    <div class="right">
      <FormStepOne v-if="stepNumber == 1" />
      <FormStepTwo v-if="stepNumber == 2" />
      <FormStepThree v-if="stepNumber == 3" />
      <FormStepFour v-if="stepNumber == 4" />
      <FormStepFive v-if="stepNumber == 5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import FormStepOne from "../components/register/FormStepOne.vue";
import FormStepTwo from "../components/register/FormStepTwo.vue";
import FormStepThree from "../components/register/FormStepThree.vue";
import FormStepFour from "../components/register/FormStepFour.vue";
import FormStepFive from "../components/register/FormStepFive.vue";

const store = useStore();

const stepNumber = computed(() => {
  return store.state.auth.stepNumber;
});
</script>

<style lang="scss" scoped>
.register {
  height: 100%;
  width: 100%;
  display: flex;
}

.left {
  width: 100%;
  background-color: #0267ff;

  img {
    width: auto;
    height: 100vh;
  }
}

.right {
  width: 100%;
  padding: 32px;
}
</style>
