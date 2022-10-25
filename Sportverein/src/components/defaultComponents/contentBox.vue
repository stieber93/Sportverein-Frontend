<template>
	<div class="contentBoxWrapper">
		<div class="boxHeader" :class="{borderBottom: showBody}" @click="toogleBody">
			<button class="headerIcon">{{ headerIcon }}</button>
			<span class="headerText">{{ headerName }}</span>
		</div>
		<Transition name="bodyHeight">
			<div class="boxBody test" v-if="showBody">
				<component :is="selectedComponent"></component>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
	import {ref} from "vue";

	const props = defineProps({
		headerName: {
			type: String,
			required: true,
		},
		selectedComponent: {
			required: true,
		},
	});

	const showBody = ref(false);
	const headerIcon = ref("+");

	function toogleBody() {
		showBody.value = !showBody.value;
		if (headerIcon.value === "+") {
			headerIcon.value = "-";
		} else {
			headerIcon.value = "+";
		}
	}
</script>

<style scoped>
	@import "@/styles/components/defaultComponents/contentBox.css";

	.bodyHeight-enter-active {
		transition: max-height 0.5s ease-in, color 0.25s ease 0.1s;
	}
	.bodyHeight-leave-active {
		transition: max-height 0.5s ease-out, color 0.5s ease;
	}

	.bodyHeight-enter-from,
	.bodyHeight-leave-to {
		max-height: 0px;
		color: transparent;
	}
</style>
