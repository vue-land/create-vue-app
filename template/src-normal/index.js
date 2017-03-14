import Vue from 'vue'
// @ is the path to `./src` folder
import App from '@/components/App'
<% if (pwa) { %>
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}
<% } %>
new Vue({
  el: '#app',
  render: h => h(App)
})
