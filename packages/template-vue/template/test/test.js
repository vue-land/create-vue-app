import test from 'ava'
import Vue from 'vue'
import App from '../src/components/App.vue'

test('renders', t => {
	const vm = new Vue(App).$mount()
	const tree = {
		$el: vm.$el.outerHTML
	}
	t.snapshot(tree)
})
