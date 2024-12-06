import { Box, Typography } from '@mui/material';

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{ marginBottom: '20px', fontSize: { xs: '28px', sm: '34px' }, fontWeight: 500 }}>О
                нас</Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    // marginBottom: '10px'
                }}
            >
                Московская Сервисная Компания (<Box component="span" sx={{ fontWeight: 600 }}>МСК-Групп</Box>)
                предоставляет услуги ведущих клиник федерального уровня и
                подведомственных учреждений Москвы и Московской области. При медицинских показаниях гарантируем
                оперативное решение о платном размещении больных с разнообразными диагнозами по доступным тарифам.
                <br />
                Обратившись в <Box component="span" sx={{ fontWeight: 600 }}>МСК-Групп</Box>, вы можете быть уверены:
                необходимая поддержка прибудет без задержек и ваше
                здоровье будет под надежной защитой.
            </Typography>
        </Box>
    );
};
