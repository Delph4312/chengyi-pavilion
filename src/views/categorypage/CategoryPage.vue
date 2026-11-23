<!-- src/views/CategoryPage.vue -->
<template>
<div class="category-page" style="background:#F2F0F0;">
   <Header />
  <main class="container main-wrap">
	  <div class="back-row">
	    <a href="#" class="back-link">&lt;返回</a>
	  </div>
    <h2 class="page-title">非遗文化十大品类</h2>
    <div class="category-grid">
      <div
        v-for="(item,index) in categoryList"
        :key="index"
        class="category-card cursor-pointer"
        @click="goPage(item)"
      >
        <div class="card-img-box">
          <img v-if="item.imgSrc" :src="item.imgSrc" alt="" class="card-img" />
          <h5 class="card-title">{{item.title}}</h5>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Header from '../../components/Header.vue'
import logoImg from '../../assets/logo_wh.png'
import Footer from '../../components/Footer.vue'
import userIcon from '../../assets/User.svg'
import searchIcon from '../../assets/Search.svg'
import cate01 from '../../assets/literature.png'
import cate02 from '../../assets/tra_music_s.png'
import cate03 from '../../assets/tra_dan_s.png'
import cate04 from '../../assets/tra_dra_s.png'
import cate05 from '../../assets/quyi.png'
import cate06 from '../../assets/tra_chess.png'
import cate07 from '../../assets/tra_art_s.png'
import cate08 from '../../assets/tra_tech_s.png'
import cate09 from '../../assets/tra_me_s.png'
import cate10 from '../../assets/folk.png'
const router = useRouter()

//品类数据，path为点击跳转的目标路由
const categoryList = [
  { title:"民间文学",desc:"口头传统以及作为文化载体的语言",imgSrc: cate01,path:"/construction" },
  { title:"传统音乐",desc:"各种传统音乐表演艺术",imgSrc: cate02,path:"/category/music" },
  { title:"传统舞蹈",desc:"各族传统舞蹈艺术",imgSrc: cate03,path:"/construction" },
  { title:"传统戏剧",desc:"各民族传统戏曲戏剧",imgSrc: cate04,path:"/construction" },
  { title:"曲艺",desc:"说唱表演艺术",imgSrc: cate05,path:"/construction" },
  { title:"传统体育、游艺与杂技",desc:"传统体育杂技游艺项目",imgSrc: cate06,path:"/construction" },
  { title:"传统美术",desc:"各类传统造型美术艺术",imgSrc: cate07,path:"/category/art" },
  { title:"传统技艺",desc:"传统手工技艺",imgSrc: cate08,path:"/category/technique" },
  { title:"传统医药",desc:"传统医药知识实践",imgSrc: cate09,path:"/construction" },
  { title:"民俗",desc:"各类民俗活动礼仪节庆",imgSrc: cate10,path:"/construction" },
]

//点击卡片跳转到对应路由
const goPage = (item) => {
  router.push(item.path)
}
</script>

<style scoped>
/*页面主体*/
.container{
  max-width:1440px;
  margin:0 auto;
  padding:0 48px;
}
.main-wrap {
  padding-top:110px;
  padding-bottom:30px;
}
.back-row{
  margin-bottom:20px;
  margin-left: -30px;
}
.back-link{
  color:#A05852;
  font-size:15px;
  text-decoration:none;
}
.page-title{
  text-align:center;
  font-size:32px;
  font-weight:700;
  margin:0 0 30px 0;
  color: var(--text-black);
}
.category-grid{
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 350px));
  gap:30px;
  justify-content:center;
}
.category-card{
  cursor:pointer;
  position:relative;
  transition:0.25s ease;
}
/* 1440宽模板基准卡片尺寸300×208，优先锁定原始宽高比 300 / 208 ≈ 1.442 */
.card-img-box{
  width:100%;
  aspect-ratio:300 / 208;
  background:#707070;
  border-radius:34px;
  position:relative;
  overflow:hidden;
  transition:0.25s ease;
}
.card-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.card-title{
  position:absolute;
  left:24px;
  bottom:18px;
  font-size:20px;
  margin:0;
  color:#ffffff;
  background:rgba(0,0,0,0.45);
  padding:8px 16px;
  border-radius:12px;
  font-weight:400;
}
/* hover上浮 + 柔和阴影 */
.category-card:hover .card-img-box{
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
}
/* ========== 响应式，和首页保持统一 ========== */
@media(max-width:1200px){
  .container{
    max-width:100%;
  }
}
@media(max-width:768px){
  .container{
    padding:0 20px;
  }
  .category-grid{
    grid-template-columns:1fr;
    gap:30px;
  }
}
</style>

