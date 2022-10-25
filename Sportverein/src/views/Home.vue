<template>
	<div>
		<NavBar></NavBar>
		<div class="contentArea">
			<ContentBox
				:headerName="'Trainingseinheiten'"
				:selectedComponent="TrainingSessions"
			></ContentBox>
			<ContentBox
				:headerName="'Trainingszeiten'"
				:selectedComponent="TrainingDurations"
			></ContentBox>
			<ContentBox :headerName="'Leistungsentwicklung'" :selectedComponent="''"></ContentBox>
		</div>
	</div>
</template>

<script setup lang="ts">
	import NavBar from "@/components/defaultComponents/navBar.vue";
	import ContentBox from "../components/defaultComponents/contentBox.vue";

	// Imports boxComponents here and use them as selectedComponent in contentBoxes !
	import TrainingSessions from "@/components/boxComponents/trainingSessions.vue";
	import TrainingDurations from "@/components/boxComponents/trainingDurations.vue";
</script>

<style scoped>
	@import "@/styles/views/home.css";
</style>
