import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import { Metrika } from '@/components/Metrika';
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://federal.mskdoctor.ru'),
    title: 'Госпитализация в федеральные и ведомственные клиники Москвы',
    description: 'Организация госпитализации в федеральные и ведомственные лечебные учреждения Москвы. Консультации, подбор клиники, сопровождение пациента.',
    keywords: ['госпитализация в федеральные центры Москвы, госпитализация в ведомственные клиники, платная госпитализация Москва, госпитализация из регионов в Москву, госпитализация из СНГ, экстренная госпитализация Москва, плановая госпитализация в федеральный центр, медицинская транспортировка'],
    other: {
        ['yandex-verification']: '941b23527bd65116',
    },
    openGraph: {
        title: 'Госпитализация в федеральные и ведомственные медицинские центры Москвы | Платная госпитализация из регионов и СНГ. 8 (499) 719-81-00, 24/7',
        description: 'Медицинская Сервисная Компания — организация платной госпитализации в федеральные и ведомственные клиники Москвы. Экстренная и плановая помощь, транспортировка пациентов из регионов и СНГ, сопровождение врачей, подбор стационара без очередей.',
        images: ['/images/banner2.webp'],
        url: 'https://federal.mskdoctor.ru/',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika />
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
