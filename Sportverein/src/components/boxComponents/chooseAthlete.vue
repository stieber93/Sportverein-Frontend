<template>
	<div class="wrapper">
		<h4>Wählen Sie einen Sportler:</h4>
		<div class="innerWrapper">
			<input
				id="selectedAthlete"
				class="chooseContent"
				type="text"
				list="athleteList"
				v-model="selectedAthlete"
				@change="selectAthlete()"
			/>
			<datalist id="athleteList">
				<option v-for="object in athleteList">{{ object.name }}</option>
			</datalist>
			<h5>Ausführende Sportarten:</h5>

			<ul>
				<li>○ 100m Lauf</li>
				<li>○ 110m Hürdenaluf</li>
				<li>○ 200m Lauf</li>
				<li>○ und 4 weitere Sportarten...</li>
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
	import {currentSelections} from "@/stores/currentSelections";
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
	const athleteList = ref([{id: 0, name: "insgesamt"}]);
	watch(
		() => athletes.value,
		() => {
			for (let i = 0; i < athletes.value.length; i++) {
				athleteList.value.push({
					id: athletes.value[i].id,
					name: athletes.value[i].firstname + " " + athletes.value[i].lastname,
				});
			}
		}
	);
	let selectedAthlete = ref("");
	const selectionStore = currentSelections();
	function selectAthlete() {
		const selected = athletes.value.find((athlete: Athlete) => {
			if (athlete.firstname + " " + athlete.lastname === selectedAthlete.value) {
				return athlete;
			}
		});
		if (selected) {
			selectionStore.setAthleteId(selected.id);
		} else {
			selectionStore.setAthleteId(0);
		}
	}
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
