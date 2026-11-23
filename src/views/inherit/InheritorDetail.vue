<!-- src/views/InheritorDetail.vue -->
<template>
<div class="inheritor-detail-page" style="background:#F2F0F0;">
   <Header />
  <main class="main-content">
    <div class="container">
      <div class="back-row">
        <a class="btn-back" @click="goBack">&lt;返回</a>
      </div>
      <h1 class="page-title">非遗传承人介绍</h1>
      <div class="inheritor-info-block">
        <div class="inheritor-portrait">
          <img v-if="portraitImg" :src="portraitImg" alt="" class="portrait-img" />
        </div>
        <div class="inheritor-base-text">
          <h1 class="inheritor-name">谢庆良</h1>
          <div class="inheritor-tag-group">
            <span class="tag">刘三姐歌谣</span>
            <span class="tag">国家级传承人</span>
          </div>
          <p class="inheritor-brief" v-html="inheritorBrief"></p>
        </div>
      </div>
    </div>
    <section class="detail-section bg-alt">
      <div class="container">
        <h2 class="section-title">匠人介绍</h2>
        <div class="story-content">
          <p>谢庆良，男，仫佬族，1953年8月出生于广西壮族自治区河池市宜州区庆远镇东屏村，是国家级非物质文化遗产代表性项目"刘三姐歌谣"国家级代表性传承人。他出身山歌世家，自幼受家庭氛围熏陶，跟随祖父、父亲学习山歌演唱与编词技巧，在本地知名山歌手母亲的影响下，熟练掌握多元唱腔唱法、即兴编歌与临场对歌技巧，并结合自身音乐天赋对传统歌腔进行改良创新，让传统山歌更加通俗易学、便于传唱。除此之外，他还擅长吹木叶为山歌伴奏，丰富了山歌表演的艺术形式。</p>
          <p>凭借扎实的山歌功底，谢庆良在1997年广西歌王擂台赛中斩获冠军，获评"歌王"称号，成为河池乃至广西极具知名度的山歌艺人。从业多年，他始终扎根山歌传承与传播一线，1994年至今担任宜州山歌学会副会长，曾当选宜州市人大代表、政协委员，积极投身地方文化建设。他常年奔走各地开展山歌文化交流，曾多次赴北京参演节目，并登上央视相关文艺频道，远赴浙江、深圳、海南、贵州等地参与山歌展演活动，广泛传播广西山歌文化。</p>
          <p>在山歌创作上，谢庆良立足生活、贴合时代，创作的山歌风趣质朴、雅俗共赏。自2000年起，他主动以山歌为载体宣传社会正能量与政策知识，编印《农村百事歌谣》《公民道德歌谣》等歌集；新时代以来，他结合社会发展热点，创新创作禁毒、森林防火、医保科普等主题新山歌，让传统非遗文化贴合当代生活、服务社会宣传。</p>
          <p>他深耕非遗育人工作，长期担任河池市老年大学山歌班教师，常态化走进中小学、社区开展山歌教学，普及刘三姐歌谣文化。他悉心培育了韦仕龙、蓝振榕、韦知宝、邓晓等一批优秀青年传承人，多名弟子在各类赛事中斩获佳绩，持续为非遗传承注入了新生力量。</p>
          <p>谢庆良的非遗传承之路成果丰硕：2009年至2012年，他先后入选县级、市级、自治区级、国家级非物质文化遗产代表性传承人名录；2019年获评全国民族团结进步模范个人；2021年度国家级非遗传承活动评估获优秀。他积极参与各类非遗展演活动，2024年参演广西民族博物馆"三月三"文化演出，2025年携刘三姐歌谣登上央视非遗晚会。同时，他紧跟时代潮流，依托传歌台、社交媒体等新媒体新技术拓宽传播渠道，大力推广山歌文化。其个人事迹被收录于《天歌地唱》著作，多次在广西"三月三"官方电视节目中亮相，以多元形式传承、弘扬刘三姐歌谣非遗文化，为广西山歌传承发展、民族团结进步作出了重要贡献。</p>
        </div>
      </div>
    </section>
    <div class="container works-wrap">
      <section class="detail-section">
        <h2 class="section-title">代表作品</h2>
        <div class="works-gallery">
          <div class="work-card" v-for="(item,index) in workList" :key="index" @click="openVideoModal(item)">
            <div class="work-img-block">
              <img v-if="item.imgSrc" :src="item.imgSrc" alt="" class="work-img" />
              <div class="play-icon">
                <img class="play-svg" :src="playSvg" alt="播放" />
              </div>
            </div>
            <h4 class="work-name">{{item.title}}</h4>
          </div>
        </div>
      </section>
    </div>
    <!--视频弹窗，加入缩放过渡动画-->
    <Transition name="videoPopup">
      <div v-if="modalVisible" class="video-modal" @click.self="closeVideoModal">
        <div class="modal-inner">
          <button class="close-btn" @click="closeVideoModal">×</button>
          <video controls autoplay class="modal-video">
            <source :src="currentVideoSrc" type="video/mp4" />
          </video>
        </div>
      </div>
    </Transition>
  </main>
  <Footer />
</div>
</template>
<script setup>
import {ref} from 'vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import playSvg from '../../assets/PlayVideo.svg'
import det01 from '../../assets/inheritor1.png'
import det02 from '../../assets/video1.png'
import det03 from '../../assets/video2.png'
import det04 from '../../assets/video3.png'
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/') 
  }
}
const portraitImg = det01
const inheritorBrief = "宜州仫佬族民间歌手，刘三姐歌谣国家级代表性传承人。<br>分别于2009年5月6日、2015年12月17日、2009年5月26日、2012年12月20日入选县级、市级、自治区级、国家级非物质文化遗产代表性项目代表性传承人名录。<br>1997年，在广西歌王擂台赛中夺冠，成为河池乃至广西知名“歌王”。<br>2019年，获评全国民族团结进步模范个人。<br>多年来，他积极参与广西三月三庆典、非遗晚会等活动，培养弟子韦仕龙等传承人，并通过社交媒体等新技术手段推广山歌文化。"
const modalVisible = ref(false)
const currentVideoSrc = ref('')
const workList = [
  {title:"唱迎宾歌谣(刘三姐歌谣)",imgSrc:det02,videoSrc:"/video/video1.mp4"},
  {title:"唱刘三姐歌谣(兼解说)",imgSrc:det03,videoSrc:"/video/video2.mp4"},
  {title:"与夫人合唱送客歌谣",imgSrc:det04,videoSrc:"/video/video3.mp4"},
]
const openVideoModal = (item)=>{
  currentVideoSrc.value = item.videoSrc
  modalVisible.value = true
}
const closeVideoModal = ()=>{
  modalVisible.value = false
  currentVideoSrc.value = ''
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
/* 返回按钮与导航栏间距 110 */
.main-content{
  padding-top:110px;
}
.back-row{
  margin-bottom:20px;
  margin-left: -40px;
}
.btn-back{
  color:#A05852;
  font-size:15px;
  text-decoration:none;
  cursor:pointer;
}
/* 大标题与基本信息板块 40 */
.page-title{
  text-align:center;
  font-size:40px;
  font-weight:700;
  margin:0 0 40px 0;
  color:#000000;
}
/* 基本信息板块与匠人介绍板块 30 */
.inheritor-info-block{
  display:flex;
  gap:48px;
  align-items:flex-start;
  margin-bottom:30px;
}
.inheritor-portrait{
  width:320px;
  aspect-ratio:1/1;
  background:#707070;
  border-radius:12px;
  overflow:hidden;
  flex-shrink:0;
}
.portrait-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.inheritor-base-text{
  flex:1;
  padding-top:12px;
}
.inheritor-name{
  font-size:32px;
  font-weight:700;
  margin:0 0 18px 0;
  color:#000000;
}
.inheritor-tag-group{
  display:flex;
  gap:10px;
  margin-bottom:20px;
}
.tag{
  background:#5C1E19;
  color:#fff;
  padding:6px 20px;
  border-radius:10px;
  font-size:16px;
  white-space:nowrap;
}
.inheritor-brief{
  font-size:16px;
  line-height:1.8;
  color:#000000;
  margin:0;
}
.detail-section{
  margin-bottom:0;
}
/* 匠人介绍板块背景 */
.bg-alt{
  background:#F6F6F6;
  padding:45px 0;
}
.section-title{
  font-size:32px;
  font-weight:700;
  margin:0;
  color:#000000;
  text-align:left;
}
/* 匠人介绍板块 标题与正文 10 */
.bg-alt .section-title{
  margin-bottom:10px;
}
.story-content{
  font-size:18px;
  line-height:2;
  color:#000000;
}
.story-content p{
  margin:0;
  text-indent:2em;
}
/* 匠人介绍与代表作品 30 */
.works-wrap{
  padding-top:30px;
  padding-bottom:80px;
}
/* 代表作品与作品卡片 20 */
.works-wrap .section-title{
  margin-bottom:20px;
  margin-left: -40px;
}

.works-wrap .detail-section{
  max-width:1150px;
  margin:0 auto;
}

/* 作品卡片之间 40 */
.works-gallery{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:40px;
}
.work-card{
  text-align:left;
  cursor:pointer;
}
.work-img-block{
  position:relative;
  width:100%;
  aspect-ratio:4/3;
  background:#707070;
  border-radius:12px;
  overflow:hidden;
  margin-bottom:25px; /* 作品卡片图片与标题 25 */
}
.work-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.play-icon{
  position:absolute;
  right:12px;
  bottom:12px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.play-svg{
  width:48px;
  height:48px;
  object-fit:contain;
}
.work-name{
  font-size:24px;
  margin:0;
  color:#000000;
  text-align:left;
  font-weight: 400;
}
.video-modal{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.75);
  z-index:999;
  display:flex;
  align-items:center;
  justify-content:center;
}
.modal-inner{
  position:relative;
  max-width:90vw;
  max-height:90vh;
}
.close-btn{
  position:absolute;
  top:-36px;
  right:0;
  background:transparent;
  border:none;
  color:#fff;
  font-size:28px;
  cursor:pointer;
  padding:0 6px;
}
.modal-video{
  max-width:100%;
  max-height:85vh;
  width:auto;
  height:auto;
  border-radius:8px;
}
/* Vue Transition缩放动画 */
.videoPopup-enter-from{
  transform:scale(0.65);
  opacity:0;
}
.videoPopup-enter-active{
  transition:all 0.32s ease-out;
}
.videoPopup-enter-to{
  transform:scale(1);
  opacity:1;
}
.videoPopup-leave-from{
  transform:scale(1);
  opacity:1;
}
.videoPopup-leave-active{
  transition:all 0.24s ease-in;
}
.videoPopup-leave-to{
  transform:scale(0.65);
  opacity:0;
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
  }
  .page-title{
    font-size:28px;
  }
  .inheritor-info-block{
    flex-direction:column;
    gap:24px;
  }
  .inheritor-portrait{
    width:100%;
  }
  .inheritor-name{
    font-size:30px;
  }
  .bg-alt{
    padding:40px 0;
  }
  .works-wrap{
    padding-top:30px;
    padding-bottom:50px;
  }
  .works-gallery{
    grid-template-columns:1fr;
  }
  .modal-inner{
    max-width:94vw;
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
