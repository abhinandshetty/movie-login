import i18next from 'i18next';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useLocalization = () => {
  const [params] = useSearchParams();

  useEffect(() => {
    const lang = params.get('lang');
    if (lang === 'ar') {
      document.dir = 'rtl';
    }
    i18next.changeLanguage(params.get('lang'));
  }, []);
};
