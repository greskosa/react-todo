import React from "react";

export const langs = {
   en: {
        "loading": "Loading...",
        "chooseLanguage": "Choose language"
    },
    ru: {
        "loading": "Загрузка...",
        "chooseLanguage": "Виберите язык"
    }
};


export const LanguageContext =  React.createContext(langs.en);


