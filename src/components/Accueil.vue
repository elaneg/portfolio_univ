<template>
    <div class="accroche">
        <h1>{{ message }}</h1>
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
</style>
