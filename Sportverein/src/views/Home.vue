<template>
	<div>
		<NavBar></NavBar>
		<Button class="addButton"><b>+</b></Button>
		<div class="contentArea">
			<div class="gridBox slot1_3-1_3">
				<SportsMembers></SportsMembers>
			</div>
			<div class="gridBox slot2_1-2_1">
				<TrainingDurationAverage></TrainingDurationAverage>
			</div>
			<div class="gridBox slot1_1-1_2">
				<font size="+3"><u>Der TSV Süderbrarup stellt sich vor</u></font>
				<br/><br/>
				<img src="@/components/icons/Vereinsbild.jpg" width="240" height="180" style="float:right"/>
				Der TSV Süderbrarup sucht immer nach motivierten Sportlern, die im Team oder allein ihre Grenzen überwinden wollen
				und alles geben um bei Wettkämpfen den Sieg nach Hause zu holen.
				<br/><br/>
				Für die Überwachung und Auswertung unserer Trainingsergebnisse verwenden wir diie Software von GTS, mit der es einfach ist alle wichtigen
				auf einen Blick zu sehen.
				<br/><br/>
				Auf dieser Seite finden Sie ein paar Eckdaten zu unseren Sportlern und Trainingsleistungen.
			</div>
			<div class="gridBox slot2_2-2_3">
				<TrainingTimesTotal></TrainingTimesTotal>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
	import NavBar from "@/components/defaultComponents/navBar.vue";
	import Footer from "@/components/defaultComponents/Footer.vue";
	import SportsMembers from "@/components/boxComponents/sportsMembers.vue";
	import TrainingTimesTotal from "@/components/boxComponents/trainingTimesTotal.vue"
	import TrainingDurationAverage from "@/components/boxComponents/trainingDurationAverage.vue"
</script>

<style scoped>
	@import "@/styles/views/home.css";
</style>
