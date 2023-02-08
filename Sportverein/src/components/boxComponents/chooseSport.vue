<template>
	<div class="wrapper">
		<h4>Wählen Sie eine Sportart:</h4>
		<div class="innerWrapper">
			<input class="chooseContent" type="text" list="athleteList" />
			<datalist id="athleteList">
				<option v-for="object in sportList">{{ object.name }}</option>
			</datalist>
			<h5>Details:</h5>

			<ul>
				<li>○ Ausführende Sportler: 27</li>
				<li>○ Bestleistwert: 10.19sek</li>
				<li>○ Trainings/Woche: 15</li>
				<li>○ Traningsstunden/Woche: 48h</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	//Get Data
	import {ref, watch} from "vue";
	import type {Athlete} from "@/models/athlete.model";
	import type {Sport} from "@/models/sport.model";
	import type {Performance} from "@/models/performance.model";
	import type {TrainingSession} from "@/models/training-session.model";
	import {getAllAthletes} from "@/services/athlete.service";
	import {getAllSports} from "@/services/sport.service";
	import {getAllPerformances} from "@/services/performance.service";
	import {getAllTrainingSessions} from "@/services/training-session.service";
	const athletes = ref([] as Athlete[]);
	const sports = ref([] as Sport[]);
	const performances = ref([] as Performance[]);
	const trainingSessions = ref([] as TrainingSession[]);
	getAllData();
	async function getAllData() {
		athletes.value = await getAllAthletes();
		sports.value = await getAllSports();
		performances.value = await getAllPerformances();
		trainingSessions.value = await getAllTrainingSessions();
	}
	const sportList = ref([{id: 0, name: "alle"}]);
	watch(
		() => sports.value,
		() => {
			for (let i = 0; i < sports.value.length; i++) {
				sportList.value.push({
					id: sports.value[i].id,
					name: sports.value[i].title,
				});
			}
		}
	);
</script>

<style scoped>
	.wrapper {
		display: flex;
		height: 100%;
		flex-direction: column;
		overflow: hidden;
	}

	h4 {
		border-bottom: 1px solid violet;
	}
	.innerWrapper {
		width: 100%;
		height: 100%;
	}

	.chooseContent {
		width: 80%;
		margin-inline: 9%;
		height: 30%;
		font-size: 24px;
		text-align: center;
	}

	h5 {
		border-bottom: 1px solid black;
	}

	ul {
		padding: 0;
	}
	li {
		width: 50%;
		display: inline-block;
		margin-block: 10px;
	}
</style>
