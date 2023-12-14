<template>
    
    <Transition name="upcoming__item">
        <div class="upcoming__item" v-if="slideView == i">
            <img :src="getMoviesUrl + getMoviesSize + movie.backdrop_path" alt="bg" class="upcoming__item_bg">
            <h1 class="upcoming__item_title">{{ movie.title }}</h1>
            <p class="upcoming__item_text">{{ movie.overview || "К данному фильму нет описания" }}</p>

            <BtnMore />

            <div class="upcoming__item_next" @click="$emit('slideNext')">
                <div class="upcoming__item_next-desc">
                    <p>Следующий</p>
                    <span>{{ nextMovie.title }}</span>
                </div>
                <img :src="getMoviesUrl + getMoviesSize + nextMovie.backdrop_path" alt="">
            </div>

        </div>
    </Transition>
    
</template>

<script setup>

import { useUpcoming } from "@/stores/Upcoming.js";
import { computed } from "vue";

const upcomingStores = useUpcoming()

upcomingStores.getConfiguration()

const getMoviesUrl = computed(() => upcomingStores.movieUrl)
const getMoviesSize = computed(() => upcomingStores.movieSize)



const props = defineProps({
    movie: {
        typeof: Object
    },
    i: {
        typeof: Number
    },
    nextMovie: {
        typeof: Object
    },
    slideView: {
        typeof: Number
    }
})




</script>
