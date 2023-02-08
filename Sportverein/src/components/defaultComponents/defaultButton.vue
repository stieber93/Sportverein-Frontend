<template>
    <button class="defaultButton">{{ buttonText }}</button>
</template>

<script setup lang="ts">
    const props = defineProps({
      buttonText: String,
      buttonColor: String,
    })
</script>

<style scoped>
    @import "@/styles/components/defaultComponents/defaultButton.css";

    .defaultButton {
        background-color: v-bind(buttonColor);
    }
</style>