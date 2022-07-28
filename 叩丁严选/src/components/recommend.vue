<template>
<div class="integralMall-center">
        <div class="commodity-model" id="commodity">
    <div class="commodity-model-header">
        <div class="model-header-left">
            <img src="../assets/img/jingpin.png" alt="">
            <span>精品推荐</span>
        </div>
        <div class="model-header-right">
            <router-link to="/Goods">
                <span>更多</span>
                <img src="../assets/img/arrow.png" alt="">
            </router-link>
        </div>
    </div>
    <div class="commodity-model-center">
        <ul class="current-list" v-for="item in records" @click="itemClick(item.id)">
            <li class="commodity-data">
                <div class="commodity-data-box">
                    <div class="commodityImg" >
                        <img :src="imgurl+item.coverImg" alt="" class="cover-img">
                        
                    </div>
                    <div class="textParent">
                        <p class="commodity-text">{{item.name}}</p>
                    </div>
                    <div class="commodity-num">
                        <span>{{item.coin}}</span>
                        <div class="monadImg">
                            <img src="../assets/img//monad.png" alt="">
                        </div>
                    </div>
                    <div  class="commodity-change">立即兑换</div>
                    
                    <img v-if="item.isHotSale" src="../assets/img/section_hot.png" alt="" class="commodity-fiery">
                    
                </div>
            </li>
            
            
            
            
            
            
        </ul>
    </div>
</div>
        <div class="commodity-model" id="hotForList">
    <div class="commodity-model-header">
        <div class="model-header-left">
            <img src="../assets/img/hot.png" alt="">
            <span>热门兑换</span>
        </div>
        <div class="model-header-right">
            <router-link to="/Goods">
                <span>更多</span>
                <img src="../assets/img/arrow.png" alt="">
            </router-link>
        </div>
    </div>
    <div class="commodity-banner">
        <img src="../assets/img/ad.4c6b6225.png" alt="">
    </div>
    <div class="commodity-model-center">
        <ul class="current-list" >
            
            
            
            <li class="commodity-data" v-for="item in hotrecords"  @click="itemClick(item.id)">
                <div class="commodity-data-box">
                    <div class="commodityImg" >
                        <img :src="imgurl+item.coverImg" alt="" class="cover-img">
                        
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
                    <div  class="commodity-change">立即兑换</div>
                    <img  v-if="item.isHotSale" src="../assets/img/section_hot.png" alt="" class="commodity-fiery">
                </div>
            </li>
            
            
            
           
            
            
            
        </ul>
    </div>
</div>
<div class="integralMall-strategy">
            <div class="commodity-model-header">
                <div class="model-header-left">
                    <img src="../assets/img/score.png" alt="">
                    <span>鸡腿攻略</span>
                </div>
            </div>
            <div class="strategy-content">
                <div class="strategy-list">
                    <a href="personalCenter.html?myOrder=0" target="_blank" hrefid="2">
                        <img src="../assets/img/integral-01.9386d4bf.png" alt="">
                        <div class="strategy-data">
                            <h2>签到得鸡腿</h2>
                            <span class="strategy-btn">去签到</span>
                        </div>
                    </a>
                </div>
                <div class="strategy-list">
                    <a href="buyClass.html" target="_blank">
                        <img src="../assets/img/integral-02.150d92a1.png" alt="">
                        <div class="strategy-data">
                            <h2>购课得鸡腿</h2>
                            <span class="strategy-btn">去购课</span>
                        </div>
                    </a>
                </div>
                <div class="strategy-list">
                    <a href="recommend.html" target="_blank">
                        <img src="../assets/img/integral-03.9870f3f1.png" alt="">
                        <div class="strategy-data">
                            <h2>推荐得鸡腿</h2>
                            <span class="strategy-btn">去推荐</span>
                        </div>
                    </a>
                </div>
                <div class="strategy-list">
                    <a href="taskList.html" target="_blank" hrefid="2">
                        <img src="../assets/img/integral-04.afadcbdf.png" alt="">
                        <div class="strategy-data">
                            <h2>做任务得鸡腿</h2>
                            <span class="strategy-btn">做任务</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
      
    </div>
</template>
<script>
import {getrecommend, gethot} from '../api/home-api.js'
export default {
    data() {
        return {
            imgurl:'http://sc.wolfcode.cn',
            records:[],
            hotrecords: [],
            
            }
    },
    methods:{
        //获取商品id
        itemClick(id) {
            this.$router.push('/detail/' + id)
        },
        //网络请求
      getrecommend(){
        getrecommend().then(res => {
          
          this.records = res.data.data.records;
        })
      },
      gethot(){
        gethot().then(res=>{
          
          this.hotrecords = res.data.data.records;
        })
      }
    },
    created(){
        this.getrecommend(),
        this.gethot()
    },
}
</script>
<style  scoped>
   .integralMall-center {
   width:1200px;
    padding-bottom: 55px;
    box-sizing: border-box;
    margin:0 auto;
    
    
}
.commodity-model {
    padding-top: 50px;
    box-sizing: border-box;
}
.commodity-model-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    /*padding-bottom: 12px;*/
}
.commodity-banner {
    padding-top: 20px;
    box-sizing: border-box;
}
.model-header-left {
    flex:1;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.model-header-left img {
    width: 40px;
    height: 36px;
}
.model-header-left span {
    padding-left:15px;
    box-sizing: border-box;
    font-family: SourceHanSansSC-Bold;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    /*line-height: 23px;*/
    letter-spacing: 0px;
    color: #242b39;
}
.model-header-right a{
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
}
.model-header-right img {
    width: 14px;
    height: 14px;
    margin-left:5px;
}
.model-header-right span {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #666666;
}
.commodity-model-center {
    padding-top: 20px;
    box-sizing: border-box;
    text-align: center;
    width: 2000px;
    padding-right: 750px;
}
/* ul li{ float:left; margin-left:20px; list-style-type:none;} */
/* .commodity-model-center ul{
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.commodity-model-center ul li{
    list-style: none;
    height: 200px;
    line-height: 200px;
} */
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
.commodity-data-box {
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
.cover-img {
    width:100%;
    height:331px;
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
.commodity-data:hover .commodity-data-box {
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
.integralMall-footer {
  width: 100%;
  background: #fff;
}
.integralMall-strategy {
  width: 1200px;
  margin: 0 auto;
  padding: 44px 0 47px 0;
  box-sizing: border-box;
}
.commodity-model-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 12px;
}
.model-header-left {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.strategy-content {
  display: flex;
}
.strategy-list {
  position: relative;
  overflow: hidden;
  width: 285px;
  margin-right: 19px;
  margin-top: 20px;
  cursor: pointer;
}
.strategy-list img {
  display: inline-block;
  transform: scale(1);
  transition: all .2s ease;
}
a {
  color: #333;
  text-decoration: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.strategy-data {
  position: absolute;
  left: 17px;
  top: 44px;
}
.strategy-data h2 {
  font-family: SourceHanSansSC-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 23px;
  letter-spacing: 0px;
  color: #ffffff;
  padding-bottom: 16px;
  box-sizing: border-box;
}
.strategy-btn {
  width: 96px;
  height: 27px;
  display: block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0px;
  
  color: #ffffff;
  border: solid 1px #ffffff;
}


</style>