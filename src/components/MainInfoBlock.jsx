import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MainInfoBlock = () => {
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
                sx={{ paddingBottom: { xs: '25px', sm: '50px' } }}
            >

                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 500
                    }}>
                    Быстрая и надёжная помощь в оформлении госпитализации
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px', color: 'var(--main-color)' }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>Медицинская Сервисная Компания
                        (МСК)</Box> организует платную госпитализацию в ведущие федеральные и ведомственные клиники
                    Москвы .
                    Мы работаем с пациентами из Москвы, регионов России и стран СНГ, помогая попасть в лучшие
                    медицинские
                    центры без лишних ожиданий и сложностей.
                </Typography>
            </Box>

            <Box
                sx={{ paddingY: { xs: '25px', sm: '50px' } }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 500
                    }}>
                    Преимущества госпитализации с нами
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Подбор федеральных и ведомственных центров в Москве
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography component="p"
                                    sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Экстренная и плановая госпитализация без очередей
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography component="p"
                                    sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Медицинская транспортировка из регионов и СНГ
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography component="p"
                                    sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Квалифицированный персонал и сопровождение пациентов
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography component="p"
                                    sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)' }}>
                            Прозрачные цены и индивидуальный подход
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{ paddingY: { xs: '25px', sm: '50px' } }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 500
                    }}>
                    В какие клиники возможна госпитализация
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px', color: 'var(--main-color)' }}>
                    Мы сотрудничаем с ведущими федеральными и ведомственными учреждениями Москвы, где пациенты получают
                    лечение по самым современным медицинским стандартам.
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 500,
                        color: 'var(--main-color)',
                        marginBottom: '20px'
                    }}
                >
                    Основные направления:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            кардиология и сосудистая хирургия
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            неврология и инсультные центры
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            онкология и гематология
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            гастроэнтерология
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            травматология и ортопедия
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            реабилитация после операций и тяжёлых заболеваний
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{ paddingY: { xs: '25px', sm: '50px' } }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 500
                    }}>
                    Госпитализация для пациентов из регионов и СНГ
                </Typography>

                <Typography sx={{ fontSize: { xs: 18, sm: 20, marginBottom: '20px', color: 'var(--main-color)' } }}>
                    Если вы находитесь за пределами Москвы, мы организуем:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            медицинскую транспортировку в специализированном автомобиле
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            сопровождение врача в пути
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            оформление всех документов для госпитализации
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{
                            fontSize: { xs: 18, sm: 20 },
                            color: 'var(--main-color)',
                            textTransform: 'uppercase'
                        }}>
                            подбор оптимального стационара под диагноз
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{ paddingTop: { xs: '25px', sm: '50px' } }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 500
                    }}>
                    Почему выбирают нас
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                            Работаем 24/7 — помощь в любой ситуации
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                            Экстренная госпитализация за несколько часов
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                            Поддержка пациента и семьи на всех этапах
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckIcon sx={{ color: 'var(--red)' }} />
                        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                            Опыт работы с тяжёлыми и неотложными случаями
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};
