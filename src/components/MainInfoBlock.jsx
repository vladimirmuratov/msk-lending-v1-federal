import React from 'react';
import { Box, Typography } from '@mui/material';

export const MainInfoBlock = React.memo(() => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Box
                component="article"
                sx={{ paddingBottom: { xs: '25px', sm: '50px' } }}
            >

                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}>
                    Госпитализация в федеральные и ведомственные клиники Москвы
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px', color: 'var(--main-color)' }}>
                    Скоординировать быструю госпитализацию — задача не из простых, особенно когда речь о ведущих
                    московских клиниках, куда запись зачастую расписана на месяцы вперёд. В&nbsp;
                    <Box component="span" sx={{ color: 'var(--red)' }}>МСК</Box> мы занимаемся этой
                    задачей каждый день: берём на себя все заботы по устройству платной госпитализации в топовых&nbsp;
                    <Box component="span" sx={{ color: 'var(--red)' }}>федеральных и
                        ведомственных</Box> больницах столицы. К нам обращаются не только москвичи, но и пациенты со
                    всей России и ближнего зарубежья — в какой-то момент каждому из них понадобилась помощь попасть к
                    профильным специалистам без бесконечных согласований и бюрократии.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                    По сути, мы сокращаем то самое расхожее "путь пациента" с длинного квеста до вполне конкретных
                    шагов, а очереди и нервное ожидание результата остаются в прошлом — у нас главное не бумажки, а
                    люди.
                </Typography>
            </Box>

            <Box
                component="article"
                sx={{ paddingY: { xs: '25px', sm: '50px' } }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}>
                    Куда мы направляем наших пациентов
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    На самом деле, вариантов несколько — и каждый подбирается не наобум, а с оглядкой на конкретную
                    ситуацию. Есть <Box component="span" sx={{ color: 'var(--red)' }}>федеральные
                    клиники</Box> Минздрава и ФМБА: те самые крупные центры, где сосредоточился
                    опыт “на всю страну”. Есть <Box component="span" sx={{ color: 'var(--red)' }}>ведомственные
                    больницы</Box> — у МВД, Минобороны, РЖД или ФСБ — немного закрытые, специфические учреждения, куда
                    не всегда просто попасть, но иногда именно там нужная команда или техника.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Не забываем о <Box component="span" sx={{ color: 'var(--red)' }}>научно-исследовательских институтах
                    и госпиталях</Box> при университетах. Там к лечению подходят скрупулёзно, ведь каждый сложный случай
                    — это часть будущих достижений медицины.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Есть и <Box component="span" sx={{ color: 'var(--red)' }}>частные медицинские центры Москвы</Box> —
                    избранные из лучших по отзывам пациентов и результатам
                    работы.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                    И в каждом случае мы не действуем вслепую: смотрим на диагноз, осматриваемся по возможностям семьи —
                    потому что кому-то важнее экспертиза редких специалистов, а для кого-то принципиально условия
                    пребывания (или даже близость к дому). То есть подбор идёт максимально “под человека”.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{ paddingY: { xs: '25px', sm: '50px' } }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}>
                    Как проходит госпитализация
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '15px', color: 'var(--main-color)' }}>
                    На деле всё довольно просто и быстро. Вот как обычно проходит госпитализация с нашей помощью:
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Сначала <Box component="span" sx={{ color: 'var(--red)' }}>вы просто оставляете заявку или
                    звоните</Box> — неважно, одним сообщением или десятью вопросами
                    подряд. Мы на связи всегда. Дальше наша задача — разобраться в деталях: на этом этапе мы уточняем
                    диагноз, собираем ваши медицинские документы (иногда ищем вместе с вами, если что-то затерялось в
                    архивах).
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Когда у нас есть вся картина по вашему случаю, <Box component="span" sx={{ color: 'var(--red)' }}>ищем
                    подходящую клинику</Box>. Не по принципу «какая
                    свободна», а где действительно смогут помочь. Сразу согласовываем дату, уточняем нюансы по условиям
                    — вплоть до того, сможете ли взять любимый плед или понадобятся спецдиеты.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Дальше — вопрос логистики</Box>. Перелёт,
                    транспортировка (если нужен спецтранспорт, это тоже делаем
                    заранее), сопровождающий — чтобы вы или ваш близкий не чувствовали себя потерянными среди вопросов и
                    новых лиц.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    И вот <Box component="span" sx={{ color: 'var(--red)' }}>финальный шаг</Box>: пациент поступает на
                    лечение в выбранную клинику. Всё формальности уже улажены.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginBottom: '10px' }}>
                    Честно говоря, иногда весь этот <Box component="span" sx={{ color: 'var(--red)' }}>процесс
                    укладывается в один-два дня</Box> — бывает, что вечером позвонили,
                    а через сутки вы уже на этапе приёма врачом. Неделя ожидания? Не с нами.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{ paddingY: { xs: '25px', sm: '50px' } }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}>
                    Почему к нам обращаются
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20, marginBottom: '10px', color: 'var(--main-color)' } }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Когда вопрос стоит ребром — нужно
                        госпитализироваться</Box>, а времени на бесконечные очереди нет, люди
                    ищут вариант попроще. Мы давно поняли: скорость без потери качества — решающий аргумент. Берём на
                    себя оформление, чтобы человек не тратил нервы и дни ожидания у регистратуры.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20, marginBottom: '10px', color: 'var(--main-color)' } }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Про клиники</Box>. Мы принципиально работаем
                    только с теми, кому сами бы доверили своё здоровье: это крупные федеральные больницы — со своей
                    репутацией, современной аппаратурой и нормальными условиями для пациентов.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20, marginBottom: '10px', color: 'var(--main-color)' } }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Сопровождаем клиента на каждом этапе</Box> —
                    сначала помогаем подобрать врача по профилю, потом курируем сам процесс поступления и размещения.
                    Если нужно что-то разъяснить или решить спорный момент — не бросаем человека один на один с
                    системой.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20, marginBottom: '10px', color: 'var(--main-color)' } }}>
                    <Box component="span" sx={{ color: 'var(--red)' }}>Перевезти лежачего или тяжёлого
                        пациента?</Box> Не вопрос — есть собственная медицинская перевозка с бригадой и оборудованием.
                    Был случай: вручную поднимали пациента в старом доме без лифта (тоже справились). Так что не пугают
                    ни расстояния, ни сложные ситуации.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20, marginBottom: '10px', color: 'var(--main-color)' } }}>
                    И да, <Box component="span" sx={{ color: 'var(--red)' }}>география у нас широкая</Box>: помогают не
                    только москвичам, но и людям из регионов России, даже приезжим из стран СНГ устраиваем
                    госпитализацию быстро и без лишней беготни.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20, color: 'var(--main-color)' } }}>
                    В целом это про то, чтобы снять лишние хлопоты с плеч пациентов и их семей. Мы сами бы хотели такого
                    отношения к своим близким — поэтому делаем так для других.
                </Typography>

            </Box>

            <Box
                component="article"
                sx={{ paddingTop: { xs: '25px', sm: '50px' } }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}>
                    Основные направления госпитализации
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20, marginBottom: '10px', color: 'var(--main-color)' } }}>
                    Если попробовать разложить по полочкам, куда чаще всего попадают к нам пациенты, получится примерно
                    такой перечень: <Box component="span" sx={{ color: 'var(--red)' }}>хирургия</Box> (сюда же — <Box
                    component="span" sx={{ color: 'var(--red)' }}>травматология</Box>), <Box component="span"
                                                                                             sx={{ color: 'var(--red)' }}>кардиология
                    и неврология</Box> (потому
                    что сердце и
                    мозг нередко идут в тандеме), дальше — <Box component="span" sx={{ color: 'var(--red)' }}>гастроэнтерология
                    и пульмонология</Box> (то есть лечим как желудок, так и легкие), а еще
                    <Box component="span" sx={{ color: 'var(--red)' }}>онкология с последующей реабилитацией</Box>. Не
                    забыли и о возрастных пациентах: <Box component="span" sx={{ color: 'var(--red)' }}>геронтология,
                    терапия и эндопротезирование</Box> тут всегда актуальны.
                </Typography>
                <Typography sx={{ fontSize: { xs: 18, sm: 20, color: 'var(--main-color)' } }}>
                    Каждый пациент — отдельная история, универсальных шаблонов быть не может. Мы внимательно
                    разбираемся, что действительно подойдет именно вам — уже на этапе первого обращения пытаемся
                    подобрать условия лечения под ваши задачи и особенности здоровья. Каждая мелочь тут способна сыграть
                    решающую роль.
                </Typography>

            </Box>

        </Box>
    );
});
