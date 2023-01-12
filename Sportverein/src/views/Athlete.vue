<template>
	<div>
		<NavBar></NavBar>
		<Button class="addButton"><b>+</b></Button>
		<div class="contentArea">
			<div class="gridBox slot1_1-1_1">
				<ChooseAthlete></ChooseAthlete>
			</div>
			<div class="gridBox slot2_1-2_1"><TrainingSessions></TrainingSessions></div>
			<div class="gridBox slot2_2-2_3"><TrainingDurations></TrainingDurations></div>
			<div class="gridBox slot1_3-1_3">
				<BestAthletePerformance></BestAthletePerformance>
			</div>
			<div class="gridBox slot1_2-1_2">
				<div class="wrapper">
					<GeneralInformation></GeneralInformation>
				</div>
			</div>
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
	import ChooseAthlete from "@/components/boxComponents/chooseAthlete.vue";
	import GeneralInformation from "@/components/boxComponents/generalInformation.vue";
	import BestAthletePerformance from "@/components/boxComponents/bestAthletePerformance.vue";
</script>

<style scoped lang="scss">
	@import "@/styles/views/home.css";

	.wrapper {
		display: flex;
		height: 100%;
		flex-direction: column;
	}

	h4 {
		border-bottom: 1px solid violet;
	}
	.innerWrapper {
		display: flex;
		height: 100%;
		flex-direction: column;
	}
</style>
