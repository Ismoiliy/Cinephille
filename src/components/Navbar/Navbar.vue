<template>
    <nav class="nav">
        <div class="nav__item container">
            <router-link to="/" class="logo">
                <img src="@/assets/images/Logo.svg" alt="Logo">
            </router-link>

            <ul class="nav__item_list" :class="{ active: burger }" @click="burger = !burger">
                <li v-for="link in links" :key="link.title">
                    <router-link :to="link.url" class="nav__item_list_link">{{ link.title }}</router-link>
                </li>
                <li>
                    <router-link to="/search" class="nav__item_list_link">
                        <img src="@/assets/images/search.svg" alt="">
                    </router-link>
                </li>
            </ul>

            <button class="burger__menu" @click="burger = !burger">
                <img v-show="!burger" src="@/assets/images/menu.svg" alt="">
                <img v-show="burger" src="@/assets/images/close.svg" alt="">
            </button>

        </div>
    </nav>
</template>

<script setup>

import { ref } from "vue";

const links = ref([
    { title: 'Главная', url: '/' },
    { title: 'Фильмы', url: '/movie' },
    { title: 'Сериалы', url: '/tv' },
])

const burger = ref(false)



</script>

