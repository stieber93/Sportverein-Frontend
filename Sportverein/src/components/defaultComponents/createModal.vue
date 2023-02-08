<template>
    <div class="aroundCreateModal">
        <button class="createModalHeaderAreaButton" @click="showCreateAthleteModal()">Sportler erstellen</button>
        <button class="createModalHeaderAreaButton" @click="showCreateSportModal()">Sportart erstellen</button>
        <button class="createModalHeaderAreaButton" @click="showCreateTrainingSessionModal()">Trainingseinheit erstellen</button>
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
    import { ref, onMounted } from "vue";

    const createModalHeader = ref("");
    const whichToCreate = ref("athlete");

    onMounted(() => {
        switchCreateModal()
    })

    function showCreateAthleteModal() {
        whichToCreate.value = "athlete";
        switchCreateModal();
    }

    function showCreateSportModal() {
        whichToCreate.value = "sport";
        switchCreateModal();
    }

    function showCreateTrainingSessionModal() {
        whichToCreate.value = "trainingSession";
        switchCreateModal();
    }

    function switchCreateModal() {
        if (whichToCreate.value === "athlete") {
            createModalHeader.value = "Sportler erstellen"
        } else if (whichToCreate.value === "sport") {
            createModalHeader.value = "Sportart erstellen"
        } else if (whichToCreate.value === "trainingSession") {
            createModalHeader.value = "Trainingseinheit erstellen"
        }
    }
</script>

<style scoped>
    @import "@/styles/components/defaultComponents/createModal.css";
</style>