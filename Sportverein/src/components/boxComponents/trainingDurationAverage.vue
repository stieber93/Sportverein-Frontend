<template>
	<div class="wrapper">
		<h4>Durchschnittliche tägliche Trainingszeit</h4>
		<div class="innerWrapper"
			><div class="left">
				<ul class="list">
					<li>Fußball: <span>5,2h</span></li>
					<li>Basketball: <span>4,1h</span></li>
					<li>100m Sprint: <span>2,3h</span></li>
				</ul>
			</div>
			<div class="right"><AverageDurationDoughnutChart :width="150" :height="150" /></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import AverageDurationDoughnutChart from "@/components/charts/averageDurationDoughnutChart";
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
