<template>
  <MainRightSection>
    <div class="formMainWrapper">
      <div class="formWrapper">
        <h1>Add Photo</h1>
        <p>Add a photo so other members know who you are</p>

        <div class="circleWrapper">
          <div class="circle">
            <img
              v-if="!hasUploadedImg"
              width="70"
              :src="require('../../assets/images/addPhoto.png')"
              alt=""
            />
            <img
              v-else
              width="160"
              :src="require('../../assets/images/profileImage.png')"
              alt=""
            />
          </div>
        </div>

        <ButtonComponent
          v-if="!hasUploadedImg"
          @press="uploadImage"
          text="Upload a photo"
          type="normal"
          text-color="white"
          bgColor="#0267ff"
          :radius="4"
        />

        <ButtonComponent
          v-else
          @press="moveToNextStep"
          text="Continue"
          type="normal"
          text-color="white"
          bgColor="#0267ff"
          :radius="4"
        />

        <div v-if="!hasUploadedImg" class="skip cursor">
          <span @click="moveToNextStep">Skip</span>
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

const hasUploadedImg = ref(false);

const stepNumber = computed({
  get() {
    return store.state.auth.stepNumber;
  },
  set(value) {
    store.dispatch("auth/setStepNumber", value);
  },
});

const uploadImage = () => {
  hasUploadedImg.value = true;
};

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

    .circleWrapper {
      margin: 1.5rem 0 10rem;
      .circle {
        width: 130px;
        height: 130px;
        background-color: rgb(218, 215, 215);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          object-fit: cover;
        }
      }
    }

    .skip {
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>
