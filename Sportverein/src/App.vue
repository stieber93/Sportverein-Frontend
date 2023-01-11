<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { getAllAthletes } from './services/athlete.service';
import { getAllPerformances } from './services/performance.service';
import { getAllSports } from './services/sport.service';
import { getAllTrainingSessions } from './services/training-session.service';
console.log(getAllAthletes());
console.log(getAllPerformances());
console.log(getAllSports());
console.log(getAllTrainingSessions());
</script>

<style scoped></style>
