// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  //根页面
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/construction', name: 'Construction', component: () => import('../views/Construction.vue') },

  //品类 category
  { path: '/category', name: 'CategoryPage', component: () => import('../views/categorypage/CategoryPage.vue') },
  { path: '/category/art', name: 'Art', component: () => import('../views/categorypage/Art.vue') },
  { path: '/category/music', name: 'Music', component: () => import('../views/categorypage/Music.vue') },
  { path: '/culture/detail', name: 'CultureDetail', component: () => import('../views/categorypage/CultureDetail.vue') },
  { path: '/category/technique', name: 'Technique', component: () => import('../views/categorypage/Technique.vue') },

  //传承 inherit
  { path: '/inherit', name: 'Inherit', component: () => import('../views/inherit/Inherit.vue') },
  { path: '/inherit/list', name: 'InheritorList', component: () => import('../views/inherit/InheritorList.vue') },
  { path: '/inherit/detail', name: 'InheritorDetail', component: () => import('../views/inherit/InheritorDetail.vue') },
  { path: '/inherit/artwork', name: 'ArtworkGallery', component: () => import('../views/inherit/ArtworkGallery.vue') },
  { path: '/inherit/technique', name: 'TechniquePur', component: () => import('../views/inherit/TechniquePur.vue') },

  //互动 interact
  { path: '/interact', name: 'Interact', component: () => import('../views/interact/Interact.vue') },
  { path: '/news', name: 'NewsList', component: () => import('../views/interact/NewsList.vue') },
  { path: '/news/detail', name: 'NewsDetail', component: () => import('../views/interact/NewsDetail.vue') },
  { path: '/post', name: 'PostList', component: () => import('../views/interact/PostList.vue') },
  { path: '/post/publish', name: 'PublishPost', component: () => import('../views/interact/PublishPost.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition   // 前进/后退时恢复原位置
    } else {
      return { top: 0 }      // 普通跳转回到页面顶部
    }
  }
})

export default router