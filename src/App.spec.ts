import { flushPromises, mount } from "@vue/test-utils";
import waitForExpect from 'wait-for-expect'
import { expect, test } from "vitest";
import App from "./App.vue";

// test('Display page title', () => {
//   const wrapper = mount(App)
//   expect(wrapper.find('h1').text()).toBe('Testing for CPD Unit Testing')
// })

test('Invalid input format for field Website URL', async () => {
  const wrapper = mount(App)
  // const input = wrapper.find('[data-testid=website]')
  const oInputWrapper = wrapper.findComponent({ name: 'OInput' })
  const input = oInputWrapper.find('input')
  // console.log(input.html())
  await input.setValue('abc')
  await input.trigger('blur')
  await flushPromises()

  await waitForExpect(() => {
    const errorMessage = wrapper.find('[data-testid=website-error]')
    expect(errorMessage.text()).toContain('valid')
  })
}, 1000000)