<!-- src/views/NewsList.vue -->
<template>
<div class="news-list-page" style="background:#F2F0F0;">
   <Header />
  <main class="main-wrap">
    <div class="container">
      <div class="back-btn-wrap">
        <a href="#" class="btn-back" @click.prevent="goBack">&lt;返回</a>
      </div>
      <h1 class="page-title">非遗文化资讯</h1>
      <div class="item-list">
        <div class="list-item" v-for="(item,index) in newsList" :key="index" @click.prevent="goNews(item)">
          <div class="item-img-block">
            <img v-if="item.imgSrc" :src="item.imgSrc" alt="" class="item-img" />
          </div>
          <div class="item-text">
            <h3 class="item-title">{{item.title}}</h3>
            <p class="item-date">{{item.date}}</p>
            <p class="item-desc">{{item.desc}}</p>
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
import news01 from '../../assets/museum.png'
import news02 from '../../assets/embroideryCom.png'
import news03 from '../../assets/jingdezhen.png'
import news04 from '../../assets/artShow.png'
import news05 from '../../assets/market.png'
const newsList = [
  {
    title:"博物馆暑期热展，非遗文物焕发新生",
    date:"2026-08-10",
    desc:"暑期博物馆热度持续攀升，各地博物馆推出非遗主题展览，吸引了大量游客参观，近距离、沉浸式领略中华传统文化魅力。",
    imgSrc: news01,
    path:"/construction"
  },
  {
    title:"传统刺绣技艺大赛火热开展",
    date:"2026-07-29",
    desc:"各地刺绣大赛陆续开赛，苏绣、壮绣、湘绣等多流派绣艺同台竞技，绣娘巧手演绎纹样之美，推动刺绣非遗技艺活态传承。",
    imgSrc: news02,
    path:"/construction"
  },
  {
    title:"\"景德镇手工瓷业遗存\"列入《世界遗产名录》",
    date:"2026-07-27",
    desc:"在第48届世界遗产大会上，\"景德镇手工瓷业遗存\"入选《世界遗产名录》，我国世界遗产数量增至61项。该遗存完整保存古代制瓷全链条遗迹，见证中国瓷业技术与中外文明交流的辉煌历史。",
    imgSrc: news03,
    path:"/news/detail"
  },
  {
    title:"暑日观古卷·非遗主题卷轴画展隆重举行",
    date:"2026-07-10",
    desc:"盛夏时节卷轴主题画展如约开展，众多珍贵书画卷轴非遗作品集中亮相。匠人笔墨流转间尽显传统书画的雅致气韵，让大众近距离感受卷轴装裱与传统书画交织的非遗魅力。",
    imgSrc: news04,
    path:"/construction"
  },
  {
    title:"传统药草市集开市，体味本草非遗烟火",
    date:"2026-07-09",
    desc:"传统药草非遗市集热闹开市，各类本草药材有序陈列。传承古老本草炮制技艺，展现中医药类非遗的民俗魅力，感受根植民间的传统本草文化。",
    imgSrc: news05,
    path:"/construction"
  }
]
// 点击资讯卡片跳转详情页
const goNews = (item) => {
  if (item.path) {
    router.push(item.path)
  }
}
</script>
<style scoped>
:root{
  --main-dark:#5C1E19;
  --container-padding:48px;
}
.container{
  max-width:1200px;
  margin:0 auto;
  padding:0 var(--container-padding);
}
/* 返回按钮与导航栏间距 110；分页组件与页脚 40 */
.main-wrap{
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
  text-decoration:none;
  font-size:16px;
  font-weight:500;
  display:inline-block;
  cursor:pointer;
}
/* 大标题与列表卡片 30 */
.page-title{
  text-align:center;
  font-size:48px;
  font-weight:700;
  margin:0 0 30px 0;
  color:#000000;
}
/* 列表卡片间距 30 */
.item-list{
  display:flex;
  flex-direction:column;
  gap:30px;
}
/* 左侧图片与右侧文字之间 40 */
.list-item{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:40px;
  align-items:flex-start;
  cursor:pointer;
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
.item-text{
  padding-top:0;
}
/* 小标题与日期文本之间 10 */
.item-title{
  font-size:24px;
  margin:0 0 10px;
  font-weight:700;
  color:#000000;
}

.item-date{
  font-size:14px;
  color:#000000;
  margin:0 0 10px;
  font-weight:300;
}
.item-desc{
  font-size:16px;
  color:#000000;
  margin:0;
  line-height:1.7;
  font-weight:300;
}
/* 分页组件与主要内容间距 40 */
.pagination-outer{
  margin-top:40px;
}
@media(max-width:768px){
  :root{
    --container-padding:20px;
  }
  .main-wrap{
    padding-top:40px;
    padding-bottom:50px;
  }
  .page-title{
    font-size:28px;
  }
  .list-item{
    grid-template-columns:1fr;
    gap:20px;
  }
}
</style>
