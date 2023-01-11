<template>
	<div class="wrapper">
		<h4>Wählen Sie einen Sportler:</h4>
		<div class="innerWrapper">
			<input class="chooseContent" type="text" list="athleteList" />
			<datalist id="athleteList">
				<option v-for="object in athleteList">{{ object }}</option>
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
	import DoughnutChart from "@/components/charts/doughnutChart";

	const athleteList = ["insgesamt", "Steffen Reuter", "Thomas Schädler", "Gero Lucas Panzer"];
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
