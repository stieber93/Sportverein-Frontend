<template>
	<div>
		<div class="left">
			<div>Traningseinheiten gesamt: <span>312</span></div>
			<div>Traningseinheiten letztes Jahr: <span>109</span></div>
			<div>Traningseinheiten letzter Monat: <span>9</span></div>
		</div>
		<div class="right">
			<DoughnutChart :width="150" :height="150" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import DoughnutChart from "@/components/boxComponents/doughnutChart";
</script>

<style scoped>
	.left {
		float: left;
		width: 50%;
		height: auto;
	}
	.right {
		float: right;
		width: 50%;
		height: auto;
	}
</style>
