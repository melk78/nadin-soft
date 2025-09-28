import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import HelloWorld from '../HelloWorld.vue'

const vuetify = createVuetify({
  components,
  directives
})

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
