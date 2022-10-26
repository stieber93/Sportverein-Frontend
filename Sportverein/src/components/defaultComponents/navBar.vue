<template>
	<div class="navBarArea">
		<div class="navBarWrapper">
			<div class="navBarContent">
				<router-link class="athlete" :to="'/athlete'">Sportler</router-link>
				<img class="logo" src="@/components/icons/smallLogo.png" />
				<router-link class="sport" :to="'/home'">Sportart</router-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
	@import "@/styles/components/defaultComponents/navBar.css";
</style>
