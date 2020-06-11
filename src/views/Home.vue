<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CharList/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import CharList from '@/views/CharList.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    CharList
  }
}
</script>
<style lang=scss scoped>
img{
  margin-top: 70px;
}
</style>
