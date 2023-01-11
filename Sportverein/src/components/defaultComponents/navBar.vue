<template>
	<div class="navBarArea">
		<div class="navBarWrapper">
			<div class="navBarContent">
				<router-link class="athlete" :to="'/athlete'">Sportler</router-link>
				<router-link :to="'/home'"
					><img class="logo" src="@/components/icons/smallLogo.png"
				/></router-link>
				<router-link class="sport" :to="'/sport'">Sportart</router-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	function route() {
		window.location.href = "/home";
	}
</script>

<style scoped>
	@import "@/styles/components/defaultComponents/navBar.css";
</style>
