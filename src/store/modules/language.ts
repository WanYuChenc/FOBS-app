import { Module } from "vuex";
import {storageInstance} from "@/utils/storage";
const languageKey = 'language'
const languageModule : Module<any, any> = {
    namespaced: true,
    state: {
        //语言应该从安卓系统系统获取
        language: await storageInstance.get(languageKey)
    },
    mutations: {
        TOGGLE_LANGUAGE(state, payload) {
            storageInstance.set(languageKey, payload.language).then(() => {
                state.language = payload.language
            })
        }
    },
    actions: {
        updateLanguage({commit}, payload) {
            commit({
                type:'TOGGLE_LANGUAGE',
                language: payload
            })
        }
    },
    getters: {
        getLanguage: state => {
            return state.language
        }
    }
}

export default languageModule