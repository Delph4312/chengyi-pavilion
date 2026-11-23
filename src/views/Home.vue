<!-- src/views/Home.vue -->
<template>
<div class="home-page" style="background:#F2F0F0;">
  <!-- 导航栏 -->
  <Header />
  <!-- Banner -->
  <section class="banner" :style="{backgroundImage:`url(${bannerList[currentBannerIndex]})`}">
    <div class="banner-content">
      <div class="banner-text-mask">
        <div class="banner-item" v-for="(stat, i) in stats" :key="i" :style="{ '--delay': (i * 0.2) + 's' }">
          {{ stat.label }} <span class="stat-num">{{ displayNumbers[i] }}</span>{{ stat.suffix }}
        </div>
      </div>
    </div>
    <!-- 轮播小圆点指示器 -->
    <div class="banner-dots">
      <span v-for="(item, idx) in bannerList" :key="idx" class="dot" :class="{active: currentBannerIndex === idx}" @click="currentBannerIndex = idx"></span>
    </div>
  </section>
  <!-- 热门推荐 -->
  <section class="section-wrap hot-section">
    <div class="container">
      <div class="section-header-row">
        <div class="section-head">
          <div class="section-title">
            <h2>热门推荐</h2>
            <p>精选优质非遗项目，快速感受传统技艺魅力</p>
          </div>
        </div>
        <div class="section-more-row">
          <button class="btn-primary" @click="$router.push('/construction')">更多</button>
        </div>
      </div>
      <div class="card-group-wrap">
        <div class="hot-card-list">
          <div class="hot-card" v-for="(item,index) in hotList" :key="index" @click="goPage(item)">
            <div class="card-img-block">
              <img v-if="item.imgSrc" :src="item.imgSrc" alt="" class="card-img" />
            </div>
            <h4 class="card-title">{{item.title}}</h4>
            <p class="card-desc">{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 非遗产品 -->
  <section class="section-wrap category-section" style="background:#F6F6F6;">
    <div class="container">
      <div class="section-header-row">
        <div class="section-head">
          <div class="section-title">
            <h2>非遗品类</h2>
            <p>按类别浏览各类非物质文化遗产，认识多元非遗形态</p>
          </div>
        </div>
        <div class="section-more-row">
          <button class="btn-primary" @click="$router.push('/category')">更多</button>
        </div>
      </div>
      <div class="category-wrap-outer">
        <div class="category-container category-inner-wrap">
          <div class="category-left-col">
            <div class="big-category-card" @click="$router.push('/category/music')">
              <div class="big-img-block">
                <img v-if="leftCatImg" :src="leftCatImg" alt="" class="block-img" />
                <div class="card-text-mask">
                  <h4 class="card-title">传统音乐</h4>
                  <p class="card-desc">汇集各族传统乐器、民歌，记录华夏大地的古老乐声。</p>
                </div>
              </div>
            </div>
          </div>
          <div class="category-right-col">
            <div class="small-category-card card-top" @click="$router.push('/construction')">
              <div class="small-img-block top-img">
                <img v-if="rightTopImg" :src="rightTopImg" alt="" class="block-img"/>
                <div class="card-text-mask">
                  <h4 class="card-title">传统戏剧</h4>
                  <p class="card-desc">唱腔婉转，演绎百态人生，传承传统戏曲文化。</p>
                </div>
              </div>
            </div>
            <div class="small-category-card card-bottom" @click="$router.push('/construction')">
              <div class="small-img-block bottom-img">
                <img v-if="rightBottomImg" :src="rightBottomImg" alt="" class="block-img"/>
                <div class="card-text-mask">
                  <h4 class="card-title">传统舞蹈</h4>
                  <p class="card-desc">以肢体动作承载民俗寓意，民俗活动的重要表演形式。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tag-wrap">
        <span class="tag-item">民间文学</span>
        <span class="tag-item">传统美术</span>
        <span class="tag-item">传统技艺</span>
        <span class="tag-item">传统医药</span>
      </div>
    </div>
  </section>
  <!-- 非遗传承 -->
  <section class="section-wrap inheritor-section">
    <div class="container">
      <div class="section-header-row">
        <div class="section-head">
          <div class="section-title">
            <h2>非遗传承</h2>
            <p>聚焦非遗传承人，记录守艺艺人的传承故事</p>
          </div>
        </div>
        <div class="section-more-row">
          <button class="btn-primary" @click="$router.push('/inherit')">更多</button>
        </div>
      </div>
      <div class="card-group-wrap">
        <div class="inheritor-list">
          <div class="inheritor-card" v-for="(person,i) in inheritorList" :key="i" @click="goPage(person)">
            <div class="inheritor-img-block">
              <img v-if="person.imgSrc" :src="person.imgSrc" alt="" class="block-img"/>
            </div>
            <h4 class="card-title">{{person.name}}</h4>
            <p class="inheritor-desc" :title="person.intro" v-html="person.intro"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 互动交流 -->
  <section class="section-wrap interact-section">
    <div class="container">
      <div class="section-header-row">
        <div class="section-head">
          <div class="section-title">
            <h2>互动交流</h2>
            <p>非遗资讯与用户社区，分享见闻、交流感悟</p>
          </div>
        </div>
        <div class="section-more-row">
          <button class="btn-primary" @click="$router.push('/interact')">更多</button>
        </div>
      </div>
      <div class="interact-container interact-inner-wrap">
        <div class="interact-left" @click="$router.push('/construction')">
          <div class="interact-img-block">
            <img v-if="interactImg" :src="interactImg" alt="" class="block-img"/>
          </div>
          <h4 class="card-title">博物馆暑期热展，非遗文物焕发新生</h4>
          <p class="card-desc">暑期博物馆热度持续攀升，各地博物馆推出非遗主题展览，吸引了大量游客参观，近距离、沉浸式领略中华传统文化魅力。</p>
        </div>
        <div class="interact-right">
          <div class="msg-item" v-for="msg in msgList" :key="msg.id" @click="goPage(msg)">
            <div v-if="msg.postImg" class="msg-img-block">
              <img :src="msg.postImg" alt="" class="msg-img"/>
            </div>
            <p class="msg-text">{{msg.content}}</p>
            <div class="msg-user">
              <div class="avatar-circle">
                <img v-if="msg.avatar" :src="msg.avatar" alt="" class="avatar-img"/>
              </div>
              <div class="user-text">
                <div class="username">{{msg.username}}</div>
                <div class="user-sub">{{msg.subTitle}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import userIcon from '../assets/User.svg'
import searchIcon from '../assets/Search.svg'
import banner1 from '../assets/chengyige1.png'
import banner2 from '../assets/chengyige2.png'
import banner3 from '../assets/chengyige3.png'
import hot01 from '../assets/hot1.png'
import hot02 from '../assets/hot2.png'
import hot03 from '../assets/hot3.png'
import catMusic from '../assets/cate_music.png'
import catDrama from '../assets/cate_dra.png'
import catDance from '../assets/cate_dan.png'
import inherit01 from '../assets/inherit1.png'
import inherit02 from '../assets/inherit2.png'
import inherit03 from '../assets/inherit3.png'
import interactNewsImg from '../assets/museum.png'
import avatarUser1 from '../assets/avatar1.png'
import avatarUser2 from '../assets/avatar2.png'
import postPic from '../assets/pingyao.png'
const bannerList = [banner1, banner2, banner3]
const currentBannerIndex = ref(0)
let timer = null
// 自动轮播 4秒切换一次
function startLoop() {
  timer = setInterval(() => {
    currentBannerIndex.value = (currentBannerIndex.value + 1) % bannerList.length
  }, 4000)
}
// Banner 数字滚动动画
const stats = [
  { label: '非遗项目', target: 1500, suffix: '+' },
  { label: '传承匠人', target: 800, suffix: '+' },
  { label: '民俗专题', target: 300, suffix: '+' },
]
const displayNumbers = ref(stats.map(() => 0))
let countTimers = []
let isCounting = true
const startCountUp = () => {
  stats.forEach((stat, index) => {
    const delayTimer = setTimeout(() => {
      const duration = 1500
      const startTime = performance.now()
      const step = (now) => {
        if (!isCounting) return
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // easeOutQuad 缓动：先快后慢
        const eased = 1 - (1 - progress) * (1 - progress)
        displayNumbers.value[index] = Math.floor(eased * stat.target)
        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          displayNumbers.value[index] = stat.target
        }
      }
      requestAnimationFrame(step)
    }, index * 200)
    countTimers.push(delayTimer)
  })
}
onMounted(() => {
  startLoop()
  startCountUp()
})
onUnmounted(() => {
  clearInterval(timer)
  isCounting = false
  countTimers.forEach(clearTimeout)
})
// 数据赋值
const hotList = [
  { title:"鼓乐", desc:"打击合奏，奏响民间磅礴乐章", imgSrc:hot01, path:"/culture/detail" },
  { title:"山水鸣琴·古琴演奏", desc:"古琴传统演奏技艺", imgSrc:hot02, path:"/construction" },
  { title:"陶艺拉坯", desc:"陶瓷制作的核心基础工序", imgSrc:hot03, path:"/construction" },
]
const inheritorList = [
  { name:"非遗传承人 · 谢庆良", intro:"宜州壮族民间歌手<br>刘三姐歌谣国家级代表性传承人", imgSrc:inherit01, path:"/inherit/detail" },
  { name:"匠人作品 · 川剧变脸脸谱艺术", intro:"川剧经典变脸绝活，瞬息之间变换脸谱，尽显巴蜀戏曲非遗的独特魅力。", imgSrc:inherit02, path:"/construction" },
  { name:"技艺科普 · 竹木雕刻", intro:"竹木雕刻是我国传统美术类非遗技艺，以竹、木材料为载体，通过凿、刻、雕、镂等工序完成器物创作。", imgSrc:inherit03, path:"/construction" },
]
const msgList = [
  { id:1, content:"传统木雕技艺的传承困境", username:"烂柯人", subTitle:"寻访各地老匠人，记录传统手艺故事", avatar:avatarUser1, postImg:"", path:"/construction" },
  { id:2, content:"今天去了山西平遥城隍庙！", username:"烟花易碎", subTitle:"文旅漫游者，探访各地古城与民俗遗迹", avatar:avatarUser2, postImg: postPic, path:"/construction" },
]
const leftCatImg = catMusic
const rightTopImg = catDrama
const rightBottomImg = catDance
const interactImg = interactNewsImg
const goPage = (item) => {
  if (item.path) {
    router.push(item.path)
  }
}
</script>

<style scoped>
/* Banner */
.banner{
  aspect-ratio:16/9;
  background:#707070;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-end;
  background-size:cover;
  background-position:center;
  padding-top:72px;
  box-sizing:border-box;
  position:relative;
}
.banner-content{
  margin-bottom:48px;
}
.banner-text-mask{
  display:flex;
  gap:200px;
  font-size:24px;
  color:#fff;
  background:rgba(160, 88, 82, 0.5);
  border-radius:20px;
  padding:4px 40px;
}
.banner-item{
  opacity: 0;
  animation: fadeScaleIn 1s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--delay, 0s);
}
@keyframes fadeScaleIn{
  0%{
    opacity: 0;
    transform: scale(0.75);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
.stat-num{
  font-weight:400;
  font-size: 32px;
}
/* 轮播小圆点 */
.banner-dots{
  position:absolute;
  bottom:20px;
  display:flex;
  gap:12px;
}
.dot{
  width:12px;
  height:12px;
  border-radius:50%;
  background:rgba(255,255,255,0.45);
  cursor:pointer;
}
.dot.active{
  background:#ffffff;
}
/* 全局容器 */
.container{
  max-width:1440px;
  margin:0 auto;
  padding:0 48px;
}
.section-wrap{
  padding:36px 0;
}
.section-header-row{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  margin-bottom:20px;
}
.section-head{
  flex-shrink:0;
}
.section-title h2{
  font-size:32px;
  font-weight:700;
  margin-bottom:8px;
}
.section-title p{
  color:#000000;
  font-size:16px;
}
.section-more-row{
  flex-shrink:0;
}
/* 更多按钮 */
.btn-primary{
  background-color:#5c1e19 !important;
  color:#fff !important;
  border:none !important;
  padding:8px 22px;
  border-radius:20px;
  cursor:pointer;
}
.btn-primary:hover,
.btn-primary:active,
.btn-primary:focus{
  background-color:#5c1e19 !important;
  color:#fff !important;
  outline:none !important;
}
.card-group-wrap{
  max-width:1250px;
  margin:0 auto;
}
/* 热门推荐 */
.hot-card-list{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:80px;
}
.hot-card{
  text-align:left;
  cursor:pointer;
}
.card-img-block{
  aspect-ratio:1/1;
  background:#707070;
  border-radius:8px;
  margin-bottom:0px;
  overflow:hidden;
}
.card-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.card-title{
  font-size:24px;
  margin:14px 0 6px 0;
  text-align:left;
}
.card-desc{
  color:#000000;
  font-size:16px;
  text-align:left;
}
.category-wrap-outer{
  display:flex;
}
.category-inner-wrap{
  max-width:1240px;
  margin:0 auto;
}
.category-container{
  display:flex;
  gap:26px;
  flex:1;
  margin-bottom:20px;
}
.category-left-col{
  width:44%;
}
.category-right-col{
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  height:100%;
  gap:26px;
}
.big-category-card{
  height:100%;
  cursor:pointer;
}
.big-img-block{
  position:relative;
  height:100%;
  background:#707070;
  border-radius:8px;
  overflow:hidden;
}
.small-category-card{
  border-radius:8px;
  overflow:hidden;
  width:100%;
  cursor:pointer;
}
.card-top .small-img-block,
.card-bottom .small-img-block{
  position:relative;
  aspect-ratio:16/9;
  background:#707070;
  overflow:hidden;
  width:100%;
}
.block-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.card-text-mask{
  position:absolute;
  left:24px;
  bottom:24px;
  width: fit-content;
  max-width: calc(100% - 48px);
  padding:12px 20px;
  background:rgba(160, 88, 82, 0.7);
  border-radius:10px;
  color:#ffffff;
  box-sizing:border-box;
}
.card-bottom .card-text-mask{
  left: auto;
  right: 24px;
  bottom:24px;
}
.card-text-mask .card-title{
  color:#fff;
  margin:0 0 6px 0;
  font-size:28px;
  font-weight: 700;
}
.card-text-mask .card-desc{
  color:#eee;
  margin:0;
  font-size:16px;
  line-height:1;
}
/* 标签组 */
.tag-wrap{
  display:flex;
  justify-content:space-between;
  max-width:740px;
  margin-left:auto;
  margin-right:auto;
  gap:5px;
}
.tag-item{
  background:#ffffff;
  padding:8px 22px;
  border-radius:8px;
  font-size:16px;
  white-space:nowrap;
}
/* 非遗传承 */
.inheritor-list{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:80px;
}
.inheritor-card{
  text-align:left;
  cursor:pointer;
}
.inheritor-img-block{
  aspect-ratio:1/1;
  background:#707070;
  border-radius:10px;
  margin-bottom:0px;
  overflow:hidden;
}
.inheritor-desc{
  color:#000000;
  font-size:16px;
  text-align:left;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
}
/* 互动交流 */
.interact-inner-wrap{
  max-width:1240px;
  margin:0 auto;
}
.interact-container{
  display:flex;
  gap:30px;
}
.interact-left{
  width:45%;
  cursor:pointer;
}
.interact-img-block{
  aspect-ratio:16/9;
  background:#707070;
  border-radius:10px;
  margin-bottom:0px;
  overflow:hidden;
}
.interact-right{
  flex:1;
  display:flex;
  flex-direction:column;
  gap:22px;
}
.msg-item{
  background:#ffffff;
  padding:22px;
  border-radius:10px;
  cursor:pointer;
}
.msg-img-block{
  width:100%;
  border-radius:8px;
  overflow:hidden;
  margin-bottom:14px;
}
.msg-img{
  width:auto;
  max-width:100%;
  max-height:140px;
  height:auto;
  display:block;
  object-fit:contain;
}
.msg-text{
  font-size:16px;
  margin-bottom:16px;
  color:#000000;
}
.msg-user{
  display:flex;
  align-items:center;
  gap:12px;
}
.avatar-circle{
  width:42px;
  height:42px;
  border-radius:50%;
  background:#cccccc;
  overflow:hidden;
}
.avatar-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.username{
  font-weight:500;
  color:#000000;
}
.user-sub{
  font-size:14px;
  color:#000000;
  font-weight: 300;
}
/* 响应式 */
@media(max-width:1200px){
  .card-group-wrap{
    max-width:100%;
  }
  .category-inner-wrap,
  .interact-inner-wrap,
  .tag-wrap{
    max-width:100%;
  }
}
@media(max-width:768px){
  .section-header-row{
    flex-direction:column;
    gap:12px;
  }
  .hot-card-list,
  .inheritor-list{
    grid-template-columns:1fr;
  }
  .category-container,
  .interact-container{
    flex-direction:column;
  }
  .category-wrap-outer{
    flex-direction:column;
    gap:16px;
  }
  .category-left-col,
  .interact-left{
    width:100%;
  }
  .header{
    position:relative;
    height:auto;
    flex-wrap:wrap;
    gap:12px;
    padding:14px 20px;
  }
  .nav-menu{
    gap:18px;
  }
  .container{
    padding:0 20px;
  }
  .section-wrap{
    padding:40px 0;
  }
  .banner-text-mask{
    flex-direction:column;
    gap:20px;
    text-align:center;
  }
  .stat-num{
    font-size:26px;
  }
  .tag-wrap{
    flex-wrap:wrap;
    justify-content:flex-start;
    gap:12px;
  }
}
</style>
