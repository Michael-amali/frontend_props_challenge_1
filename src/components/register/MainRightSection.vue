<template>
  <div class="wrapper">
    <div class="header" v-if="stepNumber < 5">
      <div
        :class="{ hideBack: stepNumber == 1 }"
        class="cursor"
        @click="moveToPreviousStep"
      >
        <div class="backWrapper"><ArrowLeft :size="16" /> Back</div>
      </div>
      <span>Step {{ stepNumber }} of 4</span>
      <span @click="exitScreen" class="cursor">Exit</span>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";

const router = useRouter();
const store = useStore();

const stepNumber = computed({
  get() {
    return store.state.auth.stepNumber;
  },
  set(value) {
    store.dispatch("auth/setStepNumber", value);
  },
});

const moveToPreviousStep = () => {
  stepNumber.value--;
};

const exitScreen = () => {
  stepNumber.value = 1;
  router.push("/");
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;

  .header {
    display: flex;
    justify-content: space-between;

    .hideBack {
      display: none;
    }

    .backWrapper {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
}
</style>
