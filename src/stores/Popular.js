import { defineStore } from 'pinia'
import axios from "axios";
import { apiKey, getUrl } from '@/url.js'


export const usePopular = defineStore({

    id: 'popular',

    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        popularMovies: null,
        popularTvs: null
    }),

    actions: {
        async getPopular({ type }, page = 1) {
            try {
                const res = await axios.get(`${this.url}${type}/popular?api_key=${apiKey}&language=ru-RU&page=${page}`)

                if (type == 'movie') {
                    this.popularMovies = res.data.results
                } else if (type == 'tv') {
                    this.popularTvs = res.data.results
                }

            } catch (error) {
                console.error('Произошла ошибка в получений популярных фильмов и сериалов');
            }
        },
    },
    getters: {}

})