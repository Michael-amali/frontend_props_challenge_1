<template>
  <button :class="buttonType" @click="emits('press')">
    <slot name="icon"></slot>
    <span>{{ props?.text }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const emits = defineEmits(["press"]);

const props = defineProps({
  text: String,
  hasIcon: {
    type: Boolean,
    default: false,
  },
  bgColor: String,
  textColor: String,
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 40,
  },
  type: {
    type: String,
    default: "normal", // possible types -  outline, normal
  },
  radius: {
    type: Number,
    default: 4,
  },
});

const outlineClass = "button transparent cursor";
const normalClass = "button cursor";

const buttonType = computed(() => {
  if (props?.type == "outline") {
    return outlineClass;
  } else {
    return normalClass;
  }
});

const buttonTextColor = computed(() => {
  return props?.textColor;
});

const buttonOulineColor = computed(() => {
  return buttonTextColor.value;
});

const buttonBgColor = computed(() => {
  return props?.bgColor;
});

const buttonHeight = computed(() => {
  return props?.height + "px";
});

const buttonWidth = computed(() => {
  return props?.width + "px";
});

const buttonRadius = computed(() => {
  return props?.radius + "px";
});
</script>

<style lang="scss" scoped>
.button {
  background: v-bind(buttonBgColor) !important;
  padding: 14px 8px;
  outline: none;
  height: v-bind(buttonHeight) !important;
  border: none;
  color: v-bind(buttonTextColor) !important;
  width: v-bind(buttonWidth) !important;
  border-radius: v-bind(buttonRadius) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &.transparent {
    border: 1px solid v-bind(buttonOulineColor) !important;
    color: v-bind(buttonTextColor) !important;
    background-color: transparent !important;
  }
}
</style>
