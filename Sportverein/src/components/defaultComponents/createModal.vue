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
            <div class="createModalInputArea">
                <div v-if="inputForAthlete" class="inputForAthlete">
                    <span>Vorname:</span>
                    <input type="text">
                    <span>Nachname:</span>
                    <input type="text">
                </div>
                <div v-if="inputForSport" class="inputForSport">
                    <span>Titel:</span>
                    <input type="text">
                </div>
                <div v-if="inputForTrainingSession" class="inputForTrainingSession">
                    <span>Datum:</span>
                    <input type="text">
                    <span>Startzeit:</span>
                    <input type="text">
                    <span>Endzeit:</span>
                    <input type="text">
                    <span>Sportler:</span>
                    <select name="athletes" id="athletesId">
                        <option value=""></option>
                    </select>
                    <span>Sportart:</span>
                    <select name="sports" id="sportsId">
                        <option value=""></option>
                    </select>
                </div>
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
    const inputForAthlete = ref(false);
    const inputForSport = ref(false);
    const inputForTrainingSession = ref(false);

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
            inputForAthlete.value = true;
            inputForSport.value = false;
            inputForTrainingSession.value = false;
        } else if (whichToCreate.value === "sport") {
            createModalHeader.value = "Sportart erstellen"
            inputForAthlete.value = false;
            inputForSport.value = true;
            inputForTrainingSession.value = false;
        } else if (whichToCreate.value === "trainingSession") {
            createModalHeader.value = "Trainingseinheit erstellen"
            inputForAthlete.value = false;
            inputForSport.value = false;
            inputForTrainingSession.value = true;
        }
    }
</script>

<style scoped>
    @import "@/styles/components/defaultComponents/createModal.css";
</style>