<template>
    <div>
        
    </div>
</template>
<script>
import DetailitemVue from './Detailitem.vue'
import {getgoods} from '../api/goods-api'
export default {
    components:{
        DetailitemVue
    },
    data() {
        return {
             goods:[],
        }
    },
    methods:{
          //网络请求
      getgoods(){
        getgoods().then(res => {
          
          this.goods = res.data
        })
      },
    },
    created(){
        this.getgoods()
    },
}
</script>
<style lang="less" scoped>
    
</style>