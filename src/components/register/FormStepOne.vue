<template>
  <MainRightSection>
    <div class="formMainWrapper">
      <div class="formWrapper">
        <h1>Create Account</h1>
        <div class="inputWrapper">
          <label for="name">Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div class="inputWrapper">
          <label for="email">E-mail</label>
          <input type="text" placeholder="johndoe@gmail.com" />
        </div>
        <div class="inputWrapper">
          <label for="name">Password</label>
          <input type="text" placeholder="*********" />
        </div>
        <div class="buttons">
          <ButtonComponent
            @press="moveToNextStep"
            text="Create Account"
            type="normal"
            text-color="white"
            bgColor="#0267ff"
            :radius="4"
          />

          <ButtonComponent
            @press="moveToNextStep"
            text="Sign up with Google"
            type="outline"
            text-color="grey"
            bgColor="#0267ff"
            :radius="4"
          >
            <template #icon>
              <span class="iconWrapper">
                <img
                  width="20"
                  :src="require('../../assets/images/googleIcon.png')"
                  alt=""
                />
              </span>
            </template>
          </ButtonComponent>
        </div>
        <div class="accountExistWrapper">
          <span>Already have an account ?</span>
          <span>Log in</span>
        </div>
      </div>
    </div>
  </MainRightSection>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import MainRightSection from "../../components/register/MainRightSection.vue";
import ButtonComponent from "../ButtonComponent.vue";

const store = useStore();

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
    .inputWrapper {
      display: flex;
      flex-direction: column;
      margin: 28px 0;

      input {
        padding: 8px;
      }
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 28px;

      .iconWrapper {
        margin-left: -68px;
        margin-right: 20px;
      }
    }

    .accountExistWrapper {
      margin-top: 28px;
      text-align: center;

      span:first-child {
        margin-right: 4px;
        color: #a6a6a6;
      }
      span:last-child {
        color: #0267ff;
      }
    }
  }
}
</style>
