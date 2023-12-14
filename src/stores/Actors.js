import { defineStore } from 'pinia'
import axios from "axios";
import { apiKey, getUrl } from '@/url.js'


export const useActors = defineStore({

    id: 'Actors',

    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        actorsMovie: null,
        actorsTv: null
    }),

    actions: {
        async getActors({ type, id }) {
            try {
                const res = await axios.get(`${this.url}${type}/${id}/credits?api_key=${apiKey}&language=RU`)

                type == 'movie' ? this.actorsMovie = res.data.cast : this.actorsTv = res.data.cast

                console.log(res);

            } catch (error) {
                console.error('Произошла ошибка в получений информации о актёрах в фильмах и сериалах' + error);
            }
        },
    },
    getters: {}

})