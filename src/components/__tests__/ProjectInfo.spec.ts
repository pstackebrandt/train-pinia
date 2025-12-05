import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProjectInfo from '../ProjectInfo.vue'

describe('ProjectInfo', () => {
  it('renders properly', () => {
    const wrapper = mount(ProjectInfo)
    expect(wrapper.text()).toContain('Train Pinia')
    expect(wrapper.text()).toContain('learning project')
    expect(wrapper.text()).toContain('Pinia')
  })

  it('displays tech stack', () => {
    const wrapper = mount(ProjectInfo)
    expect(wrapper.text()).toContain('Vue 3')
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('Vite')
  })

  it('displays all technologies in tech stack', () => {
    const wrapper = mount(ProjectInfo)
    expect(wrapper.text()).toContain('ESLint')
    expect(wrapper.text()).toContain('Prettier')
  })
})

