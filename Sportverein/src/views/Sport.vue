<template>
	<div>
		<NavBar></NavBar>
		<Button class="addButton"><b>+</b></Button>
		<div class="contentArea">
			<div class="gridBox slot1_1-1_1"><chooseSport></chooseSport></div>
			<div class="gridBox slot1_2-1_3"> <bestSportPerformances></bestSportPerformances></div>
			<div class="gridBox slot2_1-2_1"><TrainingSessions></TrainingSessions></div>
			<div class="gridBox slot2_2-2_3"><TrainingDurations></TrainingDurations></div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
	import NavBar from "@/components/defaultComponents/navBar.vue";
	import Footer from "@/components/defaultComponents/Footer.vue";

	// Imports boxComponents here and use them as selectedComponent in contentBoxes !
	import TrainingSessions from "@/components/boxComponents/trainingSessions.vue";
	import TrainingDurations from "@/components/boxComponents/trainingDurations.vue";
	import chooseSport from "@/components/boxComponents/chooseSport.vue";
	import bestSportPerformances from "@/components/boxComponents/bestSportPerformances.vue";
</script>

<style scoped lang="scss">
	@import "@/styles/views/home.css";
	@import "@/styles/components/utils/medals.scss";
</style>
