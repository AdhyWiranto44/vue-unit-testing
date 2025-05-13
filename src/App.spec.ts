import { flushPromises, mount } from "@vue/test-utils";
import waitForExpect from 'wait-for-expect'
import { describe, expect, test } from "vitest";
import App from "./App.vue";

// test('Display page title', () => {
//   const wrapper = mount(App)
//   expect(wrapper.find('h1').text()).toBe('Testing for CPD Unit Testing')
// })

describe('Form Input', () => {
  test('Empty value for field Website URL', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('[data-testid=website]')
    await input.setValue('')
    await input.trigger('blur')
    await flushPromises()

    await waitForExpect(() => {
      const errorMessage = wrapper.find('[data-testid=website-error]')
      expect(errorMessage.text()).toContain('required')
    })
  }, 1000000)

  test('Invalid input format for field Website URL', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('[data-testid=website]')
    await input.setValue('abc')
    await input.trigger('blur')
    await flushPromises()

    await waitForExpect(() => {
      const errorMessage = wrapper.find('[data-testid=website-error]')
      expect(errorMessage.text()).toContain('valid')
    })
  }, 1000000)

  test('Empty value for field Organization Name', async () => {
    const wrapper = mount(App)
    const input = wrapper.find('[data-testid=organization-name]')
    await input.setValue('')
    await input.trigger('blur')
    await flushPromises()

    await waitForExpect(() => {
      const errorMessage = wrapper.find('[data-testid=organization-name-error]')
      expect(errorMessage.text()).toContain('required')
    })
  }, 1000000)

})
