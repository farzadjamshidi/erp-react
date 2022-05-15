import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_common from '../assets/lang/en/common.json';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'en',                              // language to use
        resources: {
            en: {
                common: en_common               // 'common' is our custom namespace
            },       
        },
    });

export default i18n;