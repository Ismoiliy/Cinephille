<template>
    <section class="main__top">

        <h2 class="main__top_title">
            ТОП
            <span>10</span>
        </h2>


        <swiper class="swiper" :navigation="true" :modules="modules" :breakpoints="swiperOptions.breakpoints"
            :space-between="25">

            <swiper-slide class="main__top_item" v-for="(item, i) in content" :key="item.id">

                <div class="main__top_item-info">
                    <span>{{ i + 1 }}</span>
                </div>

                <img class="main__top_item-img" :src="getMoviesUrl + getMoviesSize + item.backdrop_path" alt="">

            </swiper-slide>

        </swiper>

    </section>
</template>

<script setup>
import { ref, computed } from "vue";

/* Инфа для картинок */
import { useUpcoming } from "@/stores/Upcoming.js";
const upcomingStores = useUpcoming()
const getMoviesUrl = computed(() => upcomingStores.movieUrl)
const getMoviesSize = computed(() => upcomingStores.movieSize)

/* Информация о Top10 */
import { useTop } from '@/stores/top.js'
const topStores = useTop()
topStores.getTop()

const content = computed(() => topStores.top)



/* Настройки слайдера */
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const modules = ref([Navigation])

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
        1400: {
            slidesPerView: 3.5,
        }
    }
})

</script>

