<template>
<div class="art-page" style="background:#F2F0F0;">
  <Header :isTransparent="true"/>
  <!-- Banner -->
  <section class="page-banner" :style="{backgroundImage:`url(${bannerImg})`}">
    <div class="banner-text-wrap">
      <h1 class="banner-title">传统技艺</h1>
      <p class="banner-desc">世代口传手授的手工技艺，凝聚匠人智慧，涵盖制茶、制陶、刺绣等非遗项目。</p>
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
import Footer from '../../components/Footer.vue'
import userIcon from '../../assets/User.svg'
import searchIcon from '../../assets/Search.svg'
import bannerImg from '../../assets/tra_tech.png'
import cate01 from '../../assets/tea.png'
import cate02 from '../../assets/ceramics.png'
import cate03 from '../../assets/embroidery.png'
import Pagination from '../../components/Pagination.vue'

//详情页面数据，imgSrc绑定上面导入变量
const detailList = [
  {
    title:"制茶",
    desc:"传统制茶技艺依靠手工完成萎凋、杀青、揉捻、烘焙等工序，不同茶类工序各有讲究。一代代茶人积累经验，把控温度、时间，造就茶叶独特香气与口感。制茶技艺和民俗深度绑定，部分制茶技艺列入国家级非遗，承载厚重的中华茶文化。",
    imgSrc: cate01
  },
  {
    title:"制陶",
    desc:"传统制陶以黏土为原料，经过揉泥、拉坯、塑形、烧制等工序完成器物。匠人依靠双手塑造器型，火的变化赋予陶器独特色泽质感。各地制陶工艺各具地域风格，制品兼顾实用与审美，古老制陶技艺代代口传手授，作为非物质文化遗产延续至今。",
    imgSrc: cate02
  },
  {
    title:"刺绣",
    desc:"刺绣是针线在织物上绣制纹样的手工技艺，针法繁多，纹样取材民俗、花鸟。不同地域发展出风格迥异的刺绣流派，色彩构图各具特色。刺绣制品既可装饰服饰物件，也承载民俗寓意，技艺依靠师徒口传手授，诸多刺绣项目被列入非遗保护名录。",
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
