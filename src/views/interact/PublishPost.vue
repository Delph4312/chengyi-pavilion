<!-- src/views/PublishPost.vue -->
<template>
<div class="publish-post-page" style="background:#F2F0F0;">
   <Header />
  <main class="main-wrap">
    <div class="container">
      <div class="back-btn-wrap">
        <a href="#" class="btn-back" @click="goBack">&lt;返回</a>
      </div>
      <h1 class="page-title">发布帖子</h1>
      <div class="form-card">
        <div class="form-row">
          <label class="form-label">标题</label>
          <input v-model="postForm.title" class="form-input" placeholder="请输入标题" />
        </div>
        <div class="form-row">
          <label class="form-label">品类</label>
          <div class="select-wrap">
            <select v-model="postForm.category" class="form-select">
              <option value="">请选择品类</option>
              <option value="传统美术">传统美术</option>
              <option value="传统技艺">传统技艺</option>
              <option value="传统舞蹈">传统舞蹈</option>
              <option value="传统戏剧">传统戏剧</option>
              <option value="传统音乐">传统音乐</option>
              <option value="传统医药">传统医药</option>
              <option value="传统体育">传统体育</option>
              <option value="民俗">民俗</option>
              <option value="曲艺">曲艺</option>
              <option value="民间文学">民间文学</option>
            </select>
            <img class="select-arrow-icon" :src="chevronDownSvg" alt="下拉" />
          </div>
        </div>
        <div class="form-row">
          <label class="form-label">内容</label>
          <div class="editor-wrap">
            <div class="editor-toolbar">
              <span class="tool-btn" v-for="(icon,index) in toolIcons" :key="index">
                <img class="tool-icon" :src="icon" alt="" />
              </span>
            </div>
            <textarea v-model="postForm.content" class="form-textarea" placeholder="请输入内容"></textarea>
          </div>
        </div>
        <div class="btn-group">
          <button class="btn-submit" @click="handleSubmit">发布帖子</button>
          <button class="btn-cancel" @click="handleCancel">取消</button>
        </div>
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
import { ref } from 'vue'
import Footer from '../../components/Footer.vue'
//导入下拉箭头svg
import chevronDownSvg from '../../assets/Chevron down.svg'
import tool01 from '../../assets/Bold.svg'
import tool02 from '../../assets/Italic.svg'
import tool03 from '../../assets/Underline.svg'
import tool04 from '../../assets/List.svg'
import tool05 from '../../assets/Align left.svg'
import tool06 from '../../assets/Image.svg'
import tool07 from '../../assets/Paperclip.svg'
const toolIcons = [tool01, tool02, tool03, tool04, tool05, tool06, tool07]
const postForm = ref({
  title:"",
  category:"",
  content:""
})
const handleSubmit = () => {
  if(!postForm.value.title.trim()){ alert("请填写帖子标题"); return }
  if(!postForm.value.category){ alert("请选择品类"); return }
  if(!postForm.value.content.trim()){ alert("请填写帖子内容"); return }
  alert("调试模式：帖子发布成功（本地模拟）")
  postForm.value.title = ""
  postForm.value.category = ""
  postForm.value.content = ""
}
const handleCancel = () => {
  router.back()
}
</script>
<style scoped>
:root{
  --main-dark:#5C1E19;
  --text-gray:#666666;
  --container-padding:48px;
}
.container{
  max-width:1200px;
  margin:0 auto;
  padding:0 var(--container-padding);
}
.main-wrap{
  padding-top:120px;
  padding-bottom:80px;
}
.back-btn-wrap{
  margin-bottom:48px;
}
.btn-back{
  color:#A05852;
  text-decoration:none;
  font-size:16px;
  font-weight:500;
  margin-left: -48px;
  display:inline-block;
}
.page-title{
  text-align:center;
  font-size:48px;
  font-weight:700;
  margin:0 0 50px 0;
  color:#000000;
}
/* 白矩形底 */
.form-card{
  width:820px;
  height:850px;
  box-sizing:border-box;
  margin:0 auto;
  background:#ffffff;
  padding:48px 60px;
  border-radius:10px;
  display:flex;
  flex-direction:column;
}
.form-row{
  margin-bottom:25px;
  display:flex;
  flex-direction:column;
  gap:8px;
}
.form-label{
  font-size:16px;
  color:#000000;
  font-weight:500;
}
/* 标题、品类输入框 700×50 */
.form-input{
  width:700px;
  height:50px;
  box-sizing:border-box;
  padding:0 16px;
  border:1px solid #cccccc;
  border-radius:8px;
  font-size:15px;
  outline:none;
  background:#fff;
}
.form-input:focus{
  border-color:#5C1E19;
}
.select-wrap{
  position:relative;
}
.form-select{
  width:700px;
  height:50px;
  box-sizing:border-box;
  padding:0 40px 0 16px;
  border:1px solid #cccccc;
  border-radius:8px;
  font-size:15px;
  outline:none;
  background:#fff;
  appearance:none;
  -webkit-appearance:none;
  -moz-appearance:none;
}
.form-select:focus{
  border-color:#5C1E19;
}
.select-arrow-icon{
  position:absolute;
  right:16px;
  top:50%;
  transform:translateY(-50%);
  width:18px;
  height:18px;
  pointer-events:none;
  object-fit:contain;
}
/* 内容编辑器区域700×449 */
.editor-wrap{
  width:700px;
  height:449px;
  box-sizing:border-box;
  border:1px solid #cccccc;
  border-radius:8px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
}
.editor-toolbar{
  display:flex;
  align-items:center;
  gap:18px;
  padding:10px 16px;
  border-bottom:1px solid #eeeeee;
  font-size:16px;
  color:#666;
}
.tool-btn{
  cursor:pointer;
  user-select:none;
  display:flex;
  align-items:center;
  justify-content:center;
  width:24px;
  height:24px;
}
.tool-btn:hover .tool-icon{
  opacity:0.75;
}
.tool-icon{
  width:18px;
  height:18px;
  display:block;
  object-fit:contain;
}
.form-textarea{
  flex:1;
  width:100%;
  border:none;
  padding:15px;
  font-size:16px;
  resize:none;
  outline:none;
  box-sizing:border-box;
  font-family:inherit;
}
.btn-group{
  display:flex;
  align-items:center;
  gap:10px;
  margin-top:auto;
}
.btn-submit{
  background:#5C1E19;
  color:#fff;
  border:none;
  padding:6px 18px;
  border-radius:10px;
  font-size:15px;
  cursor:pointer;
}
.btn-cancel{
  background:#5C1E19;
  color:#fff;
  border:none;
  padding:6px 18px;
  border-radius:10px;
  font-size:15px;
  cursor:pointer;
}
@media(max-width:880px){
  .form-card{
    width:100%;
    height:auto;
  }
  .form-input,.form-select,.editor-wrap{
    width:100%;
  }
}
@media(max-width:768px){
  :root{
    --container-padding:20px;
  }
  .btn-back{
    margin-left:0;
  }
  .main-wrap{
    padding-top:40px;
    padding-bottom:50px;
  }
  .page-title{
    font-size:28px;
  }
  .form-card{
    padding:24px 20px;
  }
}
</style>
