<template>
    <div class="aroundCreateModal">
        <button class="createModalHeaderAreaButton">Sportler erstellen</button>
        <button class="createModalHeaderAreaButton">Sportart erstellen</button>
        <button class="createModalHeaderAreaButton">Trainingseinheit erstellen</button>
        <div class="createModalWrapper">
            <div class="createModalHeaderArea">
                <div class="createModalHeader">{{ createModalHeader }}</div>
                <button class="createModalCloseButton" @click="$emit('close')">X</button>
            </div>
            <div class="createModalButtons">
                <DefaultButton
                    buttonText="Erstellen"
                    buttonColor="lightgreen"
                ></DefaultButton>
                <DefaultButton
                    @click="$emit('close')"
                    buttonText="Abbrechen"
                    buttonColor="lightcoral"
                ></DefaultButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import DefaultButton from "@/components/defaultComponents/defaultButton.vue";

    const props = defineProps({
        createModalHeader: String,
    })
</script>

<style scoped>
    @import "@/styles/components/defaultComponents/createModal.css";
</style>