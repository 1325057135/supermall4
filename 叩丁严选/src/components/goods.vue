<template>
    <div class="moreGoods-content">
         <div class="moreGoods-content-title">
             <a href="index.html" target="_blank">首页</a> /
             <span class="currentType">全部礼品</span>
         </div>
         <div class="moreGoods-content-banner">
             <div class="banner-content">
                 <img src="../../assets/integralMall/img/users/banner.png" alt="">
             </div>
             <!-- 礼品分类  -->
             <div class="commodity-type">
                 <!--  排序  -->
                 <div class="more-commodity commodity-sort">
                     <label>排序: </label>
                     <ul class="more-commodity-ul sort-ul">
                         <li class="more-commodity-li sort-li">全部</li>
                         <li class="more-commodity-li sort-li">我能兑换的</li>
                         <li class="more-commodity-li sort-li">0-500个</li>
                         <li class="more-commodity-li sort-li">500-1000个</li>
                         <li class="more-commodity-li sort-li">1000-1500个</li>
                         <li class="more-commodity-li sort-li">1500-2500个</li>
                         <li class="more-commodity-li sort-li">2500-6500个</li>
                         <li class="more-commodity-li sort-li">6500-10000个</li>
                     </ul>
                 </div>
                 <div class="more-commodity commodity-genre">
                     <label>分类: </label>
                     <ul class="more-commodity-ul">
                         <li class="more-commodity-li">全部</li>
                         <li class="more-commodity-li">实物礼品</li>
                         <li class="more-commodity-li">虚拟礼品</li>
                     </ul>
                 </div>

             </div>
         </div>
         <!--  礼品展示页码值  -->
         <div class="commodity-list">
             <ul class="flow-default current-list" id="currentCommodity"><li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(139)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20201118/74934997-99c6-4bd3-96c1-9d14774884a3.jpg" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">叩丁狼校园文化衫</p>
                        </div>
                         <div class="commodity-num">
                             <span>9900</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('139')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(126)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20211126/6ada6521-8c9f-4a72-bad0-3e0c41bb7e83.jpg" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">不锈钢大容量保温杯</p>
                        </div>
                         <div class="commodity-num">
                             <span>9900</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('126')">立即兑换</div>
                        
                        <img src="../../assets/integralMall/img/index/new.png" alt="" class="commodity-newProduct">
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(124)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200630/126d9b11-fa46-47b3-8081-6e8765340bda.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">小狼抱枕</p>
                        </div>
                         <div class="commodity-num">
                             <span>2100</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('124')">立即兑换</div>
                        <img src="../../assets/integralMall/img/index/hot-j.png" alt="" class="commodity-fiery">
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(123)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200629/c68be5b2-9b81-42a8-893f-b47fe83b25e5.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">帆布袋</p>
                        </div>
                         <div class="commodity-num">
                             <span>2500</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('123')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(121)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200615/41ddc8c8-bd4b-4f5c-ae68-474f9ed18eb7.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">叩丁狼定制T恤</p>
                        </div>
                         <div class="commodity-num">
                             <span>5000</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('121')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(117)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200603/794f2043-bc2c-46f4-b7cc-40ed25131bb7.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">JavaSE经典教程</p>
                        </div>
                         <div class="commodity-num">
                             <span>3000</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('117')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(116)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200528/afbb942a-365a-4723-b02e-859433ae68f7.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">华为手环4</p>
                        </div>
                         <div class="commodity-num">
                             <span>19900</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('116')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(113)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200528/5f3a1937-efd0-4fa5-b95f-f010479bc4f3.jpg" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">小米体重秤2</p>
                        </div>
                         <div class="commodity-num">
                             <span>6900</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('113')">立即兑换</div>
                        
                        
                        </div>
                         </li><li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(104)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200526/fe608f9c-0590-4d3f-83c5-ac8fc44bebe3.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">米家驱蚊器 </p>
                        </div>
                         <div class="commodity-num">
                             <span>5900</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('104')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(103)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200526/1f393eff-b93f-451c-8747-69e5fdc5fce1.jpg" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">JORDAN头带</p>
                        </div>
                         <div class="commodity-num">
                             <span>11900</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('103')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(102)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200526/d2717504-84e3-4947-86a1-afcd94fd18fa.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">小熊多功能煮蛋器</p>
                        </div>
                         <div class="commodity-num">
                             <span>6000</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('102')">立即兑换</div>
                        <img src="../../assets/integralMall/img/index/hot-j.png" alt="" class="commodity-fiery">
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(96)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200526/fbaa1974-4c00-4d93-8e61-4ee5ced0c0ff.jpg" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">钢丝跳绳运动稳定版</p>
                        </div>
                         <div class="commodity-num">
                             <span>5900</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('96')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(94)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200522/d7a4984e-7f92-4a23-a828-118bafe656e7.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">飞利浦电动剃须刀</p>
                        </div>
                         <div class="commodity-num">
                             <span>20900</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('94')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(90)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200522/99c647d8-259f-4736-a1d5-321768d6da4c.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">鹅卵石鼠标</p>
                        </div>
                         <div class="commodity-num">
                             <span>14900</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('90')">立即兑换</div>
                        <img src="../../assets/integralMall/img/index/hot-j.png" alt="" class="commodity-fiery">
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(85)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200522/f9fd7354-bc33-4dde-a38a-85a06c79aa26.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">无线蓝牙键盘</p>
                        </div>
                         <div class="commodity-num">
                             <span>20000</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('85')">立即兑换</div>
                        
                        
                        </div>
                         </li>
                            
                        <li class="commodity-data">
                        <div class="commodity-data-flex">
                         <div class="commodityImg" onclick="setCommodityId(84)">
                        <img src="http://www.wolfcode.cn//upload/images/product_images/20200522/8e9de0ca-eb34-48d4-84fc-031ad803dfe1.png" alt="" class="moreGood-img">
                        
                        </div>
                         <div class="textParent">
                             <p class="commodity-text">SanDisk闪迪U盘</p>
                        </div>
                         <div class="commodity-num">
                             <span>11000</span>
                              <div class="monadImg">
                                  <img src="../../assets/integralMall/img/users/monad.png" alt="">
                              </div>
                          </div>
                        <div class="commodity-change" onclick="setCommodityId('84')">立即兑换</div>
                        
                        
                        </div>
                         </li><div class="layui-flow-more"><a href="javascript:;"><cite>加载更多</cite></a></div></ul>
         </div>
     </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        
    },
    created(){
        
    },
}
</script>
<style lang="less" scoped>
    
</style>