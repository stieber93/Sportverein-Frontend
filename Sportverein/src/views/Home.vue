<template>
	<div>
		<NavBar></NavBar>
		<Button class="addButton"><b>+</b></Button>
		<div class="contentArea">
			<div class="gridBox slot1_3-1_3"> Sportler & Sportarten gesamt</div>
			<div class="gridBox slot2_1-2_1">Trainingseinheiten Pie</div>
			<div class="gridBox slot1_1-1_2">
				Beispielhafte Beschreibung des Sportvereins inkl. Bild
			</div>
			<div class="gridBox slot2_2-2_3">Trainingszeiten Bar</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
	import NavBar from "@/components/defaultComponents/navBar.vue";
	import Footer from "@/components/defaultComponents/Footer.vue";
</script>

<style scoped>
	@import "@/styles/views/home.css";
</style>
