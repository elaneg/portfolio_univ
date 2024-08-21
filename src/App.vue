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

const darkModeIcon = "./public/dark_mode_dark.svg";
const lightModeIcon = "./public/dark_mode.svg";

</script>

<template>

    <input class="theme-toggle" @click="toggleTheme" type="image" :src="isDarkTheme ? darkModeIcon : lightModeIcon "
           alt="changer de thème">

    <div class="accueil">
        <Accueil/>
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
    background-color: var(--link-color);
    color: var(--color-text);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;
}

.back-to-top:hover {
    background-color: var(--hover-background);
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

</style>
