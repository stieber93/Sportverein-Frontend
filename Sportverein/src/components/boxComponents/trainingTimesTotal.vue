<template>
	<div class="wrapper">
		<h4>Trainierende nach Uhrzeit:</h4>
		<TrainingTimesBarChart></TrainingTimesBarChart>
	</div>
</template>

<script setup lang="ts">
	import TrainingTimesBarChart from "@/components/charts/trainingTimesBarChart";
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

	.barChart {
		margin: auto;
	}
</style>
