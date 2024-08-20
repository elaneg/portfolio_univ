<script setup>
import Accueil from "@/components/Accueil.vue";
import Projets from "@/components/Projets.vue";
import {ref, watch} from "vue";

const scrollSpeed = 20;
const scrollToTop = () => {
    const scrollInterval = setInterval(() => {
        if (window.scrollY === 0) {
            clearInterval(scrollInterval);
        } else {
            window.scrollBy(0, -scrollSpeed);
        }
    }, 10);
};

// thème par défaut
const isDarkTheme = ref(false);

// switch thème
const toggleTheme = () => {
    isDarkTheme.value = !isDarkTheme.value;
    document.documentElement.setAttribute('data-theme', isDarkTheme.value ? 'dark' : 'light');
};

// applique le thème au body
watch(isDarkTheme, (newValue) => {
    document.body.classList.toggle('dark-theme', newValue);
});

const darkModeIcon = "../src/assets/dark_mode_dark.svg";
const lightModeIcon = "../src/assets/dark_mode.svg";

</script>

<template>

    <input class="theme-toggle" @click="toggleTheme" type="image" :src="isDarkTheme ? darkModeIcon : lightModeIcon "
           alt="changer de thème">

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

.theme-toggle {
    width: 12vh;
    float: right;
    margin-top: 3vh;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

/* Thème clair (par défaut) */
/*body {*/
/*    background-color: #ffffff;*/
/*    color: #000000;*/
/*}*/

/*!* Thème sombre *!*/
/*body.dark-theme {*/
/*    background-color: #333333;*/
/*    color: #ffffff;*/
/*}*/

</style>
