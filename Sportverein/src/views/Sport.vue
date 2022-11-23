<template>
	<div>
		<NavBar></NavBar>
		<Button class="addButton"><b>+</b></Button>
		<div class="contentArea">
			<div class="gridBox slot1_1-1_1">Auswahl Sportart & Anzahl Sportler</div>
			<div class="gridBox slot1_2-1_3"
				><div class="wrapper">
					<h4>Beste Sportler dieser Sportart:</h4>
					<div class="innerWrapper">
						<div class="medals">
							<div class="quiz-medal transformSilver">
								<div class="quiz-medal__circle quiz-medal__circle--silver">
									<span> 2 </span>
								</div>
								<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
								<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
							</div>
							<div class="quiz-medal">
								<div class="quiz-medal__circle quiz-medal__circle--gold">
									<span> 1 </span>
								</div>
								<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
								<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
							</div>
							<div class="quiz-medal transformBronze">
								<div class="quiz-medal__circle quiz-medal__circle--bronze">
									<span> 3 </span>
								</div>
								<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
								<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
							</div>
						</div>
					</div> </div
			></div>
			<div class="gridBox slot2_1-2_1">Trainingseinheiten Pie</div>
			<div class="gridBox slot2_2-2_3">Trainingsdauer Bar</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script setup lang="ts">
	import NavBar from "@/components/defaultComponents/navBar.vue";
	import Footer from "@/components/defaultComponents/Footer.vue";
</script>

<style scoped lang="scss">
	@import "@/styles/views/home.css";
	@import "@/styles/components/utils/medals.scss";
</style>
