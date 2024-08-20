<template>
    <div class="projets-container">
        <h2>Mes Projets</h2>
        <div class="projets-list">
            <div class="projet" v-for="(projet, index) in projets" :key="index">
                <img :src="projet.image" :alt="projet.titre" class="projet_image"/>
                <h3>{{ projet.titre }}</h3>
                <p>{{ projet.description }}</p>

                <div class="miniatures">
                    <img
                            v-for="(miniature, idx) in projet.miniatures"
                            :src="miniature"
                            :key="idx"
                            @click="openImage(miniature)"
                            class="miniature-image"
                            :alt="`Miniature ${idx + 1}`"
                    />
                </div>

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
        <!-- Pop-up pour afficher l'image en grand -->
        <div v-if="selectedImage" class="popup" @click="closeImage">
            <img :src="selectedImage" class="popup-image" @click.stop alt=""/>
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
                    miniatures: [portfolioImage, lunetterieImage, findusImage],
                    tags: ["AC 4.1 : Développer à l’aide d’un framework de développement côté client", "AC 4.5 : Maintenir et sécuriser un environnement numérique "],
                    url: "/projet1"
                },
                {
                    titre: "Création d'un micro service",
                    description: "Développement d'une application avec Symfony qui contient un micro service",
                    image: minhThaiImage,
                    miniatures: [portfolioImage, lunetterieImage, findusImage],
                    tags: ["AC 4.2 : Développer à l’aide d’un framework de développement côté serveur", "AC 4.4 : Concevoir et développer des composants logiciels, plugins ou extension", "AC 4.6 : Mettre en place une chaîne d’intégration continue (test, recettage, déploiement) \n"],
                    url: "/projet2"
                },
                {
                    titre: "Lunetterie de Villeroy",
                    description: "Proposition de site avec objet 3D pour la Lunetterie de Villeroy",
                    image: lunetterieImage,
                    miniatures: [portfolioImage, lunetterieImage, findusImage],
                    tags: ["AC 4.3 : Développer des dispositifs interactifs sophistiqués (jeux, réalité virtuelle, webGL, 3D…)", "AC 4.5 : Maintenir et sécuriser un environnement numérique", "AC 5.1 : Piloter un produit ou service"],
                    url: "/projet3"
                },
                {
                    titre: "Plan à mettre en place afin d'obtenir un label de qualité",
                    description: "Plan pour améliorer la qualité en vue d'obtenir le label RSE après la crise de viande de cheval pour Findus",
                    image: findusImage,
                    miniatures: [portfolioImage, lunetterieImage, findusImage],
                    tags: ["AC 5.4 : Ecrire un plan d’affaires", "AC 5.6 : Construire une présentation convaincante"],
                    url: "/projet4"
                },
            ],

            selectedImage: null,

            tagColors: {
                "AC 4.1 : Développer à l’aide d’un framework de développement côté client": "#42b983",
                "AC 4.2 : Développer à l’aide d’un framework de développement côté serveur": "#42b983",
                "AC 4.3 : Développer des dispositifs interactifs sophistiqués (jeux, réalité virtuelle, webGL, 3D…)": "#42b983",
                "AC 4.4 : Concevoir et développer des composants logiciels, plugins ou extension": "#42b983",
                "AC 4.5 : Maintenir et sécuriser un environnement numérique": "#42b983",
                "AC 4.6 : Mettre en place une chaîne d’intégration continue (test, recettage, déploiement)": "#42b983",
                "AC 5.1 : Piloter un produit ou service": "#282383",
                "AC 5.2 : Maîtriser la qualité en projet Web ou multimédia": "#282383",
                "AC 5,3 : Créer un projet d’entreprise (nom, valeurs, missions...) ": "#282383",
                "AC 5.4 : Ecrire un plan d’affaires": "#282383",
                "AC 5,5 : Choisir une forme juridique ": "#282383",
                "AC 5.6 : Construire une présentation convaincante": "#282383",
            }

        };
    },

    methods: {
        openImage(image) {
            this.selectedImage = image;
            document.addEventListener('keydown', this.handleEsc);
        },
        closeImage() {
            this.selectedImage = null;
            document.removeEventListener('keydown', this.handleEsc);
        },
        handleEsc(event) {
            if (event.key === 'Escape') {
                this.closeImage();
            }
        }
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.handleEsc);
    }

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

.projet_image {
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

.miniatures {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.miniature-image {
    width: 40px; /* Réduire la largeur des miniatures */
    height: 40px; /* Réduire la hauteur des miniatures */
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.popup-image {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
}

</style>
