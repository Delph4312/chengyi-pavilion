<!-- src/views/inheritor/TechGuide.vue -->
<template>
<div class="tech-guide-page" style="background:#F2F0F0;">
   <Header />
  <main class="main-content">
    <div class="container">
      <div class="back-row">
        <a class="btn-back" @click="goBack">&lt;返回</a>
      </div>
      <h1 class="page-title">技艺科普讲解</h1>
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
          <span class="filter-label">技艺名称</span>
          <input class="name-input" placeholder="请输入技艺名称" />
          <button class="filter-btn">筛选</button>
          <button class="reset-btn">重置</button>
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
import tech01 from '../../assets/tech1.png'
import tech02 from '../../assets/tech2.png'
import tech03 from '../../assets/tech3.png'
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
  },
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
/* 筛选卡片与列表间距 40 */
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
.content-container{
  width:100%;
  margin:0 auto;
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
/* 小标题与文本之间 10 */
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
  .list-item{
    grid-template-columns:1fr;
    gap:20px;
  }
  .item-list{
    gap:48px;
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
