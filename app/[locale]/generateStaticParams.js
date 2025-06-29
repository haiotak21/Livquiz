import { routing } from '../../lib/routing';

// Enables static rendering for all locales in the [locale] segment
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
} 