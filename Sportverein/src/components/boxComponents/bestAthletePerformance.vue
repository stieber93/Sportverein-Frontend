<template>
	<div class="wrapper">
		<h4>Höchste Platzierung in einer Sportart:</h4>
		<div class="innerWrapper">
			<div class="leftRight">
				<div class="left">
					<div class="medals">
						<div class="quiz-medal">
							<div class="quiz-medal__circle quiz-medal__circle--gold">
								<span style="font-size: 15px"> Top 5% </span>
							</div>
							<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
							<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
						</div>
					</div>
				</div>
				<div class="right">
					<div>Du bist unter den <b>Top 5%</b></div>
					<div>in deiner besten Disziplin:</div>
					<div><h5>200m Lauf</h5></div>
				</div>
			</div>
			<div class="bottom"
				><div>mit einer aktuellen Bestleistung von: <b>22.05sek</b></div></div
			>
		</div>
	</div>
</template>

<script setup lang="ts">
	import DoughnutChart from "@/components/charts/doughnutChart";
</script>

<style scoped lang="scss">
	@import "@/styles/components/utils/medals.scss";
	.wrapper {
		display: flex;
		height: 100%;
		flex-direction: column;
	}

	h4 {
		border-bottom: 1px solid violet;
	}
	h5 {
		margin-bottom: 0;
		text-decoration: underline;
	}
	.innerWrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
	}

	.leftRight {
		display: flex;
		flex-direction: row;
	}
	.left {
		width: 50%;
		margin: auto;
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 50%;
	}

	.bottom {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 33%;
		width: 100%;
	}
</style>
