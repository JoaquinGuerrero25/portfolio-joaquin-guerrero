import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "../locales/es/translation.json";
import en from "../locales/en/translation.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // idiomas soportados
        supportedLngs: ["es", "en"],
        fallbackLng: "es",
        // para Vite/React sin suspense
        react: { useSuspense: false },
        interpolation: { escapeValue: false },
        detection: {
            // primero lo que el usuario eligió antes
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"], // guarda la elección
        },
        resources: {
            es: { translation: es },
            en: { translation: en },
        },
    });

export default i18n;