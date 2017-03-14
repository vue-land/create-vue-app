import Vue from 'vue'
import App from '@/components/App'

describe('App', () => {
  it('has expected content', () => {
    const vm = new Vue(App).$mount()
    expect(vm.$el.textContent.indexOf('For more usages') > -1).toBe(true)
  })
})
