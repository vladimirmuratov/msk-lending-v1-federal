import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter'
import {ThemeProvider} from '@mui/material/styles'
import {Montserrat} from 'next/font/google'
import {Box} from '@mui/material'
import {Footer} from '@/components/Footer'
import {Navigation} from '@/components/navigation/Navigation'
import {Metrika} from '@/components/Metrika'
import {Suspense} from 'react'
import theme from '@/theme'
import './globals.css'

const montserrat = Montserrat({subsets: ['latin', 'cyrillic']})

export const metadata = {
    title: 'Госпитализация в федеральные и ведомственные клиники – Медицинская Сервисная Компания, Москва. 8 (499) 719-81-00, 24/7',
    description: 'Организуем госпитализацию в ведущие федеральные и ведомственные клиники Москвы и России. Подбор профильного учреждения, сопровождение, индивидуальный подход. Надежно и оперативно. Звоните!',
    keywords: ['платная госпитализация', 'платная госпитализация в москве', 'госпитализация в стационар платно', 'центр платной госпитализации', 'платное лечение госпитализация', 'платная госпитализация пожилых', 'платная плановая госпитализация', 'платные клиники москва госпитализация'],
    other: {
        ['yandex-verification']: '941b23527bd65116',
    },
    openGraph: {
        title: 'Медицинская Сервисная Компания. Госпитализация в федеральный центр — быстро и без квот. 8 (499) 719-81-00, 24/7',
        description: 'Организуем госпитализацию в ведущие федеральные медицинские центры Москвы. Без ожидания и квот, помощь в оформлении, круглосуточная поддержка.',
        images: ['/images/banner2.webp'],
        url: 'https://region.mskdoctor.ru/',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation/>
                        {children}
                        <Footer/>
                        <Metrika/>
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}
