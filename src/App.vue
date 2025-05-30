<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-8 text-blue-600">
      Testing for CPD Unit Testing
    </h1>
    <div class="flex flex-col gap-4">
      <Field
        name="websiteUrl"
        rules="required|URL"
        v-model="formData.website"
        v-slot="{ handleChange, errorMessage }"
      >
        <div class="flex flex-col gap-1">
          <o-field>
            <template #label>
              <FieldLabel
                label="Website URL"
                dataTestId="website-error"
                :errorMessage="errorMessage"
              />
              <o-input
                :value="formData.website"
                @update:modelValue="handleChange"
                type="text"
                data-testid="website"
              />
            </template>
          </o-field>
        </div>
      </Field>
      <!-- <Field
        name="organizationName"
        rules="required"
        v-model="formData.organizationName"
        v-slot="{ handleChange, errorMessage }"
      >
        <div class="flex flex-col gap-4">
          <label class="font-bold" for="">Organization Name</label>
          <o-input
            :value="formData.organizationName"
            @update:modelValue="handleChange"
            type="text"
            data-testid="organization-name"
          />
          <span class="text-red-500" data-testid="organization-name-error">{{
            errorMessage
          }}</span>
        </div>
      </Field> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineRule, Field } from "vee-validate";
import { ref, type Ref } from "vue";
import { OInput, OField } from "@oruga-ui/oruga-next";
import FieldLabel from "./components/FieldLabel.vue";

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

const formData: Ref<{
  organizationName: string;
  website: string;
}> = ref({
  organizationName: "",
  website: "",
});
</script>
