import {setRequestLocale} from 'next-intl/server';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../lib/routing';

// Main layout for the [locale] segment
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>{children}</NextIntlClientProvider>
  );
}

// Re-export generateStaticParams for static rendering
export { generateStaticParams } from './generateStaticParams'; 