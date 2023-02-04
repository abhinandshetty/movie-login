import i18next, { init } from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationsEn = {
  welcome: 'Welcome to Movie Central!',
  loginPageSubText: 'Please login to your account',
  emailLabel: 'Email',
  emailRequired: 'Email is required',
  validEmail: 'Please enter a valid email',
  passwordLabel: 'Password',
  passwordMaxLength: 'Password must not be more than 15 characters',
  passwordCriteria:
    'Password must contain at least 8 characters, one uppercase, one number and one special case character',
  login: 'Login',
  searchLabel: 'Search movie',
  searchFieldPlaceholder: 'Try "The Avengers", "Harry Potter"',
  noResultsFound: 'No results found',
};
const translationsAr = {
  welcome: 'مرحبًا بك في Movie Central!',
  loginPageSubText: 'يرجى تسجيل الدخول إلى حسابك',
  emailLabel: 'عنوان الايميل',
  emailRequired: 'مطلوب عنوان البريد الإلكتروني',
  validEmail: 'يرجى إدخال عنوان بريد إلكتروني صالح',
  passwordLabel: 'كلمة المرور',
  passwordMaxLength: 'يجب ألا تزيد كلمة المرور عن 15 حرفًا',
  passwordCriteria: 'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل ، وحرف كبير واحد ورقم واحد وحرف خاص واحد',
  login: 'تسجيل الدخول',
  searchLabel: 'ابحث عن فيلم',
  searchFieldPlaceholder: 'جرب "The Avengers" ، "Harry Potter"',
  noResultsFound: 'لم يتم العثور على نتائج',
};

i18next.use(initReactI18next);

init({
  resources: {
    en: { translation: translationsEn },
    ar: { translation: translationsAr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18next;
