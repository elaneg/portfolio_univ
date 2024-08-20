<template>
    <div class="projets-container">
        <h2>Mes Projets</h2>
        <div class="projets-list">
            <router-link
                v-for="(projet, index) in projets"
                :key="projet.id"
                :to="{ name: 'ProjetDetail', params: { id: projet.id } }"
                class="projet-link"
            >
                <div class="projet">
                    <img :src="projet.image" :alt="projet.titre" />
                    <h3>{{ projet.titre }}</h3>
                    <p>{{ projet.description }}</p>
                    <!-- Affichage des tags -->
                    <div class="tags">
                        <span class="tag" v-for="(tag, index) in projet.tags" :key="index">{{ tag }}</span>
                    </div>
                </div>
            </router-link>
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
                    id: 1,
                    titre: "Portfolio professionnel",
                    description: "Développement d'un portfolio professionnel",
                    image: portfolioImage, // Utilisation correcte de l'import
                    tags: ["Vue.js", "Design", "Front-End"]
                },
                {
                    id: 2,
                    titre: "Création d'un micro service",
                    description: "Développement d'une application avec Symfony qui contient un micro service",
                    image: minhThaiImage,
                    tags: ["Symfony", "Back-End", "API"]
                },
                {
                    id: 3,
                    titre: "Lunetterie de Villeroy",
                    description: "Proposition de site avec objet 3D pour la Lunetterie de Villeroy",
                    image: lunetterieImage,
                    tags: ["E-commerce", "3D", "UX/UI"]
                },
                {
                    id: 4,
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
/* Ajoutez des styles pour le lien */
.projet-link {
    text-decoration: none;
    color: inherit;
}

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
    width: fit-content; /* Ajuster la largeur en fonction du contenu */
}
</style>
