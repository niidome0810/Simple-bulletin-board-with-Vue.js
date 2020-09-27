<template>
  <div id="app">
    <Form></Form>
    <Post></Post>
  </div>
</template>

<script>
import Form from './components/form.vue'
import Post from './components/post.vue'

export default {
  name: 'App',
  components: {
    Form,
    Post,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #586775;
  margin-top: 60px;
}
</style>
