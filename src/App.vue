<script setup>
import Accueil from "@/components/Accueil.vue";
import Projets from "@/components/Projets.vue";
</script>

<template>

    <div class="accueil">
        <Accueil/>
    </div>

    <div class="projets">
        <Projets />
    </div>


    <RouterView/>
</template>

<style scoped>


</style>
