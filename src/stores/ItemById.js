import { defineStore } from 'pinia'
import axios from "axios";
import { apiKey, getUrl } from '@/url.js'


export const useItemById = defineStore({

    id: 'itemById',

    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null
    }),

    actions: {
        async getItemById({ type, id }) {
            try {
                const res = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=RU`)

                type == 'movie' ? this.movie = res.data : this.tv = res.data

                console.log(res);

            } catch (error) {
                console.error('Произошла ошибка в получений информации о фильме или сериале по ID' + error);
            }
        },
    },
    getters: {}

})