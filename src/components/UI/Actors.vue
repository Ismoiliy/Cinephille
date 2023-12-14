<template>
    <div class="actors" v-if="actors">

        <div class="actors__item" v-for="actor in actors" :key="actor.id">
            <img :src="getMoviesUrl + getMoviesSize + actor.profile_path" alt="">
            <span>{{ actor.original_name }}</span>
        </div>

    </div>
</template>

<script setup>
import { useActors } from "@/stores/Actors.js";
import { computed, ref } from "vue";

import { useUpcoming } from "@/stores/Upcoming.js";
const upcomingStores = useUpcoming()
const getMoviesUrl = computed(() => upcomingStores.movieUrl)
const getMoviesSize = computed(() => upcomingStores.movieSize)

const props = defineProps({
    type: String,
    count: Number,
    id: Number
})
const actorsStores = useActors()

actorsStores.getActors({ type: props.type, id: props.id })

const actors = computed(() => {

    let actorsArray = props.type == 'movie' ? actorsStores.actorsMovie : actorsStores.actorsTv

    if (actorsArray) {
        return actorsArray.slice(0, props.count)
    }

})



</script>

<style lang="scss" scoped>
.actors {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 500px;
    width: 100%;

    &__item {
        border-radius: 25px;
        border: 1px solid #FFF;
        background: rgba(20, 20, 20, 0.50);
        display: flex;
        gap: 10px;
        align-items: center;
        padding-right: 15px;

        & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 1px solid #000;
        }

        & span {
            color: #FFF;
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;
        }
    }
}
</style>