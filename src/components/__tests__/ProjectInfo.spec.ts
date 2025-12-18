import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProjectInfo from '../ProjectInfo.vue'
import i18n from '../../i18n'

describe('ProjectInfo', () => {
  it('renders properly', () => {
    const wrapper = mount(ProjectInfo, {
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.text()).toContain('Train Pinia')
    expect(wrapper.text()).toContain('learning project')
    expect(wrapper.text()).toContain('Pinia')
  })

  it('displays tech stack', () => {
    const wrapper = mount(ProjectInfo, {
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.text()).toContain('Vue 3')
    expect(wrapper.text()).toContain('TypeScript')
    expect(wrapper.text()).toContain('Vite')
  })

  it('displays all technologies in tech stack', () => {
    const wrapper = mount(ProjectInfo, {
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.text()).toContain('ESLint')
    expect(wrapper.text()).toContain('Prettier')
  })

  it('renders translated content in German', async () => {
    i18n.global.locale.value = 'de'
    const wrapper = mount(ProjectInfo, {
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.text()).toContain('Train Pinia')
    expect(wrapper.text()).toContain('Lernprojekt')
    expect(wrapper.text()).toContain('Verwendete Technologien')
    i18n.global.locale.value = 'en'
  })
})
