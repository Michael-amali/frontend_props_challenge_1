<template>
  <div class="card">
    <h2>{{ props?.cardTitle }}</h2>
    <button class="button">
      <span>{{ props?.isAdded ? "Added" : "Add" }}</span>
      <ArrowLeft v-show="props?.isAdded" :size="16" class="symbol" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import ArrowLeft from "vue-material-design-icons/Check.vue";

const props = defineProps({
  cardTitle: String,
  isAdded: Boolean,
  cardColor: String,
});

const bgCardColor = computed(() => {
  return props?.cardColor;
});
</script>

<style lang="scss" scoped>
.card {
  width: 100px;
  height: 100px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: v-bind(bgCardColor);
  border-radius: 6px;

  .button {
    padding: 2px 12px;
    outline: none;
    border-radius: 4px;
    height: 32px;
    border: 1px solid #b3b3b3;
    color: black;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    .symbol {
      margin-left: 12px;
    }
  }
}
</style>
