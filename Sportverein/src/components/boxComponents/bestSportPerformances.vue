<template>
	<div class="wrapper">
		<h4>Beste Sportler dieser Sportart:</h4>
		<div class="innerWrapper">
			<div class="medals">
				<div class="quiz-medal transformSilver">
					<div class="quiz-medal-content">
						<div class="quiz-medal__circle quiz-medal__circle--silver">
							<span> 2 </span>
						</div>
						<div class="quiz-medal__ribbons">
							<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
							<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
						</div>
					</div>
					<div class="quiz-medal__details">
						<div>Thomas Schädler</div>
						<div>420pkt</div>
					</div>
				</div>
				<div class="quiz-medal">
					<div class="quiz-medal-content">
						<div class="quiz-medal__circle quiz-medal__circle--gold">
							<span> 1 </span>
						</div>
						<div class="quiz-medal__ribbons">
							<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
							<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
						</div>
					</div>
					<div class="quiz-medal__details">
						<div>Gero Lucas Panzer</div>
						<div>1337pkt</div>
					</div>
				</div>
				<div class="quiz-medal transformBronze">
					<div class="quiz-medal-content">
						<div class="quiz-medal__circle quiz-medal__circle--bronze">
							<span> 3 </span>
						</div>
						<div class="quiz-medal__ribbons">
							<div class="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
							<div class="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
						</div>
					</div>
					<div class="quiz-medal__details">
						<div>Steffen Reuter</div>
						<div>187pkt</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

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
	.innerWrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
