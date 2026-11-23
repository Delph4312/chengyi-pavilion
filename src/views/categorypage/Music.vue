<template>
<div class="art-page" style="background:#F2F0F0;">

  <Header :isTransparent="true"/>

  <!-- Banner区域 -->
  <section class="page-banner" :style="{backgroundImage:`url(${bannerImg})`}">
    <div class="banner-text-wrap">
      <h1 class="banner-title">传统音乐</h1>
      <p class="banner-desc">非物质文化遗产传统音乐大类，包含器乐、声乐等众多门类，是中华优秀传统文化重要的有声载体。</p>
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
        <div class="list-item" v-for="(item,index) in detailList" :key="index" @click="item.path && router.push(item.path)">
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
import bannerImg from '../../assets/tra_music_l.png'
import cate01 from '../../assets/drum.png'
import cate02 from '../../assets/guqin.png'
import cate03 from '../../assets/pipa.png'
import Pagination from '../../components/Pagination.vue'

//详情页面数据，imgSrc绑定上面导入变量，增加path跳转路径
const detailList = [
  {
    title:"鼓乐",
    desc:"鼓乐是以各类鼓为核心演奏乐器，搭配锣、镲等打击乐器共同构成的民间器乐艺术。代表性项目有绛州鼓乐、晋南威风锣鼓、陕西鼓乐等，广泛运用于节庆、祭祀民俗活动，演奏气势雄浑热烈，节奏变化丰富，生动展现民间集体音乐的磅礴生命力。",
    imgSrc: cate01,
    path:"/culture/detail"
  },
  {
    title:"古琴艺术",
    desc:"古琴又称“琴”、“七弦琴”，别称“绿绮”、“丝桐”。它主要体现为一种平置弹弦乐器的独奏艺术形式，另外也包括唱、弹兼顾的琴歌与琴、箫合奏。以目前考古发掘的资料证实，古琴作为一件乐器的形制至迟到汉代已经发展完备，其演奏艺术与风格经历代琴人及文人的创造而不断完善，一直延续至今。古琴演奏是中国历史上最古老、艺术水准最高，最具民族精神、审美情趣和传统艺术特征的器乐演奏形式。",
    imgSrc: cate02,
    path:"/construction"
  },
  {
    title:"琵琶艺术",
    desc:"琵琶艺术是国家级非物质文化遗产。于2008年6月7日批准，编号为Ⅱ‑119，是中国国乐艺术的国粹。中国近代传统民族音乐史上有海派琵琶和浙派琵琶两大流派。平湖派琵琶艺术对研究民族音乐史具有相当的历史价值。琵琶艺术是第二批国家级非物质文化传统音乐之一。",
    imgSrc: cate03,
    path:"/construction"
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
  cursor: pointer;
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

/* 分页组件 */
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
