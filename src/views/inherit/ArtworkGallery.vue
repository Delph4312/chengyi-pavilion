<!-- src/views/inheritor/WorkGallery.vue -->
<template>
<div class="work-gallery-page" style="background:#F2F0F0;">
   <Header />
  <main class="main-content">
    <div class="container">
      <div class="back-row">
        <a class="btn-back" @click="goBack">&lt;返回</a>
      </div>
      <h1 class="page-title">匠人作品画廊</h1>
      <div class="filter-card">
        <div class="filter-row">
          <span class="filter-label">项目品类</span>
          <div class="checkbox-group">
            <label class="checkbox-item"><input type="checkbox" />民间文学</label>
            <label class="checkbox-item"><input type="checkbox" />传统音乐</label>
            <label class="checkbox-item"><input type="checkbox" />传统舞蹈</label>
            <label class="checkbox-item"><input type="checkbox" />传统戏剧</label>
            <label class="checkbox-item"><input type="checkbox" />曲艺</label>
            <label class="checkbox-item"><input type="checkbox" />传统体育、<br>游艺与杂技</label>
            <label class="checkbox-item"><input type="checkbox" />传统美术</label>
            <label class="checkbox-item"><input type="checkbox" />传统技艺</label>
            <label class="checkbox-item"><input type="checkbox" />传统医药</label>
            <label class="checkbox-item"><input type="checkbox" />民俗</label>
          </div>
        </div>
        <div class="filter-row">
          <span class="filter-label">传承人名称</span>
          <input class="name-input" placeholder="请输入传承人名称" />
          <span class="filter-label filter-label-inline">作品名称</span>
          <input class="name-input" placeholder="请输入作品名称" />
          <button class="filter-btn">筛选</button>
          <button class="reset-btn">重置</button>
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
import gal01 from '../../assets/work1.png'
import gal02 from '../../assets/work2.png'
import gal03 from '../../assets/work3.png'
import gal04 from '../../assets/work4.png'
import gal05 from '../../assets/work5.png'
import gal06 from '../../assets/work6.png'
const workList = [
  {title:"金石篆文拓本",desc:"传承古老金石篆刻技艺，将古碑铭文拓…",fullDesc:"传承古老金石篆刻技艺，将古碑铭文拓印留存。",imgSrc:gal01},
  {title:"山水鸣琴·古琴演奏",desc:"古琴传统演奏技艺，指尖拨弄七弦，演…",fullDesc:"古琴传统演奏技艺，指尖拨弄七弦，演绎清雅悠远的东方古乐意境。",imgSrc:gal02},
  {title:"川剧变脸脸谱艺术",desc:"川剧经典变脸绝活，瞬息之间变换脸谱…",fullDesc:"川剧经典变脸绝活，瞬息之间变换脸谱，尽显巴蜀戏曲非遗的独特魅力。",imgSrc:gal03},
  {title:"昆曲戏韵",desc:"昆曲传统旦角表演，水袖翩跹，唱腔婉…",fullDesc:"昆曲传统旦角表演，水袖翩跹，唱腔婉转，演绎古典戏曲的婉转情思。",imgSrc:gal04},
  {title:"民间弦乐合奏",desc:"传统民间二胡曲艺，老匠人现场演奏，…",fullDesc:"传统民间二胡曲艺，老匠人现场演奏，流淌烟火人间的市井民乐之声。",imgSrc:gal05},
  {title:"石刻碑雕遗存",desc:"传统石刻技艺，刀刻于石，留存诗文墨…",fullDesc:"传统石刻技艺，刀刻于石，留存诗文墨迹，记录代代流传的人文故事。",imgSrc:gal06},
]
</script>
<style scoped>
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
/* 标题与筛选卡片间距 40 */
.page-title{
  text-align:center;
  font-size:40px;
  font-weight:700;
  margin:0 0 40px 0;
  color:#000000;
}
/* 筛选卡片与三列图间距 40 */
.filter-card{
  background:#ffffff;
  border-radius:10px;
  padding:32px 40px;
  margin-bottom:40px;
}
.filter-row{
  display:flex;
  align-items:center;
  gap:20px;
  font-weight: 300;
}
.filter-row + .filter-row{
  margin-top:24px;
}
.filter-label{
  flex-shrink:0;
  width:90px;
  font-size:15px;
  color:#000000;
  font-weight: 300;
}
.filter-label-inline{
  width:auto;
}
.checkbox-group{
  display:flex;
  flex-wrap:wrap;
  gap:18px 28px;
  flex:1;
}
.checkbox-item{
  display:flex;
  align-items:center;
  gap:6px;
  font-size:14px;
  color:#000000;
  cursor:pointer;
  white-space:nowrap;
}
.checkbox-item input{
  cursor:pointer;
}
.name-input{
  padding:6px 10px;
  border:1px solid #ccc;
  border-radius:6px;
  width:200px;
  outline:none;
  font-size:16px;
}
.filter-btn,
.reset-btn{
  background:#5C1E19;
  color:#fff;
  border:none;
  padding:5px 22px;
  border-radius:10px;
  font-size:14px;
  cursor:pointer;
}
.card-group-wrap{
  width:100%;
  margin:0 auto;
}
.gallery-card-list{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:30px;
}
.gallery-card{
  background:#ffffff;
  border-radius:8px;
  overflow:hidden;
  text-align:left;
  transition:0.25s ease;
  cursor: pointer;
}
.gal-card-img-block{
  aspect-ratio:4/3;
  background:#707070;
  overflow:hidden;
  transition:0.25s ease;
}
.card-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.gallery-card .card-title{
  font-size:24px;
  margin:0;
  padding:14px 16px 6px;
  text-align:left;
  color:#000000;
  overflow:hidden;
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
  font-weight: 400;
}
.gallery-card .card-desc{
  color:#000000;
  font-size:16px;
  margin:0;
  padding:0 16px 16px;
  text-align:left;
  overflow:hidden;
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
}
/* hover悬浮效果，和品类卡片保持完全一致 */
.gallery-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
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
  .page-title{
    font-size:28px;
  }
  .filter-card{
    padding:24px 20px;
  }
  .filter-row{
    flex-direction:column;
    align-items:flex-start;
    gap:12px;
  }
  .filter-label{
    width:auto;
  }
  .gallery-card-list{
    grid-template-columns:1fr;
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
