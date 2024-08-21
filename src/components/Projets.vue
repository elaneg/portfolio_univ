<template>
    <div class="projets-container">
        <h2>Mes Projets</h2>
        <div class="projets-list">
            <div class="projet" v-for="(projet, index) in projets" :key="index">
                <img :src="projet.image" :alt="projet.titre" class="projet_image"/>
                <div class="projet_com">
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

                    <div class="commentaire">
                        <p>{{ projet.commentaire }}</p>
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

//traces
import port_pro_trace1 from '@/assets/port_pro_trace1.jpg';
import port_pro_trace2 from '@/assets/port_pro_trace2.jpg';
import port_pro_trace3 from '@/assets/port_pro_trace3.jpg';
import s6symfony_trace1 from '@/assets/s6symfony_trace1.jpg';
import s6symfony_trace2 from '@/assets/s6symfony_trace2.jpg';
import s6symfony_trace3 from '@/assets/s6symfony_trace3.jpg';
import lunetterie_trace1 from '@/assets/lunetterie_trace1.jpg';
import lunetterie_trace2 from '@/assets/lunetterie_trace2.jpg';
import lunetterie_trace3 from '@/assets/lunetterie_trace3.jpg';
import findus_trace1 from '@/assets/findus_trace1.jpg';
import findus_trace2 from '@/assets/findus_trace2.jpg';
import findus_trace3 from '@/assets/findus_trace3.jpg';

export default {
    name: "Projets",
    data() {
        return {
            projets: [
                {
                    titre: "Portfolio professionnel",
                    description: "Développement d'un portfolio professionnel",
                    image: portfolioImage,
                    miniatures: [port_pro_trace1, port_pro_trace2, port_pro_trace3],
                    commentaire: "J'ai créé ce portfolio dans le cadre de ma dernière année de formation. Il avait donc un objectif à la fois professionnel, universitaire et un peu personnel." +
                        " Le front-end n'étant pas ma spécialité, j'ai voulu faire quelque chose visuellement simple, et qui soit par-dessus tout accessible et facile à utiliser." +
                        " Le développement s'est réalisé étape par étape, à commencer par la création des branches DEV et MASTER sur github, l'intégration, l'ajout des styles et enfin, la mise en production." +
                        " Cette dernière a été un défi car c'était la première que je la faisais entièrement seule, sans enseignant ou chef de projet, et ne s'est pas déroulée sans encombre." +
                        " D'un point de vue plus technique, j'ai choisi de développer ce portfolio en utilisant VueJs car je souhaitais le rendre dynamique, sans temps de recharge entre les onglets." +
                        " J'ai également pris soin de le rendre accessible aux lecteurs d'écran via des balises ARIA dans la structure HTML, et ai effectué des recherches dessus de mon côté afin de les mettre correctement en place. ",
                    tags: ["AC 4.1 : Développer à l’aide d’un framework de développement côté client", "AC 4.5 : Maintenir et sécuriser un environnement numérique "],
                    url: "/projet1"
                },
                {
                    titre: "Création d'un micro service",
                    description: "Développement d'une application avec Symfony qui contient un micro service",
                    image: minhThaiImage,
                    miniatures: [s6symfony_trace1, s6symfony_trace2, s6symfony_trace3],
                    commentaire: "Au cours du dernier semestre, nous avons développé ce projet en vue de savoir intégrer un micro service dans un projet Symfony." +
                        " Nous avons utilisé GitHub pour donner un suivi du développement de cette application, et aussi intégré des tests unitaires pour tester le code." +
                        " Ce projet ne nécessitait pas forcément de front-end.",
                    tags: ["AC 4.2 : Développer à l’aide d’un framework de développement côté serveur", "AC 4.4 : Concevoir et développer des composants logiciels, plugins ou extension", "AC 4.6 : Mettre en place une chaîne d’intégration continue (test, recettage, déploiement) \n"],
                    url: "/projet2"
                },
                {
                    titre: "Lunetterie de Villeroy",
                    description: "Proposition de site avec objet 3D pour la Lunetterie de Villeroy",
                    image: lunetterieImage,
                    miniatures: [lunetterie_trace1, lunetterie_trace2, lunetterie_trace3],
                    commentaire: "Un projet personnel visant à présenter mes compétences en tant que développeur.",
                    tags: ["AC 4.3 : Développer des dispositifs interactifs sophistiqués (jeux, réalité virtuelle, webGL, 3D…)", "AC 4.5 : Maintenir et sécuriser un environnement numérique", "AC 5.1 : Piloter un produit ou service"],
                    url: "/projet3"
                },
                {
                    titre: "Plan à mettre en place afin d'obtenir un label de qualité",
                    description: "Plan pour améliorer la qualité en vue d'obtenir le label RSE après la crise de viande de cheval pour Findus",
                    image: findusImage,
                    miniatures: [findus_trace1, findus_trace2, findus_trace3],
                    commentaire: "Un projet personnel visant à présenter mes compétences en tant que développeur.",
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
                "AC 5.1 : Piloter un produit ou service": "#413ba9",
                "AC 5.2 : Maîtriser la qualité en projet Web ou multimédia": "#413ba9",
                "AC 5,3 : Créer un projet d’entreprise (nom, valeurs, missions...) ": "#413ba9",
                "AC 5.4 : Ecrire un plan d’affaires": "#413ba9",
                "AC 5,5 : Choisir une forme juridique ": "#413ba9",
                "AC 5.6 : Construire une présentation convaincante": "#413ba9",
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
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
}

.projets-container h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 36px;
    color: #333;
}

.projets-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.projet {
    /*background-color: #868686;*/
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    margin-bottom: 20vh;
}

.projet_com {
    padding: 15px;
}

.projet_image {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
}

.projet h3 {
    font-size: 30px;
    margin-top: 10px;
    color: #e77a7a;
}

.projet p {
    margin-bottom: 0;
    font-size: 18px;
    /*color: #555;*/
}

/* Style pour les tags */
.tags {
    margin-top: 4vh;
    margin-bottom: 3vh;
    display: flex;
    flex-direction: column;
}

.tag {
    background-color: #42b983;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    margin-top: 2vh;
    font-size: 14px;
    width: fit-content;
}

.miniatures {
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.miniature-image {
    width: 200px;
    height: 100px;
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
