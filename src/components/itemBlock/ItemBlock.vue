<template>
    <div class="main__info" :class="{ active: open }" v-if="current">

        <div class="main__info_block">

            <img @click="$emit('close')" class="main__info_block-close" src="@/assets/images/close.svg" alt="">

            <div class="main__info_block-left">
                <h2 class="main__info_block-left-title">{{ current.title || current.name }}</h2>
                <p class="main__info_block-left-text">{{ current.overview }}</p>

                <p class="main__info_block-left-desc">
                    <span>{{ getYear }}, {{ getGenres }}</span>
                    <span> 2h 12m</span>
                </p>

                <Actors :id="current.id" count="4" :type="type"/>
                <BtnMore />

            </div>

            <div class="main__info_block-right">
                <img :src="getMoviesUrl + getMoviesSize + current.backdrop_path" alt="">
            </div>


        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue'

import { useUpcoming } from "@/stores/Upcoming.js";
const upcomingStores = useUpcoming()
const getMoviesUrl = computed(() => upcomingStores.movieUrl)
const getMoviesSize = computed(() => upcomingStores.movieSize)

const props = defineProps({
    open: Boolean,
    current: Object,
    type: String
})

const getYear = computed(() =>
    new Date(props.current.release_date).getFullYear() ||
    new Date(props.current.first_air_date).getFullYear()
)

const getGenres = computed(() => props.current.genres.reduce((acc, item) => acc + ` , ${item.name}`, ''))

</script>
