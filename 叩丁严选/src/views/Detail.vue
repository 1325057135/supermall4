<template>
  <div>
    <NavView :is-show="false"></NavView>
    <Detailitem :id = this.id></Detailitem>
  </div>
</template>

<script>

import NavView from '../components/Nav.vue'
import Detail from '../views/Detail.vue'
import Detailitem from './Detailitem.vue'
export default {
  data () {
    return {
     
      id: null,
     
    }
  },
  components:{
    NavView,
    Detail,
    Detailitem
},
  created () {
    //1.保存传入的id
      this.id = this.$route.params.id
      
      
    
  }
}
</script>

<style>

</style>