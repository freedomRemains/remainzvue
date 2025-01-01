<template>

<!-- 次のコードを有効にすると、vue.jsデフォルトのページを表示できる。
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
-->

  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/top">Top Page</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// 次のコードを有効にすると、vue.jsデフォルトのページを表示できる。
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

// 次のコードを有効にすると、vue.jsデフォルトのページを表示できる。
//  components: {
//    HelloWorld
//  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}
</style>
