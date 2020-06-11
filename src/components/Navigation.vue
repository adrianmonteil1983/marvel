<template>
  <div id="navigation">
    <h1>MAR<span><img alt="Vue logo" src="../assets/logo.png" height="25px" width="30px"></span>EL</h1>
    <div id="link">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
//import router from '../router';
export default {
 
}
</script>

<style lang=scss scoped>
#navigation{
  height: 50px;
  width: 100%;
  background-color: #007652;
  display: flex;
  position: fixed;
}
h1{
  color: white;
  margin: auto;
  img{
    margin: 0;
    padding: 0;
  }

}
#link{
  position: absolute;
  right: 0px;
  top: 10px;
  padding-right: 5px;
  color: white;
  a{
    color: white;
  }
}
</style>