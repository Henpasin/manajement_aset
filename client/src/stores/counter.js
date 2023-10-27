import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
const BASE_URL = "https://login.marvis.id"
const KEY = import.meta.env.VITE_SECRET_KEY

export const useCounterStore = defineStore('counter', {
    state: () => ({
        authData: [],
        dataSideBar: [],
        authTopMenu: [],
    }),

    actions: {
        async handleData() {
            try {
                const { data } = await axios.get(`${BASE_URL}/auth/data-hendrosinambela19@gmail.com`, {
                    headers: { 'key': KEY },
                });
                this.authData = data.data
            } catch (error) {

            }
        },

        async handleMenu() {
            try {
                const { data } = await axios.get(`${BASE_URL}/auth/menu-hendrosinambela19@gmail.com`, {
                    headers: { 'key': KEY },
                });
                this.dataSideBar = data.data
            } catch (err) {
                console.log(err);
            }
        },
        async handleTopMenu() {
            try {
                const { data } = await axios.get(`${BASE_URL}/auth/topMenu-hendrosinambela19@gmail.com`, {
                    headers: { 'key': KEY },
                });
                this.authTopMenu = data.data
            } catch (error) {

            }
        },
    }
})