<template>
  <label class="font-bold" for="">{{ label }}</label>
  <span class="text-red-500" :data-testid="dataTestId">{{ errorMessage }}</span>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
  dataTestId: {
    type: String,
    default: "",
  },
});
</script>
