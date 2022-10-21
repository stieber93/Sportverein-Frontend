<template>
    <div class="navBarWrapper">
        <div class="navBarContent">
            <img class="logo" src="@/components/icons/smallLogo.png">
            <router-link
                class="athlete"
                :to="'/home'"
            >Sportler</router-link>
            <router-link
                class="sport"
                :to="'/home'"
            >Sportart</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    @import "@/styles/components/defaultComponents/navBar.css"
</style>