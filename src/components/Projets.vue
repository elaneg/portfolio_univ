<template>
    <div class="projets-container">
        <h2>Mes Projets</h2>
        <div class="projets-list">
            <div class="projet" v-for="(projet, index) in projets" :key="index">
                <img :src="projet.image" :alt="projet.titre"/>
                <h3>{{ projet.titre }}</h3>
                <p>{{ projet.description }}</p>
                <!-- Ajout des tags -->
                <div class="tags">
                    <span
                            v-for="(tag, index) in projet.tags"
                            :key="index"
                            :style="{ backgroundColor: tagColors[tag] }"
                            class="tag"
                    >
            {{ tag }}
          </span>
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
                    tags: ["AC 4.1 : Développer à l’aide d’un framework de développement côté client", "AC 4.5 : Maintenir et sécuriser un environnement numérique "]
                },
                {
                    titre: "Création d'un micro service",
                    description: "Développement d'une application avec Symfony qui contient un micro service",
                    image: minhThaiImage,
                    tags: ["AC 4.2 : Développer à l’aide d’un framework de développement côté serveur", "AC 4.4 : Concevoir et développer des composants logiciels, plugins ou extension", "AC 4.6 : Mettre en place une chaîne d’intégration continue (test, recettage, déploiement) \n"]
                },
                {
                    titre: "Lunetterie de Villeroy",
                    description: "Proposition de site avec objet 3D pour la Lunetterie de Villeroy",
                    image: lunetterieImage,
                    tags: ["AC 4.3 : Développer des dispositifs interactifs sophistiqués (jeux, réalité virtuelle, webGL, 3D…)", "AC 4.5 : Maintenir et sécuriser un environnement numérique"]
                },
                {
                    titre: "Plan de communication & gestion de crise",
                    description: "Plan pour améliorer la qualité après la crise de viande de cheval pour Findus",
                    image: findusImage,
                    tags: ["AC 5.4 : Ecrire un plan d’affaires", "AC 5.6 : Construire une présentation convaincante"]
                },
            ],

            tagColors: {
                "AC 4.1 : Développer à l’aide d’un framework de développement côté client": "#42b983",
                "AC 4.2 : Développer à l’aide d’un framework de développement côté serveur": "#42b983",
                "AC 4.3 : Développer des dispositifs interactifs sophistiqués (jeux, réalité virtuelle, webGL, 3D…)": "#42b983",
                "AC 4.4 : Concevoir et développer des composants logiciels, plugins ou extension": "#42b983",
                "AC 4.5 : Maintenir et sécuriser un environnement numérique": "#42b983",
                "AC 4.6 : Mettre en place une chaîne d’intégration continue (test, recettage, déploiement)": "#42b983",
                "AC 5.4 : Ecrire un plan d’affaires": "#282383",
                "AC 5.6 : Construire une présentation convaincante": "#282383",
                "UX/UI": "#2ecc71",
                "Communication": "#e74c3c",
                "Gestion de crise": "#9b59b6",
                "Strategie": "#34495e",
        }

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
