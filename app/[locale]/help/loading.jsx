import { useTranslations } from 'next-intl';

export default function Loading() {
    const t = useTranslations('HelpPage');
    return <div>{t('loading')}</div>;
} 