<!-- src/components/Pagination.vue -->
<template>
  <div class="pagination-wrap">
    <span class="page-num">1</span>
    <span class="page-num">2</span>
    <span class="page-num">3</span>
    <span>……</span>
    <span class="page-num">10</span>
    <span>跳转至</span>
    <input class="page-input" type="text" />
    <span>页</span>
    <button class="page-confirm">确定</button>
  </div>
</template>

<script setup>

</script>

<style scoped>
.pagination-wrap{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:18px;
  margin-top:40px;
}
.page-num{
  cursor:pointer;
}
.page-input{
  width:48px;
  height:22px;
  padding:4px;
  border:none;
  border-radius:6px;
  text-align:center;
  outline:none;
  box-shadow:none;
}
.page-confirm{
  background:#5C1E19;
  color:#fff;
  border:none;
  padding:3px 12px;
  border-radius:6px;
  font-size:14px;
}
@media(max-width:768px){
  .pagination-wrap{
    flex-wrap:wrap;
  }
}
</style>
