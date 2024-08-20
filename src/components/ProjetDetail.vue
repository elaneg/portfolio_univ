<template>
    <div class="projet-detail">
<!--        <img :src="`/images/${projet.image}`" :alt="projet.titre" class="projet-image"/>-->
        <h1>{{ projet.titre }}</h1>
        <p>{{ projet.description }}</p>
        <div class="tags">
            <span class="tag" v-for="(tag, index) in projet.tags" :key="index">{{ tag }}</span>
        </div>
        <router-link to="/" class="btn-retour">Retour à l'accueil</router-link>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import {ref} from "vue";

export default {
    name: "ProjetDetail",
    setup() {
        const route = useRoute();
        const projet = ref(null);

            const projets = [
                {
                    id: 1,
                    titre: "Portfolio professionnel",
                    description: "Développement d'un portfolio professionnel",
                    // image: 'protfolio_pro.jpg', // Nom du fichier image
                    tags: ["Vue.js", "Design", "Front-End"]
                },
                {
                    id: 2,
                    titre: "Création d'un micro service",
                    description: "Développement d'une application avec Symfony qui contient un micro service",
                    // image: 'micro_service.jpg',
                    tags: ["Symfony", "Back-End", "API"]
                },
                {
                    id: 3,
                    titre: "Lunetterie de Villeroy",
                    description: "Proposition de site avec objet 3D pour la Lunetterie de Villeroy",
                    // image: 'lunetterie.jpg',
                    tags: ["E-commerce", "3D", "UX/UI"]
                },
                {
                    id: 4,
                    titre: "Plan de communication & gestion de crise",
                    description: "Plan pour améliorer la qualité après la crise de viande de cheval pour Findus",
                    // image: 'findus.jpg',
                    tags: ["Communication", "Gestion de crise", "Stratégie"]
                },
            ];
            projet.value = projets.find(p => p.id === parseInt(route.params.id));


        return {
            projet,
        };
    },
};
</script>

<style scoped>
.projet-detail {
    padding: 20px;
}

.projet-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

h1 {
    margin-top: 20px;
    color: #42b983;
}

p {
    margin-top: 10px;
    color: #555;
}

.tags {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.tag {
    background-color: #42b983;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    margin-bottom: 5px;
    font-size: 12px;
    width: fit-content;
}

/* Style pour le bouton Retour */
.btn-retour {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
}
</style>
