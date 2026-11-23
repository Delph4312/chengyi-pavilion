<template>
<div class="art-page" style="background:#F2F0F0;">
   <Header :isTransparent="true"/>
  <!-- Banner区域 比例16:9，顶部大图，悬浮导航栏会盖在banner上方 -->
  <section class="page-banner" :style="{backgroundImage:`url(${bannerImg})`}">
    <div class="banner-text-wrap">
      <h1 class="banner-title">传统美术</h1>
      <p class="banner-desc">以笔墨、色彩、纹样塑造艺术形象，承载民族审美，包含国画、书法、年画等经典门类。</p>
    </div>
  </section>
  <main class="main-wrap">
    <div class="container">
      <div class="back-btn-wrap">
        <a href="#" class="btn-back" @click="goBack">&lt;返回</a>
      </div>
    </div>
    <!-- 内容卡片 -->
    <div class="container content-container">
      <!-- 纵向三行卡片布局，图片居左，文字居右 -->
      <div class="item-list">
        <div class="list-item" v-for="(item,index) in detailList" :key="index">
          <div class="item-img-block">
            <img v-if="item.imgSrc" :src="item.imgSrc" alt="" class="item-img" />
          </div>
          <div class="item-text">
            <h3 class="item-title">{{item.title}}</h3>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </div>
      </div>
      <!-- 分页组件 -->
      <Pagination />
    </div>
  </main>
  <!-- 页脚 -->
  <Footer />
</div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/') 
  }
}
import Header from '../../components/Header.vue'
import logoImg from '../../assets/logo_wh.png'
import Footer from '../../components/Footer.vue'
import userIcon from '../../assets/User.svg'
import searchIcon from '../../assets/Search.svg'
import bannerImg from '../../assets/tra_art_l.png'
import cate01 from '../../assets/guohua.png'
import cate02 from '../../assets/calligraphy.png'
import cate03 from '../../assets/New Year pictures.png'
import Pagination from '../../components/Pagination.vue'

const detailList = [
  {
    title:"国画",
    desc:"国画又称中国画，以笔墨纸砚为创作工具，讲究笔墨意境与气韵格调，分为山水、花鸟、人物三大创作题材。历经数千年发展沉淀，形成独属于华夏的传统审美体系。画家借笔墨挥洒抒发内心情志，不局限于还原物象，重在传神表意。国画承载着中国人独有的精神追求，是中华极具代表性的视觉艺术。众多国画相关技艺流派被列入非物质文化遗产名录，代代传承隽永的东方美学。",
    imgSrc: cate01
  },
  {
    title:"书法",
    desc:"书法是以汉字为载体的传统艺术，依靠笔墨浓淡变化展现汉字独有的线条韵律之美。篆、隶、楷、行、草五大书体各有风骨风貌，各具艺术魅力。书法书写不只是简单的文字记录，更是文人精神境界与审美情趣的表达。千百年来书法深深融入百姓的文化生活，渗透于匾额、楹联、日常书写之中。大量传统书法技艺与流派被纳入非物质文化遗产，跨越时光持续焕发鲜活的艺术活力。",
    imgSrc: cate02
  },
  {
    title:"年画",
    desc:"年画是流传千年的民间节庆绘画艺术，大多用于新春年节张贴，寄托百姓祈福纳祥的美好愿望。题材多取材民俗故事、瑞兽吉祥纹样，画面色彩浓烈明快，热闹喜庆。国内地域年画流派十分丰富，不同地区年画有着鲜明的本土创作特色。年画深深扎根市井并民间生活，生动记录旧时各地民俗风貌。作为传统美术门类，它饱含人间烟火气息，多项年画技艺被列入非物质文化遗产保护名录。",
    imgSrc: cate03
  }
]
</script>
<style scoped>
:root{
  --main-dark:#5C1E19;
  --text-gray:#666666;
  --container-padding:48px;
}
/* 导航栏 */
.header{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:72px;
  box-sizing:border-box;
  background: transparent;
  color:#fff;
  display:flex;
  align-items:center;
  padding:0 48px;
  gap:32px;
  z-index:10;
}
.logo-wrap{
  flex-shrink:0;
}
.logo-img{
  height:48px;
  width:auto;
  display:block;
  object-fit:contain;
}
.nav-menu{
  display:flex;
  gap:40px;
}
.nav-menu a{
  color:#ffffff;
  font-size:15px;
  text-decoration:none;
}
.header-right{
  margin-left:auto;
  display:flex;
  align-items:center;
  gap:12px;
}
.search-input{
  padding:6px 12px;
  border-radius:14px;
  border:none;
  width:180px;
  outline: none;
}
/* 点击输入框激活状态 */
.search-input:focus{
  border: none;
  outline: none;
}
.search-wrap{
  position:relative;
  display:flex;
  align-items:center;
}
.search-icon{
  position:absolute;
  right:10px;
  top:50%;
  transform:translateY(-50%);
  width:15px;
  height:15px;
  display:block;
  object-fit:contain;
  pointer-events:none;
}
.user-icon{
  display:flex;
  align-items:center;
  justify-content:center;
  width:32px;
  height:32px;
}
.user-icon-img{
  width:22px;
  height:22px;
  display:block;
  object-fit:contain;
}
/* 顶部Banner */
.page-banner{
  aspect-ratio:16/9;
  background:#707070;
  background-size:cover;
  background-position:center;
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:72px;
  box-sizing:border-box;
}
.banner-text-wrap{
  text-align:center;
  color:#ffffff;
}
.banner-title{
  font-size:48px;
  margin:0 0 10px;
  font-weight:700;
}
.banner-desc{
  font-size:24px;
  margin:0;
  opacity:0.92;
  max-width:640px;
}
/* 全局容器 */
.container{
  max-width:1200px;
  margin:0 auto;
  padding:0 var(--container-padding);
}
.main-wrap{
  padding-top:40px;
}
.back-btn-wrap{
  margin-bottom:40px;
}
.btn-back{
  color:#A05852;
  text-decoration:none;
  font-size:16px;
  margin-left: -48px;
  display:inline-block;
}
.content-container{
  max-width:1200px;
  margin:0 auto;
  padding:0 var(--container-padding);
}
/* 纵向列表布局，一行内图片+文字 */
.item-list{
  display:flex;
  flex-direction:column;
  gap:30px;
}
.list-item{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:40px;
  align-items:flex-start;
}
.item-img-block{
  width:100%;
  aspect-ratio:16/9;
  background:#707070;
  border-radius:20px;
  overflow:hidden;
}
.item-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.item-title{
  font-size:24px;
  margin:0 0 10px;
  font-weight:700;
}
.item-desc{
  font-size:16px;
  color:#000000;
  margin:0;
  line-height:1.7;
}
.pagination-wrap{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:18px;
  margin-top:40px;
  margin-bottom:40px;
}
.page-num{
  cursor:pointer;
}
.page-input{
  width:48px;
  height:22px;
  padding:4px;
  border:none;
  border-radius:6px;
  text-align:center;
  outline:none;
  box-shadow:none;
}
.page-confirm{
  background:#5C1E19;
  color:#fff;
  border:none;
  padding:3px 12px;
  border-radius:6px;
  font-size:14px;
}
/* 响应式 */
@media(max-width:768px){
  :root{
    --container-padding:20px;
  }
  .btn-back{
    margin-left:0; 
  }
  .header{
    position:relative;
    height:auto;
    flex-wrap:wrap;
    gap:12px;
    padding:14px 20px;
    background: #5C1E19;
  }
  .nav-menu{
    gap:18px;
  }
  .banner-title{
    font-size:28px;
  }
  .banner-desc{
    font-size:16px;
  }
  .list-item{
    grid-template-columns:1fr;
    gap:20px;
  }
  .footer-inner{
    flex-direction:column;
    gap:35px;
  }
  .footer-column-group{
    flex-wrap:wrap;
    gap:30px;
  }
  .pagination-wrap{
    flex-wrap:wrap;
  }
}
</style>
