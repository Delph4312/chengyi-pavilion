<!-- src/components/Footer.vue -->
<template>
  <footer class="footer" style="background:#ffffff;">
    <div class="container footer-inner">
      <div class="footer-logo-wrap">
        <router-link to="/" class="footer-logo-link">
          <img class="footer-logo-img" :src="footerLogoImg" alt="网站logo" />
        </router-link>
      </div>
      <div class="footer-column-group">
        <div class="footer-column">
          <h4>关于我们</h4>
          <ul>
            <li><a href="#">授权协议</a></li>
            <li><a href="#">隐私政策</a></li>
            <li><a href="#">版权声明</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>常见问题</h4>
          <ul>
            <li><a href="#">使用帮助</a></li>
            <li><a href="#">账号问题</a></li>
            <li><a href="#">反馈建议</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>合作洽谈</h4>
          <ul>
            <li><a href="#">商务合作</a></li>
            <li><a href="#">学术合作</a></li>
            <li><a href="#">政府合作</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>联系我们</h4>
          <ul>
            <li><a href="#">联系方式</a></li>
            <li><a href="#">站点地图</a></li>
            <li><a href="#">平台账号</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import footerLogoImg from '../assets/logo.png'
</script>

<style scoped>
.footer{
  padding:30px 100px 30px 100px;
}
.footer-inner{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
}
.footer-logo-wrap{
  line-height:0;
}
.footer-logo-link{
  display:block;
  line-height:0;
}
.footer-logo-img{
  margin-top: 10px;
  height:100px;
  width:auto;
  display:block;
  object-fit:contain;
}
.footer-column-group{
  display:flex;
  gap:150px;
}
.footer-column{
  text-align:left;
}
.footer-column h4{
  margin:0 0 14px 0;
  font-size:16px;
  text-align:left;
}
.footer-column ul{
  padding:0;
  margin:0;
}
.footer-column li{
  list-style:none;
  margin:8px 0;
  font-size:14px;
}
.footer-column li a{
  color:#555555;
  text-decoration:none;
}

@media(max-width:768px){
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
