<template>
  <MainRightSection>
    <div class="formMainWrapper">
      <div class="formWrapper">
        <h1>Let's get started by picking some interests</h1>
        <p class="subtitle">
          Alright, let's pick something we're interested in and get started.
        </p>

        <div class="cards">
          <div v-for="card in cards" :key="card.id">
            <InterestCard
              :card-title="card.title"
              :card-color="card.color"
              :is-added="card.isAdded"
            />
          </div>
        </div>

        <div class="buttonWrapper">
          <ButtonComponent
            @press="moveToNextStep"
            text="Continue"
            type="normal"
            text-color="white"
            bgColor="#0267ff"
            :radius="4"
          />
        </div>
      </div>
    </div>
  </MainRightSection>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import MainRightSection from "../../components/register/MainRightSection.vue";
import InterestCard from "../InterestCard.vue";
import ButtonComponent from "../ButtonComponent.vue";

const store = useStore();

const cards = ref([
  { id: "1", title: "Gaming", color: "#DF9BE0", isAdded: true },
  { id: "2", title: "Fashion", color: "#CCFFCC", isAdded: false },
  { id: "3", title: "Music", color: "#FFC299", isAdded: false },
  { id: "4", title: "Reading", color: "#2575D1", isAdded: false },
]);

const stepNumber = computed({
  get() {
    return store.state.auth.stepNumber;
  },
  set(value) {
    store.dispatch("auth/setStepNumber", value);
  },
});

const moveToNextStep = () => {
  stepNumber.value++;
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

    .cards {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      width: 90%;
    }

    .buttonWrapper {
      margin-top: 2.3rem;
    }
  }
}
</style>
