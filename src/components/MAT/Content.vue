<template>
    <section class="main__video" v-if="popularItem">
        <router-link to="/movie" class="main__video_title">

            <h2>{{ props.type == 'movie' ? 'Фильмы' : 'Сериалы' }}</h2>

            <img src="../../assets/images/arrow.png" alt="">
        </router-link>

        <swiper class="swiper" :navigation="true" :modules="modules" :breakpoints="swiperOptions.breakpoints"
            :space-between="25">

            <swiper-slide class="main__video_item" v-for="item in popularItem" :key="item.id" @click="getItem(item)">
                <img :src="getMoviesUrl + getMoviesSize + item.backdrop_path" alt="">
                <h3>{{ item.title || item.name }}</h3>
            </swiper-slide>

            <swiper-slide class="main__video_item">

                <router-link class="main__video_item-route" :to="props.type">
                    <img class="main__video_item-arrow" src="../../assets/images/arrow.png" alt="">
                    <span>{{ props.type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}</span>
                </router-link>

            </swiper-slide>

        </swiper>

        <ItemBlock :open="open" @close="close" :current="current" :type="type" />

    </section>

    <Loader v-else />
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ref, computed } from "vue";
import { usePopular } from "@/stores/Popular.js";
import ItemBlock from "@/components/itemBlock/ItemBlock.vue";

import { useUpcoming } from "@/stores/Upcoming.js";
const upcomingStores = useUpcoming()

const props = defineProps(['type'])
const modules = ref([Navigation])
const popularStore = usePopular()

const getMoviesUrl = computed(() => upcomingStores.movieUrl)
const getMoviesSize = computed(() => upcomingStores.movieSize)


const popularItem =
    computed(() => props.type == 'movie' ? popularStore.popularMovies : popularStore.popularTvs)

popularStore.getPopular({ type: props.type })

let swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5.5,
        }
    }
})

import { useItemById } from '@/stores/ItemById.js'
const itemByIdStores = useItemById()

let current = ref(null)
const open = ref(false)

const getItem = async (item) => {
    open.value = true
    current.value = ''
    await itemByIdStores.getItemById({ type: props.type, id: item.id })

    current.value = props.type == 'movie' ? itemByIdStores.movie : itemByIdStores.tv
    console.log(current.value);
}

const close = () => {
    open.value = false
    props.type == 'movie' ? itemByIdStores.movie = null : itemByIdStores.tv = null
}



</script>

