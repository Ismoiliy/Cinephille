import { defineStore } from 'pinia'
import axios from "axios";
import { apiKey, getUrl } from '@/url.js'


export const useTop = defineStore({

    id: 'top',

    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        top: null
    }),

    actions: {
        async getTop() {
            try {
                const res = await axios.get(`${this.url}?api_key=${apiKey}&language=RU`)
                let data = res.data.results.splice(10, 10)
                
                this.top = data
                
            } catch (error) {
                console.error('Произошла ошибка в получений топ фильмов и сериалов' + error);
            }
        },
    },
    getters: {}

})