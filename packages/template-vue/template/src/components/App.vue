<template>
  <div id="app">
    <h1>Hello, {{ time }}</h1>
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
</style>
