<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-8 text-blue-600">
      Testing for CPD Unit Testing
    </h1>
    <Field
      name="websiteUrl"
      rules="required|URL"
      v-model="website"
      v-slot="{ handleChange, errorMessage }"
    >
      <div class="flex flex-col gap-4">
        <label class="font-bold" for="">Website URL</label>
        <o-input
          class="myInput"
          :value="website"
          @update:modelValue="handleChange"
          type="text"
          data-testid="website"
        />
        <!-- <input v-model="website" type="text" data-testid="website" /> -->
        <span class="text-red-500" data-testid="website-error">{{
          errorMessage
        }}</span>
      </div>
    </Field>
  </div>
</template>

<script lang="ts" setup>
import { defineRule, Field } from "vee-validate";
import { ref, type Ref } from "vue";
import { OInput } from "@oruga-ui/oruga-next";

defineRule("required", (value: string) => {
  return value ? true : "This field is required.";
});

defineRule("URL", (value: string) => {
  const WEBSITE_URL =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9\-./?%&=]*)?$/;
  return WEBSITE_URL.test(value)
    ? true
    : "Please enter a valid URL (e.g., http://www.example.com).";
});

const website: Ref<string> = ref("");
</script>
