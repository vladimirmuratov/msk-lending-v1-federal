import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const WeRespondBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: '12px',
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2" sx={{ color: 'var(--main-color)', marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>
                Наши обязательства:
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{ color: 'var(--red)',fontWeight: 600}}>Организация госпитализации:</Box>
                    <br/>
                    — Быстрая регистрация пациента в стационаре.
                    <br/>
                    — Подбор клиники согласно состоянию и заболеванию.
                    <br/>
                    — Транспортировка с медицинским сопровождением (включая эвакуацию).
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{ color: 'var(--red)', fontWeight: 600}}>Медицинская транспортировка:</Box>
                    <br/>
                    — Предоставление оснащенного санитарного транспорта.
                    <br/>
                    — Квалифицированная медицинская бригада сопровождения.
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{ color: 'var(--red)', fontWeight: 600}}>Оценка состояния здоровья:</Box>
                    <br/>
                    — Первичный осмотр и диагностика.
                    <br/>
                    — Определение срочности и типа госпитализации (плановая, экстренная).
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{ color: 'var(--red)',fontWeight: 600}}>Координация с медучреждением:</Box>
                    <br/>
                    — Договоренность о приеме пациента.
                    <br/>
                    — Подготовка необходимой документации.
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{ color: 'var(--red)', fontWeight: 600}}>Поддержка семьи:</Box>
                    <br/>
                    — Информационная поддержка родственников.
                    <br/>
                    — Консультации и юридическая помощь (при необходимости).
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--red)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{ color: 'var(--red)', fontWeight: 600}}>Дополнительные услуги:</Box>
                    <br/>
                    — Комфортные условия пребывания: улучшенные палаты, услуги сиделки.
                    <br/>
                    — Постгоспитальное сопровождение: амбулаторное лечение, реабилитация.
                </Typography>
            </Box>

        </Box>
    )
}
