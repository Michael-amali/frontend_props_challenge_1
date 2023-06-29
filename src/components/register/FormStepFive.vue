<template>
  <div class="formMainWrapper">
    <div class="formWrapper">
      <h1>Woohoo!</h1>
      <p class="subtitle">
        Hey there! Your registration is complete, get excited for the ultimate
        quiz experiences of your life. Lets's do this!
      </p>

      <div class="imageWrapper">
        <img
          width="320"
          :src="require('../../assets/images/celebrate.png')"
          alt=""
        />
      </div>

      <div class="buttonWrapper">
        <ButtonComponent
          @press="goToStartPage"
          text="Continue"
          type="normal"
          text-color="white"
          bgColor="#0267ff"
          :radius="4"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ButtonComponent from "../ButtonComponent.vue";

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

const goToStartPage = () => {
  router.push("/");
  resetForm();
};

const resetForm = () => {
  stepNumber.value = 1;
};
</script>

<style lang="scss" scoped>
.formMainWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .formWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 60%;

    .subtitle {
      margin: 18px 0;
    }

    .imageWrapper {
      min-height: 300px;
    }
    .buttonWrapper {
      margin-top: 3rem;
    }
  }
}
</style>
