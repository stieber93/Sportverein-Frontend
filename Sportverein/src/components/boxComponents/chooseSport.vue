<template>
	<div class="wrapper">
		<h4>Wählen Sie eine Sportart:</h4>
		<div class="innerWrapper">
			<input class="chooseContent" type="text" list="athleteList" />
			<datalist id="athleteList">
				<option v-for="object in athleteList">{{ object }}</option>
			</datalist>
			<h5>Details:</h5>

			<ul>
				<li>○ Ausführende Sportler: 27</li>
				<li>○ Bestleistwert: 10.19sek</li>
				<li>○ Trainings/Woche: 15</li>
				<li>○ Traningsstunden/Woche: 48h</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	const athleteList = ["alle", "100m Lauf", "200m Lauf", "800m Lauf"];
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
