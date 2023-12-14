<template>
    <div class="upcoming" v-if="getUpcomingMovies">

        <UpcomingItem v-for="(movie, i) in getUpcomingMovies" :key="movie.id" :movie="movie" :i="i"
            :nextMovie="getUpcomingMovies[i + 1 == getUpcomingMovies.length ? 0 : i + 1]" :slideView="slideView"
            @slideNext="slideNext" />

    </div>

    <Loader v-else />
</template>

<script setup>
import UpcomingItem from './UpcomingItem.vue';
import { useUpcoming } from '@/stores/Upcoming.js'
import { computed, ref, onMounted } from "vue";

const upcomingStore = useUpcoming()
const getUpcomingMovies = computed(() => upcomingStore.upcoming)

let slideView = ref(0)
let timeOut = ref(null)

upcomingStore.getUpcoming()

let slide = () => {

    getUpcomingMovies.value.length - 1 == slideView.value ? slideView.value = 0 : slideView.value++

    timeOut = setTimeout(() => slide(), 7000)
}

let slideNext = () => {
    clearTimeout(timeOut)
    slide()
}

onMounted(() => timeOut = setTimeout(() => slide(), 7000))


</script>
