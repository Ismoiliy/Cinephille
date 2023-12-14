<template>
    <div>

    </div>
</template>

<script setup>

import { useUpcoming } from "@/stores/Upcoming.js";
const upcomingStores = useUpcoming()
const getMoviesUrl = computed(() => upcomingStores.movieUrl)
const getMoviesSize = computed(() => upcomingStores.movieSize)

</script>

