<template>
	<div class="wrapper">
		<h4>Trainingszeiten:</h4>
		<div class="barChart"><BarChart /></div>
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

	.barChart {
		margin: auto;
	}
</style>
