<template>
  <div id="app">
    <div class="banner">
      <img
        src="https://vuejs.org/images/logo.png"
        width="300"
        alt="vue"
      />
      <h1>Hello, {{ time }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {time: new Date().toLocaleString()}
    },
    created() {
      setInterval(() => {
        this.time = new Date().toLocaleString()
      }, 1000)
    }
  }
</script>

<style scoped>
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #app h1 {
    color: red;
  }

  .banner {
    height: 50%;
  }

  .bottom {
    height: 50%;
  }
</style>
