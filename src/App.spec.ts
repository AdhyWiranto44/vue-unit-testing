import { flushPromises, mount } from "@vue/test-utils";
import waitForExpect from 'wait-for-expect'
import { describe, expect, test, vi } from "vitest";
import App from "./App.vue";

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

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

  // test('Empty value for field Organization Name', async () => {
  //   const wrapper = mount(App)
  //   const input = wrapper.find('[data-testid=organization-name]')
  //   await input.setValue('')
  //   await input.trigger('blur')
  //   await flushPromises()

  //   await waitForExpect(() => {
  //     const errorMessage = wrapper.find('[data-testid=organization-name-error]')
  //     expect(errorMessage.text()).toContain('required')
  //   })
  // }, 1000000)

})
