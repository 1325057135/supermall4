<template>
    <div class=integralmall-details>
    <div class="details-content" id="detailsContent">
    <div class="details-content-top">
        <div class="details-content-title">
            
            <a href="#" target="_blank">
                
               <span>礼品分类 /</span>
                
            </a>
            
            <a href="#" target="_blank">
                
                <span>礼品分类</span>
                
            </a>
            
        </div>
        <div class="details-commodity-list">
            <!-- 礼品具体信息  -->
            <div class="commodity-details">
                <div class="commodity-list" >
                    <div class="currentImg">
                        <img  class="big-img-data" :src="imgurl+ this.src">
                    </div>
                    <ul class="commodity-ul" v-for="(item,index) in img">
                        
                        <li class="commodity-li" style="opacity: 0.4;" @mouseenter="showimg(index)" :style="{ opacity: currentImgIndex == index ? 1 : 0.5}"><img :src=imgurl+item.src alt=""></li>
                        
                        
                        
                    </ul>
                </div>
                <div class="commodity-handle">
                    <div class="commodity-handle-title">
                        <h2 class="commodity-title">{{productInfo.name}}</h2>
                        <p class="commodity-text">{{productInfo.seriesSubTitle}}</p>
                        <div class="commodity-num">
                            <span>{{productInfo.coin}}</span>
                            <div class="monadImg">
                                <img src="../assets/img/monad.png" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- 选择礼品  -->
                    <div class="select-commodity">
                        <div class="select-model">
                            <h2 class="model-title">选择颜色</h2>
                            <ul class="model-ul" v-for="(item,index) in parameterJson">
                                
                               
                                <li class="model-li " @click="asideClickHandle(item.id)"  :class="item.currentActivate ? 'active' : ''">{{item.title}}</li>
                                
                            </ul>
                        </div>
                        <div class="select-model">
                            <h2 class="model-title">数量 <span class="modelNum">{{productInfo.stock}}</span></h2>
                            <div class="model-number">
                                <span class="subtract-num" @click="stepHandle(-1)">-</span>
                                <input type="number" :value=stepNum disabled="disabled" class="model-value" onkeyup="value=value.replace(/[^0-9]+/,'')">
                                <span class="add-num" @click="stepHandle(1)">+</span>
                            </div>
                            <div class="button-array">
                                <button class="addShoping" commodity-id="129" onclick="addShopping(this)">加入购物车</button>
                                <button class="buy" commodity-id="129" onclick="shoppingBuy(this, 'personalCenter.html')">立即兑换</button>
                            </div>
                            <div class="add-like">
                                <img src="../assets/img/love.png" alt="" class="add-like-img" onclick="getLike(this, '129')">
                                <span class="like-number">喜欢 <span class="link-commodity-number">{{productInfo.like}}</span></span>
                                <div class="add-like-list">
                                    <span class="wx"></span>
                                    <span class="kj" onclick="shareTo()"></span>
                                </div>

                                <!-- 扫码分享至朋友圈展示结构  -->
                                <div class="share-friend">
                                    <div id="qrcode" class="qrcode"><canvas width="256" height="256"></canvas></div>
                                    <img src="../assets/img/wx.5584e874.png" alt="">
                                    <p>扫码转发至朋友圈</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  礼品兑换列表  -->
            <div class="commodity-more-list">
                <h2 class="more-list-title">你还可以兑换</h2>
                <ul class="more-list-ul" v-for="(item,index) in themYouCanBuy">
                    
                    <li class="more-list-li">
                        <div class="more-list-a" @click="asideClickHandle(item.id)">
                            <div class="imgs">
                            <img :src="imgurl+item.img" alt="">
                            </div>
                            <div class="more-list-content">
                                <p class="more-list-text">{{item.name}}</p>
                                <div class="more-list-number">
                                    <span>{{item.coin}}</span>
                                    <div class="monadImg">
                                        <img src="../assets/img/monad.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>          
                </ul>
            </div>
        </div>
    </div>
    <!--  礼品详情  -->
 <div class="details-message">
        <ul class="message-ul">
            <li  class="message-li"  @click="showimg2()" :class="show ? 'active2' : ''">礼品详情</li>
            <li class="message-li"  @click="showtext()" :class="show2 ? 'active2' : ''">常见问题</li>
        </ul>
        <div class="message-model" v-if="show">
            <div class="message-commodity" style="display: block;">
                <ul class="commodity-name" v-for="item in detailParameter">
                    <li>{{item.value}}</li>
                </ul>
                <!-- <div v-for="item in productInfo.description"> <img :src="imgUrl2 + item.getAttribute('src')"></div> -->
               <!-- {{productInfo.description.getEl}} -->
                <div v-html="description"></div>
                
            </div>
        </div>
         <div class="message-commodity contact-us" style="display: block;" v-if="show2"><p>&nbsp;</p>
                <p><span style="font-size: 18px;"><strong>兑换后运费如何收取？</strong></span></p>
                <p>商城内大部分实物产品均可包邮，也支持上门自提。虚拟产品则无需运费，可在兑换后直接使用。</p>
                <p><span style="font-size: 14px;">（注：新疆，西藏，内蒙古，青海，海南，宁夏暂不支持包邮，在此地区兑换商品需提前与客服确认运费。）</span></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p><span style="font-size: 18px;"><strong>如何申请退换货？</strong></span></p>
                <ul>
                <li>所有产品均为鸡腿兑换礼品，无质量问题不支持退换货；</li>
                <li>如因喜好不同，或到货后后悔等原因，不支持退货；</li>
                <li>因客户原因如联系方式有误、电话停机、不接电话、无理由拒收等造成快件无法正常签收的情况，叩丁狼均不进行补发或赔付；</li>
                <li>如因质量问题需要退货，将由客服人员与客户联系，确认邮寄地址与流程。退回物品不得有人为损坏或使用痕迹，否则拒绝退换；</li>
                <li>如顾客选择自行寄回商品，请先垫付运费，到货验证商品后，叩丁狼将以鸡腿发放形式为用户报销运费，不接受单方面到付件。</li>
                </ul>
                <p>&nbsp;</p>
                <p><span style="font-size: 18px;"><strong>如何开具发票？</strong></span></p>
                <p>叩丁狼积分商城产品均为定制礼品，使用积分兑换的产品均不支持开票。</p>
                <p>&nbsp;</p>
                <p><strong><span style="font-size: 18px;">关于鸡腿价格问题</span></strong></p>
                <p>因可能存在系统缓存、页面更新延迟等不确定性情况，导致价格显示异常，商品具体售价请以订单结算页价格为准。如您发现异常情况出现，请立即联系我们补正，以便您能顺兑换。</p>
                <p>&nbsp;</p>
                <p><span style="font-size: 18px;"><strong>联系我们</strong></span></p>
                <p><a href="http://www.wolfcode.cn"><u>www.wolfcode.cn</u></a></p>
                <p>微信公众号搜索“叩丁狼”</p></div>
    </div>
   
    
</div>
<div class="details-footer"><div class="integralmall-footer">
     <div class="footer-content">
       <div class="footer-logo">
           <img src="../assets/img/slogan.7730f7f2.png" alt="">
           <p>
               叩丁狼是一家专注于培养高级IT技术人才，为学员提供定制化IT职业规划方案及意见咨询服务的教育科技公司，为您提供海量优质课程，以及创新的线上线下学习体验，帮助您获得全新的个人发展和能力提升。
           </p>
       </div>
         <div class="footer-relation">
             <ul class="relation-list">
                 <li class="relation-text footer-wx">微信公众号</li>
                 <li class="relation-text"><a href="#" target="_blank" class="footer-xl">新浪微博</a></li>
                 <li class="relation-text footer-waiter">在线客服</li>
             </ul>
         </div>
         <div class="footer-phone">
             <p>全国免费咨询热线：</p>
             <h2>020-85628002</h2>
         </div>
     </div>
  </div></div>
</div>
</template>
<script>
// lis1 = this.productInfo.description.getElementsByTagName("src"),
//          console.log(this.lis1)
import { getDetail } from '@/api/detail-api'
export default {
    props:['id'],
    data() {
        return {
            show: true,
            show2: false,
            imgurl:'http://sc.wolfcode.cn',
            imgUrl2:'https://sc.wolfcode.cn',
            productInfo: [],
            parameterJson: [],
            themYouCanBuy: [],
            img:[],
            detailParameter: null,
            src: '',
            checkindex:0, //初始化第一个栏快高亮
            stepNum:1,
            currentImgIndex: 1,
            description:'',
            data: ''
            
        }
    },
    methods:{
        
        stepHandle(num){
            if((this.stepNum<=1 && num == -1) || (this.stepNum>=this.productInfo.stock && num == 1)){
                return;
            }
            this.stepNum+=num;
            },
        showtext() {
            this.show = false,
            this.show2 = true
        },
        showimg2(){
            this.show = true,
            this.show2 = false
        },
         // 发起商品详情的数据请求
    async asideClickHandle(id) {
      const res = await getDetail(id);
      //老师的方法
      //获取商品信息
        this.productInfo = res.data.productInfo
        //获取主图
        this.src = res.data.productInfo.coverImg
        //获取商品轮播图
        this.img  = res.data.productInfo.imgAltas
        // 获取商品版本
        this.parameterJson = res.data.productInfo.parameterJson[0].parameters
        // 获取你还可以兑换
        this.themYouCanBuy = res.data.themYouCanBuy
      // 初始化商品展示图下标
      this.currentImgIndex = 0;
      //获取详情提示内容
        this.detailParameter = res.data.productInfo.detailParameter.parameters
        //获取详情图片
        this.description = res.data.productInfo.description.replaceAll('upload/','https://sc.wolfcode.cn/upload/')
      },
       
       
        showimg(index){
            if(this.currentImgIndex === index) return
            this.src = this.img[index].src
            this.currentImgIndex = index

        }
    },
    created(){
         
        //2.根据id请求详情数据
    getDetail(this.id).then(res=>{
      console.log(res);
        //获取商品信息
        this.productInfo = res.data.productInfo
        //获取主图
        this.src = res.data.productInfo.coverImg
        //获取商品轮播图
        this.img  = res.data.productInfo.imgAltas
        // 获取商品版本
        this.parameterJson = res.data.productInfo.parameterJson[0].parameters
        // 获取你还可以兑换
        this.themYouCanBuy = res.data.themYouCanBuy
        //获取详情提示内
        this.detailParameter = res.data.productInfo.detailParameter.parameters
        //获取详情图片
        this.description = res.data.productInfo.description.replaceAll('upload/','https://sc.wolfcode.cn/upload/')
        
        
    })
    
    },
    computed: {
        
    }
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
    background:#fff;
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
/* input[type=number] 上下箭头关闭 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}

.showimg {
      -webkit-filter: blur(3px);
  filter: blur(3px);
}
.details-content {
   width: 1200px;
    margin: 0 auto;
   background: #fff;
   padding: 57px 0 79px 0;
   box-sizing: border-box;
}

.details-content-title a{
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #999999;
}
.details-content-title a:last-child {
    color: #333333;
    margin-left:3px;
}
.details-commodity-list {
    display: flex;
    padding: 18px 0 48px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;
}
.currentImg {
    width: 457px;
    height: 457px;
    overflow: hidden;
}
.big-img-data {
    width:100%;
    display: block;
}
.active2 {
   color: red;
background-color: #ececec;
}
.commodity-details {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-right: 50px;
    box-sizing: border-box;
}
.commodity-ul {
    display: inline-block;
    padding-top: 21px;
    box-sizing: border-box;
    align-items: center;
}
.commodity-li {
    position: relative;
    float:left;
    list-style: none;
    margin-right: 20px;
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-color: #efefef;
    opacity: 0.4;
}
.commodity-li:first-child {
    opacity: 1;
}
.commodity-li img{
    width:100%;
    display: block;
}
.commodity-li:last-child {
    margin:0;
}
.commodity-handle {
    padding-left: 32px;
    box-sizing: border-box;
}
.commodity-handle-title {
    border-bottom: 1px solid #ececec;
}
// .model-li active {
//     border: solid 1px #0a328e;
//     color: #0a328e;
    
// }
.commodity-title {
    font-family: SourceHanSansSC-Regular;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #000000;
    margin:7px 0;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-height: 32px;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.commodity-text {
    font-family: SourceHanSansSC-Light;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: 0px;
    color: #999999;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.commodity-num {
    font-family: SourceHanSansSC-Bold;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #fd604d;
    padding:23px 0;
    box-sizing: border-box;
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
.more-list-li:hover .monadImg img{
    border:none;
}
.details-content .monadImg img {
    width:100%;
    display: block;
    border:none;
}
.select-model {
    padding-top: 20px;
    box-sizing: border-box;
    width: 600px;
}
.model-title {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #000000;
    margin-bottom: 14px;
}
.modelNum {
    font-size: 14px;
    color:#999;
    padding-left:5px;
    box-sizing: border-box;
}
.model-ul {
    zoom:1;
    display: inline-block;
    width: 140px;
    margin-left: 10px;
    .active{
         border: 1px solid #0A328E;
                  color: #0A328E;
    }
    
}
.model-ul::after {
    content: '';
    height:0;
    display: block;
    clear: both;
    
}
.model-li {
    width: 140px;
    position: relative;
    word-wrap:word-break;
    list-style: none;
    cursor: pointer;
    /*width: 76px;*/
    /*height: 32px;*/
    padding: 5px 10px;
    box-sizing: border-box;
    float:left;
    margin-right: 20px;
    margin-bottom: 11px;
    border: solid 1px #d1d1d1;
    color: #666666;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
}

.model-number {
    width:106px;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.model-number span {
    width: 30px;
    height: 32px;
    display: block;
    border: solid 1px #d1d1d1;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0px;
    color: #999999;
    text-align: center;
    cursor: pointer;
}
.model-number input {
    width: 46px;
    height: 32px;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #666666;
    border-top:1px solid #d1d1d1;
    border-bottom: 1px solid #d1d1d1;
    background:#fff;
}
.button-array {
    padding:24px 0;
    box-sizing: border-box;
}
.button-array button {
    width: 150px;
    height: 46px;
    margin-right:19px;
    text-align: center;
    line-height: 46px;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    cursor: pointer;
    background: #3dc36b;
}
.button-array .buy {
    background: #fd604d;
}
.add-like {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
}
.add-like-img {
    cursor: pointer;
}
.like-number {
    padding:0 17px 0 12px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #666666;
}
.add-like-list {
    padding-left: 18px;
    box-sizing: border-box;
    border-left:1px solid #ececec;
}
.add-like-list span{
    width: 24px;
    height: 24px;
    display: inline-block;
    background-color:#cbcbcb;
    border-radius:2px;
    cursor: pointer;
}
.add-like-list .wx {
    background-image: url("../assets/img/wx.png");
    background-repeat: no-repeat;
    background-position: center;
    margin-right:12px;
}
.add-like-list .kj {
    background-image: url("../assets/img/kj.png");
    background-repeat: no-repeat;
    background-position: center;
}
.add-like-list .kj:hover {
  background-color: #ffc837;
}
.share-friend {
    position: absolute;
    left: -14px;
    top: -126px;
    background: #fff;
    padding:10px;
    box-sizing: border-box;
    border:1px solid #ececec;
    text-align: center;
    display: none;
}
.qrcode {
    width:100px;
    height:100px;
    margin:0 auto 10px;
    display: block;
}
.qrcode canvas {
    width:100px;
    display: block;
}
/*  更多可兑换礼品  */
.commodity-more-list {
    width: 227px;
    border-left: 1px solid #ececec;
    padding-left: 20px;
}
.more-list-title {
    font-family: SourceHanSansSC-Regular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: 0px;
    color: #333333;
    margin-bottom: 20px;
}
.more-list-ul {
    display: flex;
    flex-direction: column;
}
.more-list-li {
    margin-bottom: 30px;
    cursor: pointer;
}
.more-list-li:last-child {
    margin-bottom: 0;
}
.imgs {
    width: 78px;
}
.more-list-li img {
    width:100%;
    display: block;
    border: 1px solid #fff;
}
.more-list-li:hover img{
    border: 1px solid #0a328e;
}
.more-list-li:hover p{
    color: #0a328e;
}
.more-list-a {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    padding-top: 5px;
}
.more-list-content {
    padding-left:10px;
    width: calc(100% - 74px);
}
.more-list-text {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: 0px;
    color: #666666;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 5px;
}
.more-list-number {
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #666666;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.more-list-number span {
    font-family: SourceHanSansSC-Bold;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: 0px;
    color: #ff5e0f;
}


.message-ul {
    display: flex;
    .active2{
        color: #333;
background-color: #ececec;
    }
}
.message-li {
    width: 120px;
    height: 50px;
    background-color: #fff;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #999999;
    cursor: pointer;
    text-align: center;
    
}
// .message-li:first-child {
//     color: #333;
//     background-color: #ececec;
// }
.message-model {
    padding-top: 27px;
    box-sizing: border-box;
}
.contact-us {
    display: none;
}
.commodity-name {
    display: flex;
    flex-direction: column;
}
.name-data {
    display: flex;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    color: #666666;
    margin-bottom: 20px;
}
.name-data span {
    margin-left:5px;
}
.commodity-img {
    margin-top: 88px;
}
.integralmall-footer{
    width:100%;
    height: 240px;
    background-color: #242b39;
}
.footer-content {
    width:1200px;
    margin:0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.footer-logo {
    width: 426px;
    padding: 30px 0 0 0;
    box-sizing: border-box;
}
.footer-logo p {
    font-family: MicrosoftYaHei;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #7d879a;
    line-height: 1.5;
    box-sizing: border-box;
}
.footer-relation {
    flex:1;
    margin-top: 86px;
}
.footer-phone {
    margin-top: 60px;
}
.footer-phone p {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #7d879a;
}
.footer-phone h2 {
    font-family: SourceHanSansSC-Bold;
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    margin-top: 7px;
    line-height: 24px;
}
.relation-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.relation-text {
    padding:0 8px;
    box-sizing: border-box;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 21px;
    letter-spacing: 0px;
    color: #7d879a;
    position: relative;
    cursor: pointer;
    border-right: 1px solid #7d879a;
}
.footer-xl {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 21px;
    letter-spacing: 0px;
    color: #7d879a;
}
.footer-wx:after {
    content: '';
    position: absolute;
    top: -109px;
    left:0;
    width: 97px;
    height: 109px;
    clear: both;
    display: none;
    background-image: url("../assets/img/love.png");
}
.footer-waiter:after {
    content: '';
    position: absolute;
    top: -109px;
    left: -18px;
    width: 97px;
    height: 109px;
    clear: both;
    display: none;
    background-image: url("../assets/img/love.png");
}
.footer-waiter:hover:after {
    display: block;
}
.footer-wx:hover:after {
    display: block;
}
.relation-text:last-child {
    border: none;
}
.message-model {
  padding-top: 27px;
  box-sizing: border-box;
}
p{
    margin-top: 10px;
}
strong{
    font-weight: bold;
}
span{
    line-height: 5px;
}
.message-commodity ul li {
    margin-bottom: 10px;
    
}
</style>