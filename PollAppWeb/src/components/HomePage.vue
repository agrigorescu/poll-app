<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links </h2>
    <ul>
      <li>
        <router-link to="/poll/add"> Add Poll page</router-link>
      </li>
      <li>
        <router-link to="/poll/answer"> Answer Poll page</router-link>
      </li>
      <li>
        <router-link to="/poll/results"> Poll Results page</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
