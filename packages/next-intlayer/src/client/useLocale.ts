import {
  type Locales,
  intlayerMiddlewareConfiguration,
} from '@intlayer/config/client';
import { usePathname, useRouter } from 'next/navigation.js';
import { useLocale as useReactLocale, useLocaleCookie } from 'react-intlayer';

const { prefixDefault } = intlayerMiddlewareConfiguration;

export const useLocale = () => {
  const { setLocaleCookie } = useLocaleCookie();
  const reactLocaleHook = useReactLocale();
  const router = useRouter();
  const pathname = usePathname();

  const {
    defaultLocale,
    availableLocales,
    locale: currentLocale,
  } = reactLocaleHook;

  const setLocale = (locale: Locales) => {
    if (currentLocale.toString() === locale.toString()) return;

    if (!availableLocales.includes(locale)) {
      console.error(`Locale ${locale} is not available`);
      return;
    }

    setLocaleCookie(locale);

    const pathWithoutLocale =
      !prefixDefault && currentLocale.toString() === defaultLocale.toString()
        ? pathname
        : pathname.slice(`/${currentLocale}`.length) || '/';

    if (!prefixDefault && locale === defaultLocale) {
      return router.push(pathWithoutLocale);
    }

    return router.push(`/${locale}${pathWithoutLocale}`);
  };

  return {
    ...reactLocaleHook,
    setLocale,
  };
};