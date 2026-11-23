<!-- src/App.vue -->
<template>
  <router-view />
</template>

<style>
	/* ==================== 思源黑体字体引入 ==================== */
	/* 细字重 300 —— 辅助文本、提示备注 */
	@font-face {
	  font-family: "Source Han Sans CN";
	  src: url("./assets/fonts/SourceHanSansCN-Light.ttf") format("truetype");
	  font-weight: 300;
	  font-style: normal;
	  font-display: swap;
	}
	/* 常规字重 400 —— 正文、H3标题、Banner简介 */
	@font-face {
	  font-family: "Source Han Sans CN";
	  src: url("./assets/fonts/SourceHanSansCN-Regular.ttf") format("truetype");
	  font-weight: 400;
	  font-style: normal;
	  font-display: swap;
	}
	/* 中等字重 500 —— 标签文字 */
	@font-face {
	  font-family: "Source Han Sans CN";
	  src: url("./assets/fonts/SourceHanSansCN-Medium.ttf") format("truetype");
	  font-weight: 500;
	  font-style: normal;
	  font-display: swap;
	}
	/* 粗体字重 700 —— H2及以上标题 */
	@font-face {
	  font-family: "Source Han Sans CN";
	  src: url("./assets/fonts/SourceHanSansCN-Bold.ttf") format("truetype");
	  font-weight: 700;
	  font-style: normal;
	  font-display: swap;
	}
	
	/* 全局字体栈（含回退） */
	* {
	  font-family: "Source Han Sans CN", "Microsoft YaHei", PingFang SC, sans-serif;
	}
	
	/* 字重层级规范 */
	/* H2及以上大标题：Bold 700 */
	h1,
	h2 {
	  font-weight: 700;
	}
	/* H3标题：Regular 400*/
	h3 {
	  font-weight: 400;
	}
	/* Banner主标题下方的简介文本：Regular 400 */
	.banner-desc,
	.banner-sub {
	  font-weight: 400;
	}
	/* 标签文字（品类标签、传承人标签等）：Medium 500 */
	.tag-item,
	.person-tag,
	.category-tag,
	.label-tag,
	.back-link{
	  font-weight: 500;
	}
	/* 正文描述段落*/
	p,
	.item-desc,
	.card-desc {
	  font-weight: 300;
	}
	/* 辅助文本（占位提示、次要备注、页脚辅助信息）：Light 300 */
	.placeholder-text,
	.helper-text,
	.sub-note,
	input::placeholder,
	textarea::placeholder {
	  font-weight: 300;
	}

</style>