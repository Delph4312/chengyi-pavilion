<!-- src/views/CultureDetail.vue -->
<template>
<div class="culture-detail-page" style="background:#F2F0F0;">
  <!-- 导航栏 -->
   <Header />
  <main class="main-wrap">
    <div class="container">
      <!-- 返回按钮 -->
      <div class="back-btn-wrap">
        <a href="#" class="btn-back" @click="$router.back()">&lt;返回</a>
      </div>
      <div class="detail-title-wrap">
        <h1 class="detail-title">鼓乐</h1>
        <div class="sub-wrap">
          <p class="detail-sub">鼓乐是以各类鼓为核心演奏乐器，搭配锣、镲等打击乐器共同构成的民间器乐艺术。代表性项目有绛州鼓乐、晋南威风锣鼓、陕西鼓乐等，广泛运用于节庆、祭祀民俗活动，演奏气势雄浑热烈，节奏变化丰富，生动展现民间集体音乐的磅礴生命力。</p>
        </div>
      </div>
      <!-- 顶图 -->
      <div class="big-img-block sub-wrap">
        <img v-if="pic01" :src="pic01" alt="鼓乐主图" class="big-img" />
      </div>
      <!-- 第一段文字介绍 -->
      <div class="text-block content-narrow">
        <p>鼓乐是我国流传极广的民间打击器乐艺术，以各类鼓为核心演奏乐器，搭配锣、镲等铜响打击乐器合奏。绛州鼓乐、晋南威风锣鼓、陕西鼓乐都是鼓乐当中极具代表性的国家级非遗项目。每逢节庆集会、祭祀民俗、庙会展演，鼓乐便是烘托气氛的重要形式。演奏时鼓手手法丰富多变，节奏铿锵雄浑，或激昂奔腾，或错落婉转。鼓乐根植于乡土民间，没有严苛的文人雅乐门槛，百姓都可以参与欣赏。它承载着各地民众的精神寄托，记录地域民俗风貌，依靠师徒口传心授代代传承，鲜活展现出中华民间集体音乐蓬勃旺盛的生命力。</p>
      </div>
      <!-- 双图并排模块 -->
      <div class="two-col-img-wrap content-narrow">
        <div class="img-item">
          <img v-if="pic02" :src="pic02" alt="" class="col-img" />
        </div>
        <div class="img-item">
          <img v-if="pic03" :src="pic03" alt="" class="col-img" />
        </div>
      </div>
      <!-- 第二段文字介绍 -->
      <div class="text-block content-narrow">
        <p>不同地域的鼓乐，在乐器配置、表演形式、乐曲套路上形成鲜明的本土特色。北方鼓乐声势宏大，威风锣鼓方阵规模盛大，多人协同击鼓敲锣，场面雄浑壮阔，多用于节日庆典巡游；部分地区鼓乐还融合民俗故事，用节奏演绎情节。南方鼓乐演奏更为灵动细腻，常和地方戏曲、民俗祭祀相结合，配合民俗仪式进行表演。</p>
        <p>传统鼓乐过去大多依靠老艺人记谱，很多乐曲没有书面乐谱，全凭记忆与口传心授传承。时代发展之下，不少鼓乐传承人整理传统曲目，走进校园开展教学，也登上各类舞台展演。鼓乐不只是单纯的器乐演奏，更是民俗文化的载体，见证民众的喜乐节庆。作为传统音乐类非物质文化遗产，鼓乐保留了民间艺术原生的活力，是中华传统音乐宝库中不可或缺的重要组成部分。</p>
      </div>
      <!-- 其他推荐 -->
      <section class="section-wrap recommend-section">
        <div class="section-head">
          <div class="section-title">
            <h2>其他推荐</h2>
          </div>
        </div>
        <div class="card-group-wrap">
          <div class="recommend-card-list">
            <div class="recommend-card">
              <div class="card-img-block">
                <img v-if="pic04" :src="pic04" alt="" class="card-img" />
              </div>
              <h4 class="card-title">古琴艺术</h4>
              <p class="card-desc">文人雅乐，七弦抒发千古意境</p>
            </div>
            <div class="recommend-card">
              <div class="card-img-block">
                <img v-if="pic05" :src="pic05" alt="" class="card-img" />
              </div>
              <h4 class="card-title">琵琶艺术</h4>
              <p class="card-desc">弹拨古乐，演绎万千曲韵</p>
            </div>
            <div class="recommend-card">
              <div class="card-img-block">
                <img v-if="pic06" :src="pic06" alt="" class="card-img" />
              </div>
              <h4 class="card-title">民族器乐‑彝族月琴</h4>
              <p class="card-desc">圆形弹拨，音色清亮明快</p>
            </div>
            <div class="recommend-card">
              <div class="card-img-block">
                <img v-if="pic07" :src="pic07" alt="" class="card-img" />
              </div>
              <h4 class="card-title">民族器乐‑二胡</h4>
              <p class="card-desc">丝弦哀婉，诉说人间悲欢</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <!-- 页脚 -->
  <Footer />
</div>
</template>
<script setup>
import Header from '../../components/Header.vue'
import logoImg from '../../assets/logo_wh.png'
import Footer from '../../components/Footer.vue'
import userIcon from '../../assets/User.svg'
import searchIcon from '../../assets/Search.svg'
import pic01 from '../../assets/drum_p1.png'
import pic02 from '../../assets/drum_p2.png'
import pic03 from '../../assets/drum_p3.png'
import pic04 from '../../assets/guqin_sq.png'
import pic05 from '../../assets/pipa_sq.png'
import pic06 from '../../assets/yueqin.png'
import pic07 from '../../assets/erhu_sq.png'
</script>
<style scoped>
.main-wrap{
  padding-top:112px;
  padding-bottom:72px;
}
.container{
  max-width:1440px;
  margin:0 auto;
  padding:0 48px;
}
.back-btn-wrap{
  margin-bottom:30px;
}
.btn-back{
  color:#A05852;
  text-decoration:none;
  font-size:16px;
  margin-left:-48px;
  display:inline-block;
}
/* 正文+双图整体居中 */
.content-narrow{
  max-width:920px;
  margin-left:auto !important;
  margin-right:auto !important;
}
/* 标题 */
.detail-title-wrap{
  margin-bottom:30px;
}
.detail-title{
  font-size:48px;
  margin:0 0 12px 0;
}
/* 摘要、首图 */
.sub-wrap{
  max-width:1200px;
  margin:0 auto;
}
.detail-sub{
  font-size:16px;
  color:#000000;
  margin:0;
  line-height:1.6;
}
/* 顶部大图保持页面原始宽度 */
.big-img-block{
  border-radius:8px;
  overflow:hidden;
  margin:0 auto 30px;
}
.big-img{
  width:100%;
  height:auto;
  display:block;
  object-fit:cover;
}
/* 文本段落 */
.text-block{
  margin:30px 0;
  font-size:18px;
  line-height:1.75;
  color:#000000;
}
.text-block p{
  text-indent:2em;
  margin:0 0 16px 0;
}
.text-block p:last-child{
  margin-bottom:0;
}
/* 两栏并排图片 */
.two-col-img-wrap{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:24px;
  margin:30px 0;
}
.img-item{
  border-radius:8px;
  overflow:hidden;
}
.col-img{
  width:100%;
  height:auto;
  display:block;
  object-fit:cover;
}
/* 其他推荐板块 */
.section-wrap{
  margin-top:30px;
  padding-top:0;
}
.section-head{
  margin-bottom:20px;
}
.section-title h2{
  font-size:32px;
  margin:0;
}
.card-group-wrap{
  max-width:1200px;
  margin:0 auto;
}
.recommend-card-list{
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:50px;
}
.recommend-card{
  text-align:left;
}
/* 其他推荐图片固定200×200，保持比例 */
.card-img-block{
  width:250px;
  height:250px;
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
  font-size:17px;
  margin-bottom:6px;
  text-align:left;
}
.card-desc{
  color:#000000;
  font-size:16px;
  text-align:left;
}
/* 响应式适配 */
@media(max-width:1200px){
  .card-group-wrap{
    max-width:100%;
  }
  .recommend-card-list{
    grid-template-columns: repeat(2,1fr);
    gap:30px;
  }
  .card-img-block{
    width:100%;
    height:auto;
    aspect-ratio:1/1;
  }
}
@media(max-width:768px){
  .container{
    padding:0 20px;
  }
  .btn-back{
    margin-left:0;
  }
  .main-wrap{
    padding-top:40px;
  }
  .content-narrow,
  .sub-wrap{
    max-width:100%;
  }
  .two-col-img-wrap{
    grid-template-columns:1fr;
  }
  .recommend-card-list{
    grid-template-columns:1fr;
    gap:30px;
  }
  .section-wrap{
    padding:40px 0;
  }
}
</style>
