<template>
	<div>
		<NavBar></NavBar>
		<div class="contentArea"></div>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
	import NavBar from "@/components/defaultComponents/navBar.vue";
	import Footer from "@/components/defaultComponents/Footer.vue";
</script>

<style scoped lang="scss">
	@import "@/styles/views/home.css";
	@import "@/styles/components/utils/medals.scss";
</style>
