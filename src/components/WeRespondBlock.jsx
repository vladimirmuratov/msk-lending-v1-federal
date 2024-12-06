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

            <Typography variant="h2" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>
                Мы отвечаем за:
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{fontWeight: 600}}>Организация госпитализации:</Box>
                    <br/>
                    — Быстрое оформление пациента в стационар
                    <br/>
                    — Выбор медицинского учреждения, исходя из состояния пациента и специфики заболевания
                    <br/>
                    — Сопровождение при транспортировке, включая медицинскую эвакуацию при необходимости
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{fontWeight: 600}}>Медицинская транспортировка:</Box>
                    <br/>
                    — Предоставление санитарного транспорта, оснащённого необходимым оборудованием
                    <br/>
                    — Сопровождение квалифицированной медицинской бригадой
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{fontWeight: 600}}>Оценка состояния здоровья:</Box>
                    <br/>
                    — Первичный осмотр и диагностика состояния пациента
                    <br/>
                    — Принятие решения о срочности и типе госпитализации (плановая, экстренная)
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{fontWeight: 600}}>Координация с медучреждением:</Box>
                    <br/>
                    — Предварительная договорённость о приёме пациента
                    <br/>
                    — Подготовка необходимых документов
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{fontWeight: 600}}>Поддержка семьи:</Box>
                    <br/>
                    — Информирование родственников о ходе госпитализации
                    <br/>
                    — Предоставление услуг консультации и юридической поддержки (если требуется)
                </Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--main-color)'}}/>
                <Typography component="p" sx={{fontSize: { xs: 18, sm: 20 }, fontWeight: 500}}>
                    <Box component='span' sx={{fontWeight: 600}}>Дополнительные услуги:</Box>
                    <br/>
                    — Обеспечение комфорта пациента: улучшенные палаты, услуги сиделки, и т.д.
                    <br/>
                    — Медицинское сопровождение после выписки (амбулаторное лечение, реабилитация)
                </Typography>
            </Box>

        </Box>
    )
}
