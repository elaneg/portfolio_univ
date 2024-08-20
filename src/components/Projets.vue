<template>
    <div class="projets-container">
        <h2>Mes Projets</h2>
        <div class="projets-list">
            <div class="projet" v-for="(projet, index) in projets" :key="index">
                <img :src="projet.image" :alt="projet.titre" />
                <h3>{{ projet.titre }}</h3>
                <p>{{ projet.description }}</p>
                <div class="tags">
                    <span class="tag" v-for="(tag, index) in projet.tags" :key="index">{{ tag }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import portfolioImage from '@/assets/protfolio_pro.jpg';
import lunetterieImage from '@/assets/lunetterie.jpg';
import findusImage from '@/assets/findus.jpg';
import minhThaiImage from '@/assets/micro_service.jpg';

export default {
    name: "Projets",
    data() {
        return {
            projets: [
                {
                    titre: "Portfolio professionnel",
                    description: "Développement d'un portfolio professionnel",
                    image: portfolioImage,
                    tags: ["Vue.js", "Design", "Front-End"]
                },
                {
                    titre: "Création d'un micro service",
                    description: "Développement d'une application avec Symfony qui contient un micro service",
                    image: minhThaiImage,
                    tags: ["Symfony", "Back-End", "API"]
                },
                {
                    titre: "Lunetterie de Villeroy",
                    description: "Proposition de site avec objet 3D pour la Lunetterie de Villeroy",
                    image: lunetterieImage,
                    tags: ["E-commerce", "3D", "UX/UI"]
                },
                {
                    titre: "Plan de communication & gestion de crise",
                    description: "Plan pour améliorer la qualité après la crise de viande de cheval pour Findus",
                    image: findusImage,
                    tags: ["Communication", "Gestion de crise", "Stratégie"]
                },
            ],
        };
    },
};
</script>

<style scoped>
.projets-container {
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
}

.projets-container h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
}

.projets-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.projet {
    padding: 15px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.projet img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.projet h3 {
    margin-top: 10px;
    color: #42b983;
}

.projet p {
    margin-bottom: 0;
    color: #555;
}

/* Style pour les tags */
.tags {
    margin-top: 10px;
    /* Utiliser flex-direction: column pour empiler les tags verticalement */
    display: flex;
    flex-direction: column;
}

.tag {
    background-color: #42b983;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    margin-bottom: 5px; /* Espace entre les tags */
    font-size: 12px;
    /* Assurer que les tags s'ajustent en largeur */
    width: fit-content;
}

</style>
