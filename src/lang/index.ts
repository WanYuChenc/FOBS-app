import {createI18n} from "vue-i18n";

import {storageInstance} from "@/utils/storage";
const languageKey = 'language'
import en from './pack/en'
import zh from './pack/zh'

const messages = {
    en: {
        ...en
    },
    zh: {
        ...zh
    }
}

export const getLocale = () => {
    const cookieLanguage = storageInstance.get(languageKey)
    if (cookieLanguage) {
        return cookieLanguage
    } else {
        return 'en'
    }
}

const i18n = createI18n({
    locale: await getLocale(),
    messages
})

export default i18n