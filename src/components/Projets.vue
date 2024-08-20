<template>
    <div class="projets-container">
        <h2>Mes Projets</h2>
        <div class="projets-list">
            <div class="projet" v-for="(projet, index) in projets" :key="index">
                <h3>{{ projet.titre }}</h3>
                <p>{{ projet.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Projets",
    data() {
        return {
            projets: [
                { titre: "Projet 1", description: "Description du projet 1." },
                { titre: "Projet 2", description: "Description du projet 2." },
                { titre: "Projet 3", description: "Description du projet 3." },
                // Ajoutez d'autres projets ici
            ],
        };
    },
};
</script>

<style scoped>
.projets-container {
    width: 90%;
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
    max-height: 500px; /* Limite la hauteur de la liste pour permettre le défilement */
    overflow-y: auto; /* Active le défilement vertical si nécessaire */
}

.projet {
    padding: 15px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.projet h3 {
    margin-top: 0;
    color: #42b983;
}

.projet p {
    margin-bottom: 0;
    color: #555;
}
</style>
