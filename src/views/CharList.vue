<template>
  <div>
    <ul>
      <li v-for="(item,index) in filteredHeros" :key='item.id'>
        <router-link :to="{name:'Character', params:{id: index}}">
          <img :src="item.thumbnail.path+'.'+ item.thumbnail.extension" alt="" width=120px height=120px>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';

export default {
  name: 'CharacterList',
  data(){
    return{
    }
  },
  computed: {
    ...mapState([
      'characters',
      'toto',
      'tutu'
    ]),
    ...mapGetters([
      'filteredHeros'
    ]),
    ...mapActions([
      'getData'
    ])
  },
  methods:{
    
  },
  created(){
    this.filteredHeros ? null : this.getData
  }
}
</script>

<style lang=scss scoped>
ul{
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 15px;
  li{
    list-style-type: none;
      img{
        border-radius: 5%;
        transition: all 0.2s ease-in-out;
      }
      &:hover{
        transform: scale(1.1); 
      }
  }
}
p{
  color: red;
}
</style>