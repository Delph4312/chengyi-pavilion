<!-- src/views/InheritorPage.vue -->
<template>
<div class="inheritor-page" style="background:#F2F0F0;">
  <!-- 导航栏 -->
   <Header />
  <!--页面顶部Banner -->
  <section class="page-banner">
    <div class="banner-bg-img">
      <img v-if="inhBannerImg" :src="inhBannerImg" alt="传承页顶图" class="bg-img" />
    </div>
    <div class="banner-text-wrap">
      <div class="text-inner">
        <h1>薪火传非遗</h1>
        <p>探寻多彩非遗，守望千年民族文脉</p>
      </div>
    </div>
  </section>
  <!--板块1：非遗传承人 -->
  <section class="section-wrap inheritor-section">
    <div class="container">
      <div class="section-header-row">
        <div class="section-head">
          <div class="section-title">
            <h2>非遗传承人</h2>
            <p>寻访非遗守艺人，聆听传承人的坚守故事</p>
          </div>
        </div>
        <div class="section-more-row">
          <button class="btn-primary" @click="$router.push('/inherit/list')">更多</button>
        </div>
      </div>
      <div class="card-group-wrap">
        <div class="inheritor-card-list">
          <div class="inheritor-card" v-for="(item,index) in inheritorList" :key="index" @click="goDetail(item)">
            <div class="inh-card-img-block">
              <img v-if="item.imgSrc" :src="item.imgSrc" alt="" class="card-img" />
            </div>
            <h4 class="card-title">{{item.name}}</h4>
            <p class="card-desc" :title="item.desc">{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--板块2：匠人作品集画廊 -->
  <section class="section-wrap gallery-section" style="background:#F6F6F6;">
    <div class="container">
      <div class="section-header-row">
        <div class="section-head">
          <div class="section-title">
            <h2>匠人作品集画廊</h2>
            <p>一览匠人佳作，感受指尖孕育的非遗匠心</p>
          </div>
        </div>
        <div class="section-more-row">
          <button class="btn-primary" @click="$router.push('/inherit/artwork')">更多</button>
        </div>
      </div>
      <div class="card-group-wrap">
        <div class="gallery-card-list">
          <div class="gallery-card" v-for="(item,index) in workList" :key="index">
            <div class="gal-card-img-block">
              <img v-if="item.imgSrc" :src="item.imgSrc" alt="" class="card-img" />
            </div>
            <h4 class="card-title" :title="item.title">{{item.title}}</h4>
            <p class="card-desc" :title="item.fullDesc">{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--板块3：技艺科普讲解 -->
  <section class="section-wrap tech-section">
    <div class="container">
      <div class="section-header-row">
        <div class="section-head">
          <div class="section-title">
            <h2>技艺科普讲解</h2>
            <p>拆解传统技艺，读懂非遗背后的工艺奥秘</p>
          </div>
        </div>
        <div class="section-more-row">
          <button class="btn-primary" @click="$router.push('/inherit/technique')">更多</button>
        </div>
      </div>
      <div class="content-container">
        <div class="item-list">
          <div class="list-item" v-for="(item,index) in techList" :key="index">
            <div class="item-img-block">
              <img v-if="item.imgSrc" :src="item.imgSrc" alt="" class="item-img" />
            </div>
            <div class="item-text">
              <h3 class="item-title">{{item.title}}</h3>
              <p class="item-desc">{{item.desc}}</p>
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
import { useRouter } from 'vue-router'
import Header from '../../components/Header.vue'
const router = useRouter()
import logoImg from '../../assets/logo_wh.png'
import Footer from '../../components/Footer.vue'
import userIcon from '../../assets/User.svg'
import searchIcon from '../../assets/Search.svg'
// 页面顶图 banner 16:5
import inhBannerImg from '../../assets/inherit.png'
// 非遗传承人图片 1:1 inh_ 前缀
import inh01 from '../../assets/inheritor1.png'
import inh02 from '../../assets/inheritor2.png'
import inh03 from '../../assets/inheritor3.png'
// 匠人作品集画廊 4:3 gal_ 前缀
import gal01 from '../../assets/work1.png'
import gal02 from '../../assets/work2.png'
import gal03 from '../../assets/work3.png'
import gal04 from '../../assets/work4.png'
import gal05 from '../../assets/work5.png'
import gal06 from '../../assets/work6.png'
//技艺科普讲解 16:9 tech_ 前缀
import tech01 from '../../assets/tech1.png'
import tech02 from '../../assets/tech2.png'
import tech03 from '../../assets/tech3.png'
//传承人数据：path为点击跳转地址，空串表示暂不跳转
const inheritorList = [
  {
    name:"谢庆良",
    desc:"宜州仫佬族民间歌手，刘三姐歌谣国家级代表性传承人。",
    imgSrc:inh01,
    path:"/inherit/detail"
  },
  {
    name:"黄月香",
    desc:"宜州壮族民间女歌手，刘三姐歌谣自治区级代表性传承人。",
    imgSrc:inh02,
    path:""
  },
  {
    name:"黄月霜",
    desc:"宜州壮族民间女歌手，宜州区刘三姐歌谣代表性传承人。",
    imgSrc:inh03,
    path:""
  }
]
//匠人作品集画廊
const workList = [
  {
    title:"金石篆文拓本",
    desc:"传承古老金石篆刻技艺，将古碑铭文…",
    fullDesc:"传承古老金石篆刻技艺，将古碑铭文拓印留存。",
    imgSrc:gal01
  },
  {
    title:"山水鸣琴·古琴演奏",
    desc:"古琴传统演奏技艺，指尖拨弄七弦，…",
    fullDesc:"古琴传统演奏技艺，指尖拨弄七弦，演绎清雅悠远的东方古乐意境。",
    imgSrc:gal02
  },
  {
    title:"川剧变脸脸谱艺术",
    desc:"川剧经典变脸绝活，瞬息之间变换脸…",
    fullDesc:"川剧经典变脸绝活，瞬息之间变换脸谱，尽显巴蜀戏曲非遗的独特魅力。",
    imgSrc:gal03
  },
  {
    title:"昆曲戏韵",
    desc:"昆曲传统旦角表演，水袖翩跹，唱腔…",
    fullDesc:"昆曲传统旦角表演，水袖翩跹，唱腔婉转，演绎古典戏曲的婉转情思。",
    imgSrc:gal04
  },
  {
    title:"民间弦乐合奏",
    desc:"传统民间二胡曲艺，老匠人现场演奏…",
    fullDesc:"传统民间二胡曲艺，老匠人现场演奏，流淌烟火人间的市井民乐之声。",
    imgSrc:gal05
  },
  {
    title:"石刻碑雕遗存",
    desc:"传统石刻技艺，刀刻于石，留存诗文…",
    fullDesc:"传统石刻技艺，刀刻于石，留存诗文墨迹，记录代代流传的人文故事。",
    imgSrc:gal06
  }
]
//技艺科普讲解
const techList = [
  {
    title:"竹木雕刻",
    desc:"竹木雕刻是中国传统美术类非物质文化遗产技艺，以竹、木等天然材料为创作载体。匠人通过凿、刻、雕、镂、磨等多道工序，将普通竹木加工成精致器物与装饰艺术品。雕刻题材丰富多样，常见有花鸟瑞兽、人物故事、吉祥纹样等，寓意美好且文化内涵深厚。这类技艺常见于传统建筑构件、古典家具、文房摆件、生活器具等之中。",
    imgSrc:tech01
  },
  {
    title:"传统书法技艺",
    desc:"中国传统书法主要包括毛笔书法与硬笔书法等艺术形式，其中毛笔书法最能体现传统笔墨精神。书法历经数千年传承发展，形成了篆、隶、楷、行、草等丰富书体与独特艺术体系。它以汉字为载体，通过笔墨浓淡、线条粗细、结构章法变化展现东方艺术之美。作为中华文化的重要组成部分，它至今仍广泛影响着艺术创作、日常审美与文化教育。",
    imgSrc:tech02
  },
  {
    title:"陶艺拉坯",
    desc:"陶瓷拉坯是陶瓷制作的核心基础工序，是许多陶艺创作的起点。匠人依靠转动轮盘，双手对泥料施加外力塑造器物器型。这项技艺拥有数千年发展历史，是传统制瓷流程重要环节。从业者依靠手部手感控制器壁厚薄，每件手工拉坯作品都具备独特的手工工艺特征。",
    imgSrc:tech03
  }
]
//传承人卡片点击：有path才跳转
const goDetail = (item) => {
  if (item.path) {
    router.push(item.path)
  }
}
</script>
<style scoped>
:root{
  --main-dark:#5C1E19;
}
/* 页面顶部Banner 比例16:5 */
.page-banner{
  aspect-ratio:16/5;
  position:relative;
  width:100%;
  overflow:hidden;
  display:flex;
  align-items:center;
}
.banner-bg-img{
  position:absolute;
  width:100%;
  height:100%;
}
.bg-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.banner-text-wrap{
  position:relative;
  z-index:2;
  padding-left:48px;
  color:#ffffff;
}
.text-inner{
  display:inline-block;
  max-width:420px;
}
.banner-text-wrap h1{
  font-size:48px;
  margin:24px 0 12px 36px;
  font-weight: 550;
}
.banner-text-wrap p{
  font-size:24px;
  margin:0;
}
/* 全局容器与板块 */
.container{
  max-width:1440px;
  margin:0 auto;
  padding:0 48px;
}
.section-wrap{
  padding:36px 0;
}
/* 标题与更多按钮同行，顶部对齐 */
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
  font-weight:600;
  margin-bottom:8px;
}
.section-title p{
  color:#000000;
  font-size:16px;
}
.section-more-row{
  flex-shrink:0;
}
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
  max-width:1200px;
  margin:0 auto;
}
/* 非遗传承人板块 三列，图片1:1，缩小卡片尺寸 */
.inheritor-card-list{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:80px;
}
.inheritor-card{
  text-align:left;
  cursor:pointer;
}
.inh-card-img-block{
  width:100%;
  max-width:320px;
  aspect-ratio:1/1;
  background:#707070;
  border-radius:10px;
  margin-bottom:14px;
  overflow:hidden;
}
.card-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.card-title{
  font-size:24px;
  margin-bottom:6px;
  text-align:left;
  color:#000000;
}
.inheritor-card .card-desc{
  color:#000000;
  font-size:16px;
  text-align:left;
  line-height:1.55;
  overflow:hidden;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
}
/* ========== 匠人作品集画廊 三列，图片4:3 行间距30，列间距90 ========== */
.gallery-card-list{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:30px 90px;
}
.gallery-card{
  text-align:left;
}
.gal-card-img-block{
  aspect-ratio:4/3;
  background:#707070;
  border-radius:8px;
  margin-bottom:14px;
  overflow:hidden;
}
.gallery-card .card-title{
  font-size:24px;
  margin-bottom:6px;
  overflow:hidden;
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
}
.gallery-card .card-desc{
  color:#000000;
  font-size:16px;
  text-align:left;
  overflow:hidden;
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
}
/* ========== 技艺科普讲解 ========== */
.content-container{
  max-width:1200px;
  margin:0 auto;
}
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
  color:#000000;
}
.item-desc{
  font-size:16px;
  color:#000000;
  margin:0;
  line-height:1.7;
}
/* ========== 响应式 ========== */
@media(max-width:1200px){
  .card-group-wrap{
    max-width:100%;
  }
  .inh-card-img-block{
    max-width:100%;
  }
}
@media(max-width:768px){
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
  .banner-text-wrap{
    padding-left:20px;
  }
  .section-wrap{
    padding:36px 0;
  }
  .section-header-row{
    flex-direction:column;
    gap:12px;
  }
  .inheritor-card-list,
  .gallery-card-list{
    grid-template-columns:1fr;
    gap:30px;
  }
  .list-item{
    grid-template-columns:1fr;
    gap:24px;
  }
  .item-list{
    gap:30px;
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
