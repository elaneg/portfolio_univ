<template>
    <div class="accroche">
        <h1>{{ message }}</h1>
    </div>

    <div class="phrase">
        <p>Retrouvez ici mes travaux réalisés au cours de cette troisième année de formation. </p>
        <p><a href="#">Voir le référentiel de compétences</a></p>
    </div>
</template>

<script>
export default {
    name: "Accroche",
    data() {
        return {
            message: "Bienvenue sur mon portfolio universitaire !",
        };
    },
};
</script>

<style scoped>
.accroche {
    text-align: center;
    margin-top: 50px;
    font-size: 24px;
    color: #333;
}

.phrase{
    text-align: center;
}
</style>
