<template>
    <div class="main__catalog container">
        <h2 class="main__catalog_title">{{ title }}</h2>


        <div class="main__catalog_list">
            <CatalogItem />
        </div>

    </div>
</template>

<script setup>
import { computed } from "vue";
import CatalogItem from "./CatalogItem.vue";

const props = defineProps({
    type: String
})

const title = computed(() => props.type == 'movie' ? 'Все фильмы' : 'Все сериалы')



</script>