<!-- src/views/Login.vue -->
<template>
<div class="login-page" :style="{backgroundImage:`url(${log01})`}">
  <a href="#" class="btn-back" @click="goBack">&lt;返回</a>
  <main class="main-wrap">
    <div class="auth-card">
      <div class="auth-tabs">
        <span class="tab" :class="{active:activeTab==='login'}" @click="activeTab='login'">登录</span>
        <span class="tab" :class="{active:activeTab==='register'}" @click="activeTab='register'">注册</span>
      </div>
      <div v-if="activeTab==='login'" class="auth-form">
        <div class="form-row">
          <label class="form-label">账号</label>
          <input v-model="loginForm.account" class="form-input" placeholder="请输入用户名/手机号" />
        </div>
        <div class="form-row">
          <label class="form-label">密码</label>
          <input v-model="loginForm.password" type="password" class="form-input" placeholder="请输入密码" />
        </div>
        <div class="form-row form-options">
          <label class="remember-label">
            <input type="checkbox" v-model="loginForm.remember" /> 记住我
          </label>
          <a href="#" class="forgot-link">忘记密码？</a>
        </div>
        <div class="btn-group">
          <button class="btn-submit" @click="handleLogin">登录</button>
        </div>
      </div>
      <div v-if="activeTab==='register'" class="auth-form">
        <div class="form-row">
          <label class="form-label">账号</label>
          <input v-model="registerForm.account" class="form-input" placeholder="请输入用户名/手机号" />
        </div>
        <div class="form-row">
          <label class="form-label">密码</label>
          <input v-model="registerForm.password" type="password" class="form-input" placeholder="请输入密码" />
        </div>
        <div class="form-row">
          <label class="form-label">确认密码</label>
          <input v-model="registerForm.confirmPassword" type="password" class="form-input" placeholder="请再次输入密码" />
        </div>
        <div class="btn-group">
          <button class="btn-submit" @click="handleRegister">注册</button>
        </div>
      </div>
    </div>
  </main>
  <div class="page-footer">
    <p>如有任何问题，可联系chengyige2026@mail.com</p>
    <p>用户协议 | 隐私声明 | 版权投诉</p>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue'
import log01 from '../assets/background.jpg'
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
const activeTab = ref('login')
const loginForm = ref({
  account:"",
  password:"",
  remember:false
})
const registerForm = ref({
  account:"",
  password:"",
  confirmPassword:""
})
const handleLogin = () => {
  if(!loginForm.value.account.trim()){ alert("请输入账号"); return }
  if(!loginForm.value.password.trim()){ alert("请输入密码"); return }
  alert("调试模式：登录成功（本地模拟）")
}
const handleRegister = () => {
  if(!registerForm.value.account.trim()){ alert("请输入账号"); return }
  if(!registerForm.value.password.trim()){ alert("请输入密码"); return }
  if(registerForm.value.password !== registerForm.value.confirmPassword){ alert("两次密码输入不一致"); return }
  alert("调试模式：注册成功（本地模拟）")
  activeTab.value = 'login'
}
</script>
<style scoped>
.login-page{
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
  color:#ffffff;
  text-decoration:none;
  font-size:16px;
  padding:8px 22px;
  background:rgba(255,255,255,0.18);
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
.auth-card{
  background:rgba(255,255,255,0.92);
  backdrop-filter:blur(12px);
  -webkit-backdrop-filter:blur(12px);
  padding:44px 48px;
  border-radius:16px;
  box-shadow:0 8px 40px rgba(0,0,0,0.18);
  width:440px;
  box-sizing:border-box;
}
.auth-tabs{
  display:flex;
  margin-bottom:30px;
  border-bottom:1px solid #e0e0e0;
}
.tab{
  flex:1;
  text-align:center;
  font-size:18px;
  padding-bottom:12px;
  cursor:pointer;
  color:#999999;
  position:relative;
  transition:color 0.2s;
}
.tab.active{
  color:#5C1E19;
  font-weight:700;
}
.tab.active::after{
  content:'';
  position:absolute;
  bottom:-1px;
  left:50%;
  transform:translateX(-50%);
  width:60%;
  height:3px;
  background:#5C1E19;
  border-radius:2px;
}
.auth-form{
  display:block;
}
.form-row{
  margin-bottom:20px;
  display:flex;
  flex-direction:column;
  gap:10px;
}
.form-label{
  font-size:15px;
  color:#333;
  font-weight:400;
}
.form-input{
  padding:11px 14px;
  border:1px solid #cccccc;
  border-radius:8px;
  font-size:15px;
  outline:none;
  background:#fff;
}
.form-input:focus{
  border-color:#5C1E19;
}
.form-options{
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-bottom:25px;
  margin-top:10px;
}
.remember-label{
  display:flex;
  align-items:center;
  gap:6px;
  font-size:14px;
  color:#666;
  cursor:pointer;
}
.forgot-link{
  font-size:14px;
  color:#A05852;
  text-decoration:none;
}
.btn-group{
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:0;
}
.btn-submit{
  background:#5C1E19;
  color:#fff;
  border:none;
  padding:12px 48px;
  border-radius:10px;
  font-size:16px;
  cursor:pointer;
  width:100%;
}
.page-footer{
  position:absolute;
  bottom:16px;
  left:0;
  width:100%;
  text-align:center;
  color:rgba(255,255,255,0.85);
  font-size:14px;
  line-height:1.2;
}
.page-footer p{
  margin:0;
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
  .auth-card{
    width:100%;
    max-width:440px;
    padding:28px 24px;
  }
  .page-footer{
    bottom:20px;
    font-size:12px;
    line-height:1.2;
  }
}
</style>
