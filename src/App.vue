<script setup>
import Accueil from "@/components/Accueil.vue";
import Projets from "@/components/Projets.vue";

const scrollSpeed = 10;
const scrollToTop = () => {
    const scrollInterval = setInterval(() => {
        if (window.scrollY === 0) {
            clearInterval(scrollInterval);
        } else {
            window.scrollBy(0, -scrollSpeed);
        }
    }, 10);
};


</script>

<template>

    <div class="accueil">
    </div>

    <RouterView/>

    <div class="projets">
        <Projets/>
    </div>

    <button class="back-to-top" @click="scrollToTop">
        ↑
    </button>
</template>

<style scoped>

.accueil {
    margin-top: 30vh;
}

.projets {
    margin-top: 20vh;
}

.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;
}

.back-to-top:hover {
    background-color: #36a06c;
}

</style>
