<!-- src/views/Construction.vue -->
<template>
<div class="construction-page" :style="{backgroundImage:`url(${con01})`}">

  <a href="#" class="btn-back" @click="goBack">&lt;返回</a>

  <main class="main-wrap">
    <div class="construction-content">
      <img v-if="constructionIcon" :src="constructionIcon" alt="" class="construction-icon" />
      <h1 class="construction-title">页面正在建设中</h1>
      <p class="construction-desc">该功能正在紧张开发中，敬请期待</p>
    </div>
  </main>

  <div class="page-footer">
    <p>如有任何问题，可联系chengyige2026@mail.com</p>
    <p>用户协议 | 隐私声明 | 版权投诉</p>
  </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import constructionIcon from '../assets/construction.svg'
const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/') 
  }
}
</script>

<style scoped>
.construction-page{
  min-height:100vh;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-color:#F2F0F0;
  position:relative;
}

.btn-back{
  position:absolute;
  top:32px;
  left:48px;
  color:#A05852;
  text-decoration:none;
  font-size:16px;
  padding:8px 22px;
  background:rgba(255,255,255,0.55);
  border-radius:20px;
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
  z-index:5;
}

.main-wrap{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px 20px 120px;
  box-sizing:border-box;
}

.construction-content{
  text-align:center;
}

.construction-icon{
  width:235px;
  height:200px;
  display:block;
  margin:0 auto 24px;
  object-fit:contain;
}

.construction-title{
  font-size:40px;
  font-weight:700;
  color:#5C1E19;
  margin:0 0 10px 0;
}

.construction-desc{
  font-size:16px;
  color:#A05852;
  margin:0;
}

.page-footer{
  position:absolute;
  bottom:16px;
  left:0;
  width:100%;
  text-align:center;
  color:#A05852;
  font-size:14px;
}

.page-footer p{
  margin:0;
  line-height:1.2;
}

@media(max-width:768px){
  .btn-back{
    top:20px;
    left:20px;
    font-size:14px;
    padding:6px 16px;
  }

  .main-wrap{
    padding:20px 20px 140px;
  }

  .construction-title{
    font-size:28px;
  }

  .construction-icon{
    width:56px;
    height:56px;
  }

  .page-footer{
    bottom:20px;
    font-size:12px;
  }
}
</style>
