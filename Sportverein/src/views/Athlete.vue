<template>
	<div>
		<NavBar></NavBar>
		<Button class="addButton"><b>+</b></Button>
		<div class="contentArea">
			<div class="gridBox slot1_1-1_1">
				<div class="wrapper">
					<h4>Wählen Sie eine Sportart:</h4>
					<div class="innerWrapper"></div>
				</div>
			</div>
			<div class="gridBox slot2_1-2_1"><TrainingSessions></TrainingSessions></div>
			<div class="gridBox slot2_2-2_3"><TrainingDurations></TrainingDurations></div>
			<div class="gridBox slot1_3-1_3">
				<div class="wrapper">
					<h4>Beste Platzirung in einer Sportart:</h4>
					<div class="innerWrapper">
						<div class="medals">
							<div class="quiz-medal">
								<div class="quiz-medal__circle quiz-medal__circle--gold">
									<span> 1 </span>
								</div>
								<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
								<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="gridBox slot1_2-1_2">
				<div class="wrapper">
					<h4>Allgemeine Informatinen:</h4>
					<div class="innerWrapper">
						<div>Durchschnittlichte Trainingsdauer: ⌀76 Minuten pro Einheit</div>
						<div>Trainingszeit gesamt: 432 Stunden und 17 Minuten</div>
						<div>Meist Trainierte Sportart: 200m Lauf (137 Stunden)</div>
						<div>letzter Leistungsanstieg: 110m Hürdenlauf um 7% am 26.10.2022</div>
					</div>
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
</script>

<style scoped lang="scss">
	@import "@/styles/views/home.css";
	@import "@/styles/components/utils/medals.scss";

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
