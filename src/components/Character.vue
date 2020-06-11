<template>
  <div class="container">
    <img class="items" :src="getHeroStore.thumbnail.path+'.'+getHeroStore.thumbnail.extension" width=300 height=300>
    <div class="items">
      <h1>{{getHeroStore.name}}</h1>
      <p>{{getHeroStore.description}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Character',
  props: ['id'],
  computed:{
    ...mapGetters([
      'getHero'
    ]),
     getHeroStore(){
       return this.getHero(this.id)
      //return this.$store.getters.getHero(this.id)
    }
  },
}
</script>

<style lang='scss' scoped>

$font-stack:    Helvetica, sans-serif;
$primary-color: #7e7777;

.container{
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
}
h1{
  color: white;
}
p{
  color: $primary-color;
  text-align: justify;
  text-justify: inter-word;
  padding-right: 10px;

}
.items{
  place-self: center;
}

</style>