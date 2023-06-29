<template>
  <MainRightSection>
    <div class="formMainWrapper">
      <div class="formWrapper">
        <h1>Hey there! What brings you here?</h1>
        <p class="subtitle">This will help us make great recommendations.</p>

        <div class="buttons">
          <div v-for="button in buttons" :key="button.id">
            <ButtonComponent
              :text="button.text"
              :type="button.active ? 'normal' : 'outline'"
              :text-color="button.textColor"
              :bgColor="button.bgColor"
              :radius="20"
            >
              <template #icon>
                <span class="iconSize">+</span>
              </template>
            </ButtonComponent>
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
import ButtonComponent from "../ButtonComponent.vue";

const store = useStore();

const buttons = ref([
  {
    id: "1",
    text: "Social Interaction",
    textColor: "white",
    color: "#DF9BE0",
    bgColor: "#0267ff",
    hasIcon: true,
    active: true,
  },
  {
    id: "2",
    text: "Personal development",
    textColor: "grey",
    color: "#DF9BE0",
    hasIcon: true,
    active: false,
  },
  {
    id: "3",
    text: "Entertainment and Fun",
    textColor: "grey",
    color: "#DF9BE0",
    hasIcon: true,
    active: false,
  },
  {
    id: "4",
    text: "Rewards and recognition",
    textColor: "grey",
    color: "#DF9BE0",
    hasIcon: true,
    active: false,
  },
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

    .subtitle {
      margin: 18px 0;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;

      .iconSize {
        font-size: 26px;
      }
    }

    .buttonWrapper {
      margin-top: 7rem;
    }
  }
}
</style>
