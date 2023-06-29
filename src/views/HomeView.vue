<template>
  <div class="home">
    <span @click="goToRegisterPage">Start Registration</span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToRegisterPage = () => {
  router.push("/register");
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  justify-content: center;

  span {
    margin-top: 50px;
    font-size: 40px;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
