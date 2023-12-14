<template>
    <router-link class="btnMore" to="/">
        <img src="@/assets/images/more.svg" alt="">
        <span>Подробнее</span>
    </router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.btnMore {
    width: 180px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #149A03;
    color: #FFF;
    font-size: 20px;
    line-height: 30px;
    gap: 10px;
}
</style>
