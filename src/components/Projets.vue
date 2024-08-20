<template>
    <div class="projets-container">
        <h2>Mes Projets</h2>
        <div class="projets-list">
            <div class="projet" v-for="(projet, index) in projets" :key="index">
                <img :src="projet.image" :alt="projet.titre" />
                <h3>{{ projet.titre }}</h3>
                <p>{{ projet.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import portfolioImage from '../assets/protfolio_pro.jpg';
import lunetterieImage from '../assets/lunetterie.jpg';
export default {
    name: "Projets",
    data() {
        return {
            projets: [
                {
                    titre: "Portfolio professionnel",
                    description: "Un site web portfolio pour présenter mes travaux professionnels.",
                    image: portfolioImage
                },
                {
                    titre: "Projet Symfony",
                    description: "Développement d'une application web avec Symfony.",
                    // image: symfonyImage
                },
                {
                    titre: "Lunetterie de Villeroy",
                    description: "Site e-commerce pour une lunetterie.",
                    image: lunetterieImage
                },
                {
                    titre: "Projet Minh-Thai",
                    description: "Application de gestion de stock.",
                    // image: minhThaiImage
                },
                {
                    titre: "Findus",
                    description: "Analyse et visualisation de données.",
                    // image: findusImage
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
</style>
