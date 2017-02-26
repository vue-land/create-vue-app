<template>
  <div id="app">
    <section :class="$style.welcome">
      <h1 :class="$style.title"><img src="https://vuejs.org/images/logo.png" width="80" alt=""></h1>
    </section>
    <section :class="$style.tip">
      <p>For more usages please open README.md in your project.</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html, body, #app {
    height: 100%;
  }
  body {
    background-color: #f9f9f9;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
</style>

<!-- you can use css modules but it's not necessary -->
<style module>
  .welcome {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
  }
  .welcome:after {
    content: '';
    height: 3px;
    background-color: #fff;
    display: block;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .title {
    margin: 0;
    font-size: 60px;
    color: #4fc08d;
    text-shadow: 0 0 1px #ccc;
    display: flex;
    align-items: center;
  }
  .title img {
    margin: 0 20px;
  }
  .tip {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    font-size: 30px;
    color: #808087;
  }
</style>
