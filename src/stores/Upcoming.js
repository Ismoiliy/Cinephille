import { defineStore } from 'pinia'
import axios from "axios";
import { apiKey, getUrl } from '@/url.js'


export const useUpcoming = defineStore({

    id: 'Upcoming',

    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        upcoming: null,
        movieUrl: null,
        movieSize: null,
    }),

    actions: {
        async getUpcoming() {
            try {
                const res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU`)
                this.upcoming = res.data.results
            } catch (error) {
                console.error('Произошла ошибка в получений Предстоящих фильмов');
            }
        },

        async getConfiguration() {
            try {
                let res = await axios.get(`${getUrl}?api_key=${apiKey}&language=ru-RU`)
                this.movieUrl = res.data.images.base_url
                this.movieSize = res.data.images.backdrop_sizes[3]
                // console.log(res);
            } catch (error) {
                console.error('Произошла ошибка в получении конфигурации картинок');
            }
        }

    },
    getters: {}

})