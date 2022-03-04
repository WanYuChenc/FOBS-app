/**
 * 仅测试使用 vue store存储在app杀死后会清除
 * 实际应使用 @ionic/storage 进行app本地存储
 * 若存储的数据过多，请使用Module进行模块化处理
 **/
import {createStore} from "vuex";
import languageModule from "@/store/modules/language";
const store = createStore({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
    modules: {
        languageModule
    }
})

export default store;