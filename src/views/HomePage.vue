<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>{{ $t('system.title') }}:{{ language }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div id="container">
                <div>
                    <ion-button color="secondary" @click="getSomethings">TEST AXIOS</ion-button>
                </div>
                <div>
                    <ion-button color="secondary" @click="changeLanguage">CHANGE LANG</ion-button>
                </div>
                <strong>Ready to create an app?</strong>
                <p>Start with Ionic <a target="_blank" rel="noopener noreferrer"
                                       href="https://ionicframework.com/docs/components">UI Components</a></p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/vue';
import {computed, defineComponent} from 'vue';
import {useStore} from "vuex";
import {useI18n} from "vue-i18n";
import {testGet} from "@/api/test";

export default defineComponent({
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonButton
    },
    setup() {
        const store = useStore();
        const { locale } = useI18n();
        const language = computed(() => store.getters["languageModule/getLanguage"]);
        const getSomethings = () => {
            testGet().then(res => {
                console.log(res)
            })
        }
        const changeLanguage = () => {
            if (locale.value === 'en') {
                locale.value = 'zh'
                store.dispatch('languageModule/updateLanguage', locale.value)
            } else {
                locale.value = 'en'
                store.dispatch('languageModule/updateLanguage', locale.value)
            }
        }
        return {
            language,
            changeLanguage,
            getSomethings
        }
    }
});
</script>

<style lang="scss" scoped>
@import "src/common/layout";
#container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
}

#container a {
    text-decoration: none;
}
</style>