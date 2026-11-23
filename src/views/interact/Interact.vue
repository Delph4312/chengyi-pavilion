<!-- src/views/Interact.vue -->
<template>
<div class="interact-page" style="background:#F2F0F0;">
   <Header />
  <main class="main-content">
    <div class="container">
      <div class="back-row">
        <a href="#" class="btn-back" @click.prevent="goBack">&lt;返回</a>
      </div>
      <h1 class="page-title">互动交流</h1>
      <section class="section-block">
        <div class="section-head">
          <div class="section-title">
            <h2>非遗资讯</h2>
            <p>聚焦非遗动态，传播最新资讯，了解传统文化鲜活现状。</p>
          </div>
          <button class="btn-primary" @click="$router.push('/news')">更多</button>
        </div>
        <div class="news-container">
          <div class="news-row" v-for="(item,index) in featuredNews" :key="index">
            <div class="news-card">
              <div class="news-img-block">
                <img v-if="item.imgSrc" :src="item.imgSrc" alt="" class="news-img" />
              </div>
              <h3 class="news-title">{{item.title}}</h3>
              <p class="news-desc">{{item.desc}}</p>
            </div>
            <div class="news-list-col">
              <a href="#" class="news-list-item" v-for="(item,idx) in (index===0 ? newsListLeft : newsListRight)" :key="idx" @click.prevent="goNews(item)">{{item.text}}</a>
            </div>
          </div>
        </div>
      </section>
      <section class="section-block">
        <div class="section-head">
          <div class="section-title">
            <h2>精选帖子</h2>
            <p>浏览用户分享的非遗见闻与体验，交流传统技艺感悟</p>
          </div>
          <button class="btn-primary" @click="$router.push('/post')">更多</button>
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
        <div class="post-btn-wrap">
          <button class="post-new-btn" @click="$router.push('/post/publish')">发布新帖</button>
        </div>
      </section>
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
import news01 from '../../assets/museum.png'
import news02 from '../../assets/embroideryCom.png'
import post01 from '../../assets/pingyao.png'
import avatar01 from '../../assets/avatar1.png'
import avatar02 from '../../assets/avatar2.png'
const featuredNews = [
  {
    title:"博物馆暑期热展，非遗文物焕发新生",
    desc:"暑期博物馆热度持续攀升，各地博物馆推出非遗主题展览，吸引了大量游客参观，近距离、沉浸式领略中华传统文化魅力。",
    imgSrc:news01
  },
  {
    title:"传统刺绣技艺大赛火热开展",
    desc:"各地刺绣大赛陆续开赛，苏绣、壮绣、湘绣等多流派绣艺同台竞技，绣娘巧手演绎纹样之美，推动刺绣非遗技艺活态传承。",
    imgSrc:news02
  },
]
const newsListLeft = [
  { text:'"景德镇手工瓷业遗存"列入《世界遗产名录》', path:'/news/detail' },
  { text:'多地推进非遗进校园，传统技艺走进中小学课堂', path:'' },
  { text:'非遗数字展馆上新！线上沉浸式体验传统技艺', path:'' },
  { text:'第六届"文化遗产保护与利用"学术座谈会举办', path:'' },
  { text:'新疆出台玛纳斯非物质文化遗产保护条例', path:'' },
  { text:'"非遗数字传播图谱"项目启程', path:'' },
]
const newsListRight = [
  { text:'暑日观古卷·非遗主题卷轴画展隆重举行', path:'' },
  { text:'刘三姐歌谣传承人谢庆良登上央视非遗晚会', path:'' },
  { text:'2026年"文化和自然遗产日"宁夏主会场活动启幕', path:'' },
  { text:'上海推出"海派旗袍月"呈现非遗之美', path:'' },
  { text:'镇山福地梨花开 非遗焕新引客来', path:'' },
  { text:'"蜀风遗韵 传承有声"四川省非遗主题展演举行', path:'' },
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
const goNews = (item) => {
  if (item.path) {
    router.push(item.path)
  }
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
/* 返回按钮与导航栏间距 110；发布帖子按钮与页脚 40 */
.main-content{
  padding-top:110px;
  padding-bottom:40px;
}
/* 返回按钮与标题间距 20 */
.back-row{
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
/* 大标题与板块小标题 30 */
.page-title{
  text-align:center;
  font-size:40px;
  font-weight:600;
  margin:0 0 30px 0;
  color:#000000;
}
/* 主要板块之间 30 */
.section-block{
  margin-bottom:30px;
}
.section-block:last-of-type{
  margin-bottom:0;
}
/* 板块标题简介与主体内容 20；更多按钮与标题顶部平齐 */
.section-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  margin-bottom:20px;
}
/* 板块标题与相应简介 3 */
.section-title h2{
  font-size:28px;
  margin:0 0 3px 0;
  font-weight:560;
  color:#000000;
  line-height:1;
}
.section-title p{
  color:#000000;
  font-size:15px;
  margin:0;
}
.btn-primary{
  background-color:#5c1e19;
  color:#fff;
  border:none;
  padding:8px 22px;
  border-radius:20px;
  cursor:pointer;
  font-size:14px;
  flex-shrink:0;
  align-self:flex-start;
  margin-top:0;
}
.news-container{
  max-width:1250px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:40px;
}
.news-row{
  display:flex;
  gap:40px;
  align-items:flex-start;
}
.news-card{
  width:42%;
  flex-shrink:0;
  text-align:left;
}
/* 图片与下方标题 10 */
.news-img-block{
  aspect-ratio:16/9;
  background:#707070;
  border-radius:8px;
  overflow:hidden;
  margin-bottom:10px;
}
.news-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
/* 图片下方标题与相应简介 3 */
.news-title{
  font-size:24px;
  margin:0 0 3px 0;
  color:#000000;
}
.news-desc{
  font-size:16px;
  color:#000000;
  margin:0;
  line-height:1.7;
}
.news-list-col{
  flex:1;
  display:flex;
  flex-direction:column;
  gap:20px;
}
.news-list-item{
  font-size:20px;
  color:#000000;
  text-decoration:none;
  line-height:1.6;
  cursor:pointer;
}
.news-list-item:hover{
  color:#5C1E19;
}
/* 帖子卡片之间 20 */
.post-list{
  max-width:1250px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:20px;
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
/* 帖子图片：左对齐固定宽度；帖子卡片标签与图片 25 */
.post-img-block{
  width:320px;
  max-width:100%;
  border-radius:8px;
  overflow:hidden;
  margin-bottom:25px;
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
/* 发布帖子按钮与帖子卡片 40 */
.post-btn-wrap{
  max-width:1250px;
  margin:40px auto 0;
  display:flex;
  justify-content:center;
}
.post-new-btn{
  background:#5C1E19;
  color:#fff;
  border:none;
  padding:10px 36px;
  border-radius:20px;
  font-size:15px;
  cursor:pointer;
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
  .page-title{
    font-size:28px;
  }
  .section-head{
    flex-direction:column;
    gap:16px;
  }
  .news-row{
    flex-direction:column;
  }
  .news-card{
    width:100%;
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
