<template>
	<div class="wrapper">
		<h4>Sportler pro Sportart</h4>
		<div class="innerWrapper"
			><div class="left">
				<ul class="list">
					<li>{{result[0]}}: <span>{{rng[0]}}</span></li>
					<li>{{result[1]}}: <span>{{rng[1]}}</span></li>
					<li>{{result[2]}}: <span>{{rng[2]}}</span></li>
					<li>{{result[3]}}: <span>{{rng[3]}}</span></li>
					<li>{{result[4]}}: <span>{{rng[4]}}</span></li>
				</ul>
			</div>
			<div class="right"> <SportsDoughnutChart :width="150" :height="150" :optionsArray=result :valuesArray=rng /> </div
		></div>
	</div>
</template>

<script setup lang="ts">
	import SportsDoughnutChart from "@/components/charts/sportsDoughnutChart";

	const array = ['100m Sprint', '200m Sprint', '400m Sprint', '800m Lauf', '1000m Lauf', '1500m Lauf', 
	'5000m Lauf', '10000m Lauf', '4x100m Staffel', '4x400m Staffel', '100m Hürden', '110m Hürden', '400m Hürden', 
	'Halbmarathon', 'Marathon', 'Weitsprung', 'Dreisprung', 'Hochsprung', 'Stabhochsprung', 'Kugelstoßen', 'Diskuswerfen', 'Speerwerfen', 
	'Hammerwerfen', 'Siebenkampf', 'Zehnkampf'];
	const n = 5; // number of elements we want to get
	const shuffledArray = array.sort(() => 0.5 - Math.random()); // shuffles array
	const result = shuffledArray.slice(0, n); // gets first n elements after shuffle

	const ARRAY_LENGTH = 5;
	const rng: number[] = [];
	for(let i = 0; i < ARRAY_LENGTH; i++) {rng.push(Math.floor(Math.random()*100))};
	rng.sort(function(a, b){return b - a});
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
