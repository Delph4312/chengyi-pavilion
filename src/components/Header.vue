<!-- src/components/Header.vue -->
<template>
  <header class="header" :class="{ 'header-transparent': isTransparent }">
    <div class="logo-wrap">
      <router-link to="/" class="logo-link">
        <img class="logo-img" :src="logoImg" alt="网站logo" />
      </router-link>
    </div>
    <nav class="nav-menu">
      <router-link to="/">首页</router-link>
      <router-link to="/category">品类</router-link>
      <router-link to="/inherit">传承</router-link>
      <router-link to="/interact">交流</router-link>
      <router-link to="/construction">关于</router-link>
    </nav>
    <div class="header-right">
      <div class="search-wrap">
        <input class="search-input" placeholder="搜索" />
        <img class="search-icon" :src="searchIcon" alt="" />
      </div>
      <router-link to="/login" class="user-icon">
        <img class="user-icon-img" :src="userIcon" alt="" />
      </router-link>
    </div>
  </header>
</template>

<script setup>
import logoImg from '../assets/logo_wh.png'
import userIcon from '../assets/User.svg'
import searchIcon from '../assets/Search.svg'
// props：控制导航栏是否透明
const props = defineProps({
  isTransparent: {
    type: Boolean,
    default: false // 默认false，使用首页半透明背景
  }
})
</script>

<style scoped>
.header{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:72px;
  box-sizing:border-box;
  background:rgba(92, 30, 25, 0.9);
  color:#fff;
  display:flex;
  align-items:center;
  padding:0 48px;
  gap:32px;
  z-index:10;
}
/* 透明背景，文化列表页启用 */
.header-transparent{
  background: transparent;
}
.logo-wrap{
  flex-shrink:0;
}
.logo-link{
  display:block;
  line-height:0;
}
.logo-img{
  height:48px;
  width:auto;
  display:block;
  object-fit:contain;
}
.nav-menu{
  display:flex;
  gap:40px;
}
.nav-menu a{
  color:#ffffff;
  font-size:15px;
  text-decoration:none;
}
.header-right{
  margin-left:auto;
  display:flex;
  align-items:center;
  gap:12px;
}
.search-wrap{
  position:relative;
  display:flex;
  align-items:center;
}
.search-input{
  padding:6px 32px 6px 12px;
  border-radius:14px;
  border:none;
  width:180px;
  outline: none;
}
.search-input:focus{
  border: none;
  outline: none;
}
.search-icon{
  position:absolute;
  right:10px;
  top:50%;
  transform:translateY(-50%);
  width:15px;
  height:15px;
  display:block;
  object-fit:contain;
  pointer-events:none;
}
.user-icon{
  display:flex;
  align-items:center;
  justify-content:center;
  width:32px;
  height:32px;
}
.user-icon-img{
  width:22px;
  height:22px;
  display:block;
  object-fit:contain;
}
/* 移动端样式 */
@media(max-width:768px){
  .header{
    position:relative;
    height:auto;
    flex-wrap:wrap;
    gap:12px;
    padding:14px 20px;
    background: #5C1E19 !important;
  }
  .nav-menu{
    gap:18px;
  }
}
</style>
