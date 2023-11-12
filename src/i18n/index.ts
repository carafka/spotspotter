import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { resources } from '@/i18n/resources';

void i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
