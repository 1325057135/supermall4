<template>
    <div>
    <HeadreVue></HeadreVue>
    <NavView :is-show="false" > 
    </NavView> 
    <div class="moreGoods-content">
         <div class="moreGoods-content-title">
             <a href="index.html" target="_blank">首页</a> /
             <span class="currentType">全部礼品</span>
         </div>
         <div class="moreGoods-content-banner">
             <div class="banner-content">
                 <img src="../assets/img/banner.4c6b6225.png" alt="">
             </div>
             <!-- 礼品分类  -->
             <div class="commodity-type">
                 <!--  排序  -->
                 <div class="more-commodity commodity-sort">
                     <label>排序: </label>
                     <ul  v-for="(item, index) in option1"
                        :key="index"
                        :class="sortIndex == index ? 'active' : ''"
                        @click="clackSortHandle(index)">
                         {{item.txt}}
                     </ul>
                 </div>
                 <div class="more-commodity commodity-genre">
                     <label>分类: </label>
                     <ul  v-for="(item, index) in option2"
                        :key="index"
                        :class="classifyIndex == index ? 'active' : ''"
                        @click="clickClassifyHandle(index)">
                         {{item.txt}}
                     </ul>
                 </div>

             </div>
         </div>
         <!--  礼品展示页码值  -->
         <div class="commodity-list">
             <ul class="flow-default current-list" id="currentCommodity">
                <li class="commodity-data" v-for="item in goods" @click="goodsdetail(item.id)">
                        <div class="commodity-data-flex">
                         <div class="commodityImg">
                        <img :src="imgurl+item.coverImg" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">{{item.name}}</p>
                        </div>
                         <div class="commodity-num">
                             <span>{{item.coin}}</span>
                              <div class="monadImg">
                                  <img src="../assets/img/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" >立即兑换</div>
                        
                        
                        </div>
                </li>
                            
                        
                         
            </ul>
         </div>
     </div>
  </div>
</template>
<script>
import {getgoods} from '../api/goods-api'
import NavView from '../components/Nav.vue'
import HeadreVue from '@/components/Headre.vue'
export default {
    components: {
        NavView,
        HeadreVue
    },
    data() {
        return {
              params: {
                    did: 0,
                    type: 0,
                    min: 0,
                    max: 0,
                    keyword: "",
                    },
            goods:[],
            sortIndex:0,
            classifyIndex:0,
            imgurl:'http://sc.wolfcode.cn',
            option1: [
                { min: 0, max: 100000, txt: "全部" },
                { min: 0, max: 0, txt: "我能兑换的" },
                { min: 0, max: 500, txt: "0-500个" },
                { min: 500, max: 1000, txt: "500-1000个" },
                { min: 1000, max: 1500, txt: "1000-1500个" },
                { min: 1500, max: 2500, txt: "1500-2500个" },
                { min: 2500, max: 6500, txt: "2500-6500个" },
                { min: 6500, max: 10000, txt: "6500-10000个" },
                    ],
                option2: [
                            { type: 0, txt: "全部" },
                            { type: 1, txt: "实物礼品" },
                            { type: 2, txt: "虚拟礼品" },
                            ]}
    },
    methods:{
        goodsdetail(id) {
            this.$router.push('/detail/' + id)
        },
        //网络请求
      getgoods(){
        getgoods(this.params).then(res => {
          
          this.goods = res.data
        })
      },
      clackSortHandle(index){
        console.log(index);
      this.sortIndex = index;
      console.log(this.sortIndex);
      this.params.min = this.option1[index].min;
      this.params.max = this.option1[index].max;
      this.getgoods()
    },
    clickClassifyHandle(index){
      this.classifyIndex = index;
      this.params.type = this.option2[index].type;
      this.getgoods()
    }
    },
    created(){
         if (this.$route.query.keyword) {
      this.params.keyword = this.$route.query.keyword;
    }
    
        this.getgoods()
    },
}
</script>
<style  lang="scss" scoped>

* {
    margin:0;
    padding:0;
    border:none;
    list-style: none;
}
html, body{
    max-width:1920px;
    min-width: 1200px;
    margin:0 auto;
    height:100%;
    background:#f5f5f5;
    font-family: SourceHanSansSC-Light;
}
a {
    text-decoration: none;
    cursor: pointer;
}
a:hover, a:focus {
    text-decoration: none;
}
input:focus, button:focus {
    outline: none;
}
.moreGoods-body {
  min-height:100%;
    display: flex;
    flex-direction: column;
}
.moreGoods-content {
    width: 1200px;
    flex:1;
    margin:0 auto;
    padding:60px 0 49px 0;
    box-sizing: border-box;
}
.moreGoods-content-title {
    color: #999999;
}
.moreGoods-content-title a{
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #999999;
}
.moreGoods-content-title span {
    color: #333333;
    margin-left:3px;
}
.moreGoods-content-banner {
    padding: 20px 0;
    box-sizing: border-box;
}
.banner-content {
    padding-bottom: 8px;
    box-sizing: border-box;
}
.commodity-type {

}
.more-commodity {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    ul {
        padding-left: 15px;
    }
    .active {
        color: #00329B;
    }
}
.more-commodity label {
    font-family: SourceHanSansSC-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #333333;
    padding-right:14px;
    box-sizing: border-box;
}
.more-commodity-ul sort-ul {
    display: flex;
align-items: center;
   color: #999999;
padding: 0 10px;
cursor: pointer;
line-height: 23px;

}

    

.more-commodity-li {
   color: #999999;
padding: 0 10px;
cursor: pointer;
}
/*  礼品列表  */
.current-list {
      zoom:1;
    display: inline-block;
}
.current-list::after {
    content: '';
    display: block;
    height:0;
    clear: both;
}
.commodity-data{
     position: relative;
    float:left;
    margin-right:20px;
    cursor: pointer;
    list-style: none;
}
.commodity-data-flex {
   width: 285px;
    padding-bottom: 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    transition: all .8s ease;
}
.commodity-data-flex .moreGood-img {
    width:100%;
    height:100%;
    display: block;
}
.commodityImg {
    position: relative;
    width: 100%;
    /*height: 2.5rem;*/
}
.commodityStatus {
    position: absolute;
    width: 150px;
    height: 150px;
    color: #fff;
    font-size: 24px;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    margin-top: -75px;
    /* text-align: center; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    justify-content: center;
    /* line-height: 50%; */
    background: rgba(0,0,0,.5);
    border-radius: 50%;
}
.commodity-data:hover .commodity-data-flex {
    transform: translateY(-15px);
    box-shadow: 0px 6px 25px rgba(0, 0, 0, .05);
}

.commodity-data:hover .commodity-change {
    background-color: #0a328e;
    color: #fff;
    border: none;
}
.commodity-data:nth-child(4n) {
    margin:0;
    /*padding:0;*/
}
.commodity-data:nth-of-type(n+5){
    margin-top: 20px;
}
.textParent {
    height: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.commodity-text {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #333333;
    padding:22px 35px 0;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.commodity-num {
    font-family: SourceHanSansSC-Bold;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    padding-top:15px;
    box-sizing: border-box;
    color: #fd604d;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.monadImg {
    width:20px;
    height:20px;
    margin-left:5px;
    display: inline-block;
}
.monadImg img {
    width:100%;
    display: block;
    border:none;
}
.commodity-change {
    width: 100px;
    height: 36px;
    border: solid 1px #0a328e;
    text-align: center;
    line-height: 36px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #0a328e;
    margin-top: 20px;
}
.commodity-fiery, .commodity-newProduct {
    width: 58px;
    height: 58px;
    position: absolute;
    left:0;
    top:0;
}







</style>