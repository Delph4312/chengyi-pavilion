<!-- src/views/inheritor/InheritorList.vue -->
<template>
<div class="inheritor-list-page" style="background:#F2F0F0;">
   <Header />
  <main class="main-content">
    <div class="container">
      <div class="back-row">
        <a class="btn-back" @click="goBack">&lt;返回</a>
      </div>
      <h1 class="page-title">非遗文化传承人</h1>
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
          <button class="filter-btn">筛选</button>
          <button class="reset-btn">重置</button>
        </div>
      </div>
      <div class="inheritor-cards">
        <div class="inheritor-card" v-for="(person,index) in inheritorList" :key="index" @click="person.path && router.push(person.path)">
          <div class="avatar-block">
            <img v-if="person.imgSrc" :src="person.imgSrc" alt="" class="avatar-img" />
          </div>
          <div class="card-info">
            <h3 class="person-name">{{person.name}}</h3>
            <div class="tag-row">
              <span class="person-tag">{{person.category}}</span>
              <span class="person-tag">{{person.level}}</span>
            </div>
            <p class="person-desc" v-html="person.intro"></p>
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
import inh01 from '../../assets/inheritor1.png'
import inh02 from '../../assets/inheritor2.png'
import inh03 from '../../assets/inheritor3.png'
import inh04 from '../../assets/inheritor4.png'
import inh05 from '../../assets/inheritor5.png'
const inheritorList = [
  {
    name:"谢庆良",
    category:"刘三姐歌谣",
    level:"国家级传承人",
    intro:"宜州仫佬族民间歌手，刘三姐歌谣国家级代表性传承人。<br>分别于2009年5月6日、2015年12月17日、2009年5月26日、2012年12月20日入选县级、市级、自治区级、国家级非物质文化遗产代表性项目代表性传承人名录。",
    imgSrc:inh01,
    path:"/inherit/detail"
  },
  {
    name:"黄月香",
    category:"刘三姐歌谣",
    level:"自治区级传承人",
    intro:"宜州壮族民间女歌手，刘三姐歌谣自治区级代表性传承人。<br>从小向父亲学唱刘三姐歌谣，壮汉兼学，早晚歌不离口，1990年开始参加各种山歌比赛，2000年获得河池地区歌王称号，2001年成为广西歌王。",
    imgSrc:inh02,
    path:""
  },
  {
    name:"黄月霜",
    category:"刘三姐歌谣",
    level:"自治区级传承人",
    intro:"宜州壮族民间女歌手，宜州区刘三姐歌谣代表性传承人。<br>2001年参加广西农村山歌会“九月唱丰收”歌王比赛中获歌王奖；2005年9月参加广西首届民族团结杯山歌比赛获一等奖；同年10月参加广西廉政山歌邀请赛获歌王奖；合著《情醉歌乡》等多部山歌集。",
    imgSrc:inh03,
    path:""
  },
  {
    name:"李连元",
    category:"抖空竹",
    level:"国家级传承人",
    intro:"北京抖空竹传承人，汉族，第一批国家级非物质文化遗产项目抖空竹代表性传承人，现任北京空竹博物馆馆长、宣武区广内空竹协会会长。<br>他出身空竹世家，5岁起随祖母学习抖空竹，练就了使用渔竿抖“盘丝”空竹等高超技艺。",
    imgSrc:inh04,
    path:""
  },
  {
    name:"张国良",
    category:"空竹制作",
    level:"国家级传承人",
    intro:"北京竹木空竹制作者，人称“空竹张”，现任北京市宣武区广安门内空竹协会理事，北京民间文艺家协会会员。<br>1994年张国良“实用新型空竹制作工艺”成为国家专利。2005、2006年，张国良制作、收藏的空竹珍品分别在人民大会堂、中法文化节和“北京风情 舞动悉尼”文化交流活动中进行展示。",
    imgSrc:inh05,
    path:""
  },
]
</script>
<style scoped>
:root{
  --main-dark:#5C1E19;
}
.container{
  max-width:1440px;
  margin:0 auto;
  padding:0 48px;
}
/* 返回按钮与导航栏间距 110 */
.main-content{
  padding-top:110px;
  padding-bottom:40px;
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
  font-size:16px;
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
  font-size:16px;
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
/* 列表卡片间距 30 */
.inheritor-cards{
  display:flex;
  flex-direction:column;
  gap:30px;
}
.inheritor-card{
  background:#ffffff;
  border-radius:10px;
  padding:40px 48px;
  display:flex;
  align-items:center;
  gap:40px;
  cursor:pointer;
}
.avatar-block{
  width:150px;
  height:150px;
  border-radius:50%;
  background:#707070;
  overflow:hidden;
  flex-shrink:0;
}
.avatar-img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.card-info{
  flex:1;
}

.person-name{
  font-size:28px;
  margin:0 0 10px 0;
  color:#000000;
}

.tag-row{
  display:flex;
  gap:10px;
  margin-bottom:10px;
}
.person-tag{
  background:#5C1E19;
  color:#fff;
  font-size:16px;
  padding:5px 16px;
  border-radius:10px;
  white-space:nowrap;
}

.person-desc{
  color:#000000;
  font-size:16px;
  margin:0;
  line-height:1.6;
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
  .inheritor-card{
    flex-direction:column;
    text-align:center;
    padding:28px 20px;
    gap:20px;
  }
  .tag-row{
    justify-content:center;
  }
  .person-desc{
    text-align:left;
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
