<template>
	<div class="wrapper">
		<h4>Trainingseinheiten:</h4>
		<div class="innerWrapper"
			><div class="left">
				<ul class="list">
					<li>gesamt: <span>312</span></li>
					<li>letztes Jahr: <span>109</span></li>
					<li>letzter Monat: <span>13</span></li>
					<li>aktueller Monat: <span>6</span></li>
				</ul>
			</div>
			<div class="right"> <DoughnutChart :width="150" :height="150" /> </div
		></div>
	</div>
</template>

<script setup lang="ts">
	import DoughnutChart from "@/components/charts/doughnutChart";
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
		display: flex;
		height: 100%;
	}
	.left {
		width: 50%;
	}

	.list {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 0;
	}
	.list li {
		padding-left: 5px;
	}
	.right {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
	}
</style>
