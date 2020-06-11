<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/Navigation.vue'
export default {
  components:{
    Navigation
  }
}
</script>

<style>
html,body{
  padding: 0px;
  margin: 0px;
  height: 100%;
  background-color: #1E1E1E;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

a,p,h3{
  font-weight: bold;
  color: grey;
}
#navigation.router-link-active{
  color: white;
}
/*#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
