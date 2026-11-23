<!-- src/views/NewsDetail.vue -->
<template>
<div class="news-detail-page" style="background:#F2F0F0;">
   <Header />
  <main class="main-wrap">
    <div class="container">
      <!-- 返回按钮 -->
      <div class="back-btn-wrap">
        <a href="#" class="btn-back" @click.prevent="$router.back()">&lt;返回</a>
      </div>
      <div class="detail-title-wrap">
        <h1 class="detail-title">"景德镇手工瓷业遗存"列入《世界遗产名录》</h1>
        <div class="sub-wrap">
          <p class="detail-sub">在第48届世界遗产大会上，"景德镇手工瓷业遗存"入选《世界遗产名录》，我国世界遗产数量增至61项。该遗存完整保存古代制瓷全链条遗迹，见证中国瓷业技术与中外文明交流的辉煌历史。</p>
        </div>
      </div>
      <div class="big-img-block sub-wrap">
        <img v-if="news01" :src="news01" alt="" class="big-img" />
      </div>
      <div class="text-block content-narrow">
        <p>新华社韩国釜山7月25日电 当地时间25日，联合国教科文组织第48届世界遗产大会于韩国釜山举行。由我国申报的"景德镇手工瓷业遗存"项目经大会审议表决，正式列入《世界遗产名录》，我国世界遗产数量由此达到61项。</p>
        <p>该遗存坐落于江西省东北部，整体划分为镇区瓷业生产中心、湖田古瓷窑址、高岭瓷土矿遗址、长岭瓷石矿遗址、蛟潭窑柴燃料产区五大板块。项目涵盖御窑厂窑址、水陆运输网络遗存等15组遗产要素，共计45处遗产点位；遗产区占地1979公顷，缓冲区5545.7公顷，全域合计7524.7公顷。</p>
      </div>
      <div class="two-col-img-wrap content-narrow">
        <div class="img-item">
          <img v-if="news02" :src="news02" alt="" class="col-img" />
        </div>
        <div class="img-item">
          <img v-if="news03" :src="news03" alt="" class="col-img" />
        </div>
      </div>
      <div class="text-block content-narrow">
        <p>作为10-19世纪景德镇手工制瓷产业体系的实物见证，这处遗存记录了古代制瓷工艺、瓷器美学与瓷业产业的迭代发展，印证中国手工制瓷对全球瓷业进步与文明互鉴带来的深远作用。</p>
        <p>世界遗产委员会充分肯定该遗存具备的真实性与完整性。评价指出，10至19世纪的景德镇在制瓷工艺、艺术审美上不断融合创新，为研究古代完整制瓷生产流程提供了独一无二的实物证据，也是全球制瓷技术、产业模式革新的典范。景德镇青花瓷作为中华文化向外传播的标志性符号，有力推动中华文明走向世界。委员会也对我国在该遗产保护管理工作中投入的努力与取得的成果予以高度肯定。</p>
        <p>文化和旅游部副部长、国家文物局局长饶权代表中方作出表态，我国将严格恪守《世界遗产公约》相关义务，持续开展遗产系统性保护、传承与活化利用，携手国际机构与各国，共同守护这份珍贵的人类文明财富。</p>
      </div>
      <section class="section-wrap recommend-section">
        <div class="section-head">
          <div class="section-title">
            <h2>其他资讯</h2>
          </div>
        </div>
        <div class="card-group-wrap">
          <div class="recommend-card-list">
            <div class="recommend-card">
              <div class="card-img-block">
                <img v-if="news04" :src="news04" alt="" class="card-img" />
              </div>
              <h4 class="card-title" title="博物馆暑期热展，非遗文物焕发新生">博物馆暑期热展，非遗文物焕发新生</h4>
              <p class="card-desc" title="多地博物馆推出非遗主题暑期特展，大批珍贵文物集中展出。">多地博物馆推出非遗主题暑期特展，大批珍贵文物集中展出。</p>
            </div>
            <div class="recommend-card">
              <div class="card-img-block">
                <img v-if="news05" :src="news05" alt="" class="card-img" />
              </div>
              <h4 class="card-title" title="传统刺绣技艺大赛火热开展">传统刺绣技艺大赛火热开展</h4>
              <p class="card-desc" title="非遗刺绣大赛面向手工艺爱好者征集创作作品，鼓励传统刺绣技艺创新实践。">非遗刺绣大赛面向手工艺爱好者征集创作作品，鼓励传统刺绣技艺创新实践。</p>
            </div>
            <div class="recommend-card">
              <div class="card-img-block">
                <img v-if="news06" :src="news06" alt="" class="card-img" />
              </div>
              <h4 class="card-title" title="暑日观古卷・非遗主题卷轴画展隆重举行">暑日观古卷・非遗主题卷轴画展隆重举行</h4>
              <p class="card-desc" title="暑期卷轴画非遗特展正式开展，汇集多幅古代书画卷轴，带领参观者品读传统笔墨画卷。">暑期卷轴画非遗特展正式开展，汇集多幅古代书画卷轴，带领参观者品读传统笔墨画卷。</p>
            </div>
            <div class="recommend-card">
              <div class="card-img-block">
                <img v-if="news07" :src="news07" alt="" class="card-img" />
              </div>
              <h4 class="card-title" title="传统药草市集开市，体味本草非遗烟火">传统药草市集开市，体味本草非遗烟火</h4>
              <p class="card-desc" title="中药市集开市，各类本草药材有序陈列。">中药市集开市，各类本草药材有序陈列。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <Footer />
</div>
</template>

<script setup>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import news01 from '../../assets/jingdezhen1.png'
import news02 from '../../assets/jingdezhen2.png'
import news03 from '../../assets/jingdezhen3.png'
import news04 from '../../assets/museum_sq.png'
import news05 from '../../assets/embroideryCom_sq.png'
import news06 from '../../assets/artShow.png'
import news07 from '../../assets/market._sq.png'
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
/* 文本段落：首行缩进2字符 */
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
/* 其他资讯板块 */
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
/* 其他资讯图片固定200×200，保持比例 */
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
  color:#000000;
  width:100%;
  overflow:hidden;
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
}
.card-desc{
  color:#000000;
  font-size:16px;
  text-align:left;
  width:100%;
  overflow:hidden;
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
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
