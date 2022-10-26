<template>
	<div>
		<NavBar></NavBar>
		<div class="contentArea">
			<div class="gridBox slot1_1-2_1">
				<div>Sportler:</div>
				<div>Name: Mustermann</div>
				<div>Vorname: Max</div>
				<hr />
				<div>ausführende Sportarten:</div>
				<ul>
					<li>100m Lauf</li>
					<li>200m Lauf</li>
					<li>400m Lauf</li>
					<li>110m Hürdenlauf</li>
				</ul>
			</div>
			<div class="gridBox slot1_2-1_3"><TrainingSessions></TrainingSessions></div>
			<div class="gridBox slot2_2-2_3"><TrainingDurations></TrainingDurations></div>
			<div class="gridBox slot3_1-3_2">
				<div class="medals">
					<div class="quiz-medal">
						<div class="quiz-medal__circle quiz-medal__circle--silver">
							<span> 2 </span>
						</div>
						<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
						<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
					</div>
					<div class="quiz-medal">
						<div class="quiz-medal__circle quiz-medal__circle--gold">
							<span> 1 </span>
						</div>
						<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
						<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
					</div>
					<div class="quiz-medal">
						<div class="quiz-medal__circle quiz-medal__circle--bronze">
							<span> 3 </span>
						</div>
						<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
						<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
					</div>
				</div>
				<div>
					<span
						>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;100m Lauf: Top 3%
						&emsp;&emsp;&emsp;&emsp;</span
					>
					<span
						>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;200m Lauf: Top
						50&emsp;&emsp;&emsp;&emsp;</span
					>
					<span
						>&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;110m Hürdenlauf Lauf: Top
						9%&emsp;&emsp;&emsp;&emsp;</span
					>
				</div>
			</div>
			<div class="gridBox slot3_3-3_3">
				<div>Durchschnittlichte Trainingsdauer: ⌀76 Minuten pro Einheit</div>
				<div>Trainingszeit gesamt: 432 Stunden und 17 Minuten</div>
				<div>Meist Trainierte Sportart: 200m Lauf (137 Stunden)</div>
				<div>letzter Leistungsanstieg: 110m Hürdenlauf um 7% am 26.10.2022</div>
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
</style>
