import { Box, Typography } from '@mui/material';

export const WhyWeBlock = () => {
    return (
        <Box
            component="section"
            id="whyWe"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{
                            color: 'var(--main-color)',
                            marginBottom: '20px',
                            fontSize: { xs: '28px', sm: '34px' },
                            fontWeight: 500
                        }}>
                Почему выбирают нас?
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                Мы специализируемся на размещении пациентов в медицинских учреждениях Москвы и Подмосковья, обладая
                полной информацией о лучших клиниках и специалистах. Точно определяем стоимость отдельных палат и
                подбираем оптимальный вариант госпитализации, исходя из ваших медицинских потребностей.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>В случае отказа в
                    госпитализации</Box> из других клиник быстро реагируем, учитывая все особенности, включая
                лечение пожилых пациентов. Обеспечиваем круглосуточное сопровождение семь дней в неделю для
                максимального комфорта и высокого качества медицинских услуг.
            </Typography>
        </Box>
    );
};
