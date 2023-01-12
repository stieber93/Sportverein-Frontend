<template>
	<div class="wrapper">
		<h4>Allgemeine Informatinen:</h4>
		<div class="innerWrapper">
			<ul class="list">
				<li>Trainingsdauer/Einheit: ⌀76min</li>
				<li>Trainingszeit gesamt: 432h und 17min</li>
				<li>Meist Trainierte Sportart: 200m Lauf mit 297h</li>
				<li>meist trainierte Sportart/Jahr: 200m Lauf mit 137h</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	import BarChart from "@/components/charts/barChart";
</script>

<style scoped>
	.wrapper {
		display: flex;
		height: 100%;
		flex-direction: column;
	}

	h4 {
		border-bottom: 1px solid violet;
	}

	.innerWrapper {
		width: 100%;
		height: 100%;
	}

	.list {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 0;
	}
</style>
