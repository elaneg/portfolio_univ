<template>
    <div class="accroche">
        <h1>{{ message }}</h1>
    </div>

    <div class="phrase">
        <p>Retrouvez ici mes travaux réalisés au cours de cette troisième année de bachelor MMI (Métiers du Multimédia
            et de l'Internet). </p>
        <p>
            <a href="https://787828270-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FWuu4m1EQjyaVJ7qOCUU9%2Fuploads%2FQs02bMLkY7DiqPFXo2gc%2FMMI_BU_2.PDF?alt=media&token=9ac48110-ef0e-43dc-9dc0-a194e8ed81b6"
            target="_blank"
            >Voir
                le référentiel de compétences</a></p>
    </div>

    <div class="legende">
        <div class="legende-item ue4">
            <span class="color-box"></span>
            UE 4 Développer
        </div>
        <div class="legende-item ue5">
            <span class="color-box"></span>
            UE 5 Entreprendre
        </div>
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

.phrase {
    text-align: center;
}

.legende {
    margin-top: 20px;
    text-align: center;
}

.legende-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    font-size: 16px;
}


.color-box {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
}

.ue4 .color-box {
    background-color: #42b983;
}

.ue5 .color-box {
    background-color: #282383;
}
</style>
