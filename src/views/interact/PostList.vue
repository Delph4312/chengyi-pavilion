<!-- src/views/PostList.vue -->
<template>
<div class="post-list-page" style="background:#F2F0F0;">
   <Header />
  <main class="main-content">
    <div class="container">
      <!-- 返回按钮 -->
      <div class="back-btn-wrap">
        <a href="#" class="btn-back" @click.prevent="goBack">&lt;返回</a>
      </div>
      <!-- 标题+按钮：按钮与标题顶部平齐 -->
      <div class="page-head">
        <h1 class="page-title">精选帖子</h1>
        <button class="post-new-btn" @click="$router.push('/post/publish')">发布新帖</button>
      </div>
      <div class="category-scroll-wrap">
        <div class="category-list">
          <div class="category-item" v-for="(cat,index) in categoryList" :key="index" @click="goCat(cat)">
            <div class="category-img-block">
              <img v-if="cat.imgSrc" :src="cat.imgSrc" alt="" class="category-img" />
            </div>
            <span class="category-name">{{cat.name}}</span>
          </div>
        </div>
        <span class="category-arrow">›</span>
      </div>
      <div class="post-list">
        <div class="post-card" v-for="(post,index) in postList" :key="index">
          <h3 class="post-title">{{post.title}}</h3>
          <div class="post-user">
            <div class="avatar-circle">
              <img v-if="post.avatar" :src="post.avatar" alt="" class="avatar-img" />
            </div>
            <div class="user-text">
              <div class="username">{{post.username}}</div>
              <div class="user-sub">{{post.subTitle}}</div>
            </div>
          </div>
          <p class="post-content">{{post.content}}</p>
          <div v-if="post.postImg" class="post-img-block">
            <img :src="post.postImg" alt="" class="post-img" />
          </div>
          <div class="post-footer">
            <div class="post-tags">
              <span class="post-tag" v-for="(tag,ti) in post.tags" :key="ti">{{tag}}</span>
            </div>
            <div class="post-stats">
              <span class="stat-item">♡ {{post.like}}</span>
              <span class="stat-item">☆ {{post.fav}}</span>
              <span class="stat-item">↗ {{post.share}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-outer">
        <Pagination />
      </div>
    </div>
  </main>
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
import Pagination from '../../components/Pagination.vue'
import cat01 from '../../assets/tra_tech_sq.png'
import cat02 from '../../assets/tra_music_sq.png'
import cat03 from '../../assets/tra_dan_sq.png'
import cat04 from '../../assets/tra_dra_sq.png'
import cat05 from '../../assets/tra_art_sq.png'
import cat06 from '../../assets/tra_me_sq.png'
import post01 from '../../assets/pingyao.png'
import avatar01 from '../../assets/avatar1.png'
import avatar02 from '../../assets/avatar2.png'
const categoryList = [
  { name:"传统技艺", imgSrc:cat01, path:"/category/technique" },
  { name:"传统音乐", imgSrc:cat02, path:"/category/music" },
  { name:"传统舞蹈", imgSrc:cat03, path:"/construction" },
  { name:"传统戏剧", imgSrc:cat04, path:"/construction" },
  { name:"传统美术", imgSrc:cat05, path:"/category/art" },
  { name:"传统医药", imgSrc:cat06, path:"/construction" },
]
const postList = [
  {
    title:"传统木雕技艺的传承困境",
    username:"烂柯人",
    subTitle:"寻访各地老匠人，记录传统手艺故事",
    content:"木雕是我国古老的传统技艺，如今愿意沉下心学习的年轻人越来越少。走访老匠人之后，真切感受到手艺守护的不易，希望更多人看见这项古老手艺。",
    tags:["传统技艺","传统美术"],
    like:123,
    fav:123,
    share:123,
    avatar:avatar01,
    postImg:""
  },
  {
    title:"今天去了山西平遥城隍庙！",
    username:"烟花易碎",
    subTitle:"文旅漫游者，探访各地古城与民俗遗迹",
    content:"实地打卡平遥城隍庙，这里保留着大量传统民俗建筑与民间彩绘。逛的时候刚好遇上民俗表演，沉浸式体验晋地非遗民俗，烟火气息满满。",
    tags:["民俗"],
    like:123,
    fav:123,
    share:123,
    avatar:avatar02,
    postImg:post01
  },
]
// 品类卡片点击跳转
const goCat = (cat) => {
  router.push(cat.path)
}
</script>
<style scoped>
:root{
  --main-dark:#5C1E19;
  --assist-color:#A05852;
}
.container{
  max-width:1440px;
  margin:0 auto;
  padding:0 48px;
}
/* 返回按钮与导航栏间距 110；分页组件与页脚 40 */
.main-content{
  padding-top:110px;
  padding-bottom:40px;
}
/* 返回按钮与标题间距 20 */
.back-btn-wrap{
  margin-bottom:20px;
  margin-left: -40px;
}
.btn-back{
  color:#A05852;
  font-size:15px;
  text-decoration:none;
  cursor:pointer;
  display:inline-block;
}
.page-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  margin-bottom:25px;
}
.page-title{
  font-size:48px;
  font-weight:700;
  margin:0 0 0 40px;
  color:#000000;
}
.post-new-btn{
  background:#5C1E19;
  color:#fff;
  border:none;
  padding:10px 32px;
  border-radius:20px;
  font-size:15px;
  cursor:pointer;
  flex-shrink:0;
}
.category-scroll-wrap{
  position:relative;
  margin-bottom:36px;
}
/* 品类方块 */
.category-list{
  display:flex;
  justify-content:center;
  gap:30px;
  overflow-x:auto;
  padding-bottom:8px;
  scrollbar-width:none;
}
.category-list::-webkit-scrollbar{
  display:none;
}
.category-item{
  flex-shrink:0;
  width:150px;
  text-align:center;
  cursor:pointer;
}
.category-img-block{
  width:100%;
  aspect-ratio:1/1;
  background:#707070;
  border-radius:12px;
  overflow:hidden;
  margin-bottom:14px;
}
.category-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.category-name{
  font-size:24px;
  color:#000000;
}
.category-arrow{
  position:absolute;
  right:32px;
  top:30%;
  transform:translateY(-50%);
  font-size:72px;
  color:#333;
  cursor:pointer;
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
}
/* 帖子卡片间距 25 */
.post-list{
  display:flex;
  flex-direction:column;
  gap:25px;
}
/* 帖子卡片边距 24 */
.post-card{
  background:#ffffff;
  border-radius:10px;
  padding:24px;
}
/* 帖子卡片各行项目间距 15 */
.post-title{
  font-size:20px;
  margin:0 0 15px 0;
  color:#000000;
}
.post-user{
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:15px;
}
.avatar-circle{
  width:42px;
  height:42px;
  border-radius:50%;
  background:#cccccc;
  overflow:hidden;
  flex-shrink:0;
}
.avatar-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.user-text{
  display:flex;
  flex-direction:column;
}
.username{
  font-weight:500;
  font-size:15px;
  color:#000000;
}
.user-sub{
  font-size:13px;
  color:#000000;
}
.post-content{
  font-size:15px;
  color:#000000;
  line-height:1.8;
  margin:0 0 15px 0;
}
/* 帖子图片：左对齐固定宽度，与高保真图一致 */
.post-img-block{
  width:320px;
  max-width:100%;
  border-radius:8px;
  overflow:hidden;
  margin-bottom:25px; /* 帖子卡片标签与图片：25 */
}
.post-img{
  width:100%;
  height:auto;
  display:block;
  object-fit:cover;
}
.post-footer{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.post-tags{
  display:flex;
  gap:10px;
}
.post-tag{
  background:#A05852;
  color:#fff;
  font-size:13px;
  padding:4px 14px;
  border-radius:6px;
  white-space:nowrap;
}
.post-stats{
  display:flex;
  gap:16px;
}
.stat-item{
  font-size:13px;
  color:#000000;
}
/* 分页组件与主要内容间距 40 */
.pagination-outer{
  margin-top:40px;
}
@media(max-width:1200px){
  .footer-column-group{
    gap:80px;
  }
}
@media(max-width:768px){
  .container{
    padding:0 20px;
  }
  .main-content{
    padding-top:40px;
    padding-bottom:50px;
  }
  .page-head{
    flex-direction:column;
    align-items:flex-start;
    gap:16px;
  }
  .page-title{
    font-size:28px;
  }
  .category-list{
    justify-content:flex-start;
    gap:20px;
  }
  .category-item{
    width:90px;
  }
  .category-name{
    font-size:16px;
  }
  .category-arrow{
    display:none;
  }
  .post-card{
    padding:20px;
  }
  .post-img-block{
    width:100%;
  }
  .post-footer{
    flex-direction:column;
    align-items:flex-start;
    gap:12px;
  }
  .footer-inner{
    flex-direction:column;
    gap:35px;
  }
  .footer-column-group{
    flex-wrap:wrap;
    gap:30px;
  }
}
</style>
